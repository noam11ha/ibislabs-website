"use client";

import { useEffect, useRef } from "react";

// The photo starts slightly smaller and grows to full size as it scrolls up the screen.
export default function GrowingPhoto() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const shot = ref.current;
    if (!shot || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let queued = false;
    const paint = () => {
      queued = false;
      const box = shot.parentElement!.getBoundingClientRect();
      const view = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (view - box.top) / (view * 0.8)));
      shot.style.transform = `scale(${(0.88 + 0.12 * progress).toFixed(4)})`;
    };
    const queue = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(paint);
      }
    };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    paint();
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className="shot"
      src="/product.jpg"
      width={1536}
      height={1024}
      fetchPriority="high"
      alt="Ibis Labs Foundation Fiber: a black resealable pouch of 30 daily sticks beside one black stick pack, on warm stone."
    />
  );
}
