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
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

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
  const naturalTopsRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastScrollYRef = useRef<number>(-1);
  const stackCompletedRef = useRef(false);

  const applyTransforms = useCallback((scrollY: number) => {
    const cards = cardsRef.current;
    const tops = naturalTopsRef.current;
    if (!cards.length || !tops.length) return;

    const vh = window.innerHeight;
    const stackPx = parsePx(stackPosition, vh);
    const scaleEndPx = parsePx(scaleEndPosition, vh);
    const n = cards.length;

    const lastPinStart = tops[n - 1] - stackPx - (n - 1) * itemStackDistance;
    const pinEnd = lastPinStart + vh * 0.5;

    cards.forEach((card, i) => {
      const cardTop = tops[i];
      const pinStart = cardTop - stackPx - i * itemStackDistance;

      let ty = 0;
      if (scrollY >= pinStart && scrollY <= pinEnd) {
        ty = scrollY - cardTop + stackPx + i * itemStackDistance;
      } else if (scrollY > pinEnd) {
        ty = pinEnd - cardTop + stackPx + i * itemStackDistance;
      }

      let scale = 1.0;
      for (let j = i + 1; j < n; j++) {
        const jPinStart = tops[j] - stackPx - j * itemStackDistance;
        const jScaleEnd = tops[j] - scaleEndPx;
        const range = Math.max(jScaleEnd - jPinStart, 1);
        const progress = Math.min(1, Math.max(0, (scrollY - jPinStart) / range));
        scale -= progress * itemScale;
      }
      scale = Math.max(scale, baseScale + i * itemScale);

      // Round to avoid sub-pixel oscillation
      const tyR = Math.round(ty * 10) / 10;
      const scR = Math.round(scale * 100000) / 100000;

      card.style.transform = `translate3d(0,${tyR}px,0) scale(${scR})`;
    });

    if (onStackComplete) {
      const lastPinStartFinal = tops[n - 1] - parsePx(stackPosition, window.innerHeight) - (n - 1) * itemStackDistance;
      const inStack = scrollY >= lastPinStartFinal && scrollY <= lastPinStartFinal + window.innerHeight * 0.5;
      if (inStack && !stackCompletedRef.current) { stackCompletedRef.current = true; onStackComplete(); }
      if (!inStack && stackCompletedRef.current) { stackCompletedRef.current = false; }
    }
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, onStackComplete]);

  const measureCards = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;
    // Reset transforms before measuring so offsetTop is clean
    cards.forEach(card => { card.style.transform = ''; });
    naturalTopsRef.current = cards.map(getDocumentTop);
  }, []);

  // Continuous RAF loop — runs every display frame, never misses a scroll tick
  useLayoutEffect(() => {
    const loop = () => {
      const scrollY = window.scrollY;
      // Only recalculate when scroll position has actually changed
      if (scrollY !== lastScrollYRef.current) {
        lastScrollYRef.current = scrollY;
        applyTransforms(scrollY);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyTransforms]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll<HTMLElement>('.scroll-stack-card'));
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      card.style.transformOrigin = 'top center';
      card.style.willChange = 'transform';
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
    });

    // Measure after layout settles
    const raf = requestAnimationFrame(() => {
      measureCards();
      applyTransforms(window.scrollY);
    });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measureCards();
        lastScrollYRef.current = -1; // force recompute
      }, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      cards.forEach(card => { card.style.transform = ''; card.style.marginBottom = ''; });
      cardsRef.current = [];
      naturalTopsRef.current = [];
      lastScrollYRef.current = -1;
      stackCompletedRef.current = false;
    };
  }, [itemDistance, measureCards, applyTransforms]);

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
