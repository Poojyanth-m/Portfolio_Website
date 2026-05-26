"use client";

import React, { useRef, useLayoutEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full box-border ${itemClassName}`.trim()}
    style={{ willChange: 'transform', transformOrigin: 'top center' }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  /** Natural gap between cards (px) */
  itemDistance?: number;
  /** Scale reduction per level stacked behind (e.g. 0.03 → each buried card is 3% smaller) */
  itemScale?: number;
  /** Vertical peek distance between stacked cards (px) */
  itemStackDistance?: number;
  /** Where the card pins from viewport top — CSS % or px string */
  stackPosition?: string;
  /** Where scale animation completes — CSS % or px string */
  scaleEndPosition?: string;
  /** Minimum scale (deepest buried card) */
  baseScale?: number;
  /** Max blur on buried cards (px) */
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

/**
 * Returns the element's true document-relative top via offsetTop traversal.
 * This is NOT affected by CSS transforms — the only stable measurement.
 */
function getDocumentTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

function parsePx(value: string, base: number): number {
  if (typeof value === 'string' && value.trim().endsWith('%')) {
    return (parseFloat(value) / 100) * base;
  }
  return parseFloat(value as string);
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 20,
  stackPosition = '12%',
  scaleEndPosition = '5%',
  baseScale = 0.85,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  // Cached natural (pre-transform) document tops — never re-read in scroll loop
  const naturalTopsRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const scheduledRef = useRef(false);
  const stackCompletedRef = useRef(false);

  // ─── Core animation loop (only writes, never reads layout) ────────────────
  const applyTransforms = useCallback(() => {
    scheduledRef.current = false;
    const cards = cardsRef.current;
    const tops = naturalTopsRef.current;
    if (!cards.length || !tops.length) return;

    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const stackPx = parsePx(stackPosition, vh);
    const scaleEndPx = parsePx(scaleEndPosition, vh);
    const n = cards.length;

    // The last card's pin-start marks the end of the whole stack sequence
    const lastPinStart = tops[n - 1] - stackPx - (n - 1) * itemStackDistance;
    const pinEnd = lastPinStart + vh * 0.5;

    cards.forEach((card, i) => {
      const cardTop = tops[i];
      const pinStart = cardTop - stackPx - i * itemStackDistance;

      // ── Translate Y (sticky pin) ──────────────────────────────────────────
      let ty = 0;
      if (scrollY >= pinStart && scrollY <= pinEnd) {
        ty = scrollY - cardTop + stackPx + i * itemStackDistance;
      } else if (scrollY > pinEnd) {
        ty = pinEnd - cardTop + stackPx + i * itemStackDistance;
      }

      // ── Scale (shrink as subsequent cards stack over this one) ────────────
      let scale = 1.0;
      for (let j = i + 1; j < n; j++) {
        const jPinStart = tops[j] - stackPx - j * itemStackDistance;
        const jScaleEnd = tops[j] - scaleEndPx;
        const range = Math.max(jScaleEnd - jPinStart, 1);
        const progress = Math.min(1, Math.max(0, (scrollY - jPinStart) / range));
        scale -= progress * itemScale;
      }
      // Floor: the deepest card never goes below baseScale
      scale = Math.max(scale, baseScale + i * itemScale);

      // ── Blur (optional) ───────────────────────────────────────────────────
      let filterStr = '';
      if (blurAmount && i < n - 1) {
        const span = 1 - (baseScale + i * itemScale);
        const blurProgress = span > 0 ? Math.min(1, Math.max(0, (1 - scale) / span)) : 0;
        if (blurProgress > 0.01) {
          filterStr = `blur(${Math.round(blurProgress * blurAmount * 10) / 10}px)`;
        }
      }

      // Sub-pixel rounding prevents half-pixel oscillation
      const tyR = Math.round(ty * 10) / 10;
      const scR = Math.round(scale * 100000) / 100000;

      card.style.transform = `translate3d(0, ${tyR}px, 0) scale(${scR})`;
      card.style.filter = filterStr;
    });

    // onStackComplete callback
    if (onStackComplete) {
      const lastPinStartFinal = tops[n - 1] - parsePx(stackPosition, window.innerHeight) - (n - 1) * itemStackDistance;
      const inStack = scrollY >= lastPinStartFinal && scrollY <= lastPinStartFinal + window.innerHeight * 0.5;
      if (inStack && !stackCompletedRef.current) { stackCompletedRef.current = true; onStackComplete(); }
      if (!inStack && stackCompletedRef.current) { stackCompletedRef.current = false; }
    }
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, blurAmount, onStackComplete]);

  const scheduleUpdate = useCallback(() => {
    if (scheduledRef.current) return;
    scheduledRef.current = true;
    rafRef.current = requestAnimationFrame(applyTransforms);
  }, [applyTransforms]);

  // ─── Measure natural positions via offsetTop (transform-immune) ───────────
  const measureCards = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;
    naturalTopsRef.current = cards.map(getDocumentTop);
  }, []);

  // ─── Boot ──────────────────────────────────────────────────────────────────
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll<HTMLElement>('.scroll-stack-card'));
    cardsRef.current = cards;

    // Apply spacing + transform origin
    cards.forEach((card, i) => {
      card.style.transformOrigin = 'top center';
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
    });

    // Measure after first paint (layout is settled)
    const raf = requestAnimationFrame(() => {
      measureCards();
      applyTransforms();
    });

    window.addEventListener('scroll', scheduleUpdate, { passive: true });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { measureCards(); applyTransforms(); }, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', onResize);
      cardsRef.current = [];
      naturalTopsRef.current = [];
      scheduledRef.current = false;
      stackCompletedRef.current = false;
    };
  }, [itemDistance, measureCards, applyTransforms, scheduleUpdate]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full px-4 md:px-12 lg:px-20 pb-[50vh] ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default ScrollStack;
