import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top ${itemClassName}`.trim()}
    style={{
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    }}
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
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  // KEY FIX: store original card tops ONCE, never re-read after transforms are applied
  const originalCardTopsRef = useRef<number[]>([]);
  const originalEndTopRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const isScheduledRef = useRef(false);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (end <= start) return 0;
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const updateCardTransforms = useCallback(() => {
    isScheduledRef.current = false;
    const cards = cardsRef.current;
    if (!cards.length || !originalCardTopsRef.current.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop ?? 0);
    const containerHeight = useWindowScroll ? window.innerHeight : (scrollerRef.current?.clientHeight ?? 0);

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endTop = originalEndTopRef.current;
    const pinEnd = endTop - containerHeight * 0.5;

    cards.forEach((card, i) => {
      if (!card) return;

      // Always use the original (pre-transform) top — never getBoundingClientRect
      const cardTop = originalCardTopsRef.current[i];

      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerStart = pinStart;
      const triggerEnd = cardTop - scaleEndPositionPx;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // Round to prevent sub-pixel jitter
      const ty = Math.round(translateY * 10) / 10;
      const sc = Math.round(scale * 1000) / 1000;
      const ro = Math.round(rotation * 10) / 10;

      card.style.transform = `translate3d(0, ${ty}px, 0) scale(${sc}) rotate(${ro}deg)`;

      if (blurAmount) {
        card.style.filter = scaleProgress > 0 ? `blur(${Math.round(scaleProgress * blurAmount * 10) / 10}px)` : '';
      }

      // Stack complete callback
      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
  ]);

  const scheduleUpdate = useCallback(() => {
    if (isScheduledRef.current) return;
    isScheduledRef.current = true;
    rafRef.current = requestAnimationFrame(updateCardTransforms);
  }, [updateCardTransforms]);

  // Cache original card positions ONCE after layout, before any transforms
  const cacheOriginalPositions = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    if (useWindowScroll) {
      originalCardTopsRef.current = cards.map(card => {
        // Temporarily remove transform to get true position
        const savedTransform = card.style.transform;
        card.style.transform = '';
        const top = card.getBoundingClientRect().top + window.scrollY;
        card.style.transform = savedTransform;
        return top;
      });
      const endEl = document.querySelector('.scroll-stack-end') as HTMLElement | null;
      if (endEl) {
        const savedTransform = (endEl as HTMLElement).style.transform;
        (endEl as HTMLElement).style.transform = '';
        originalEndTopRef.current = endEl.getBoundingClientRect().top + window.scrollY;
        (endEl as HTMLElement).style.transform = savedTransform;
      }
    } else {
      originalCardTopsRef.current = cards.map(card => card.offsetTop);
      const endEl = scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement | null;
      originalEndTopRef.current = endEl?.offsetTop ?? 0;
    }
  }, [useWindowScroll]);

  // Set up scroll listener
  useLayoutEffect(() => {
    if (!useWindowScroll) return;
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [useWindowScroll, scheduleUpdate]);

  // Initialize cards
  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
    ) as HTMLElement[];

    cardsRef.current = cards;

    // Apply spacing and base GPU hint
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.transformOrigin = 'top center';
    });

    // Wait a tick for layout to settle, then cache positions
    const t = setTimeout(() => {
      cacheOriginalPositions();
      updateCardTransforms();
    }, 50);

    // Re-cache on resize
    const onResize = () => {
      setTimeout(() => {
        cacheOriginalPositions();
        scheduleUpdate();
      }, 100);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      originalCardTopsRef.current = [];
      isScheduledRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    cacheOriginalPositions,
    updateCardTransforms,
    scheduleUpdate,
  ]);

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  const containerStyles: React.CSSProperties = useWindowScroll
    ? {}
    : {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
      };

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles} onScroll={useWindowScroll ? undefined : scheduleUpdate}>
      <div className={`scroll-stack-inner ${useWindowScroll ? 'md:pt-[10vh] pb-[20rem] px-8 md:px-16 lg:px-24' : 'pt-[20vh] px-20 pb-[50rem] min-h-screen'}`}>
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
