"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

/**
 * Infinite, auto-scrolling logo strip that can also be dragged / swiped.
 * Built on Embla: `loop` gives the seamless wrap, `dragFree` lets a swipe
 * glide instead of snapping to a slide, and the AutoScroll plugin keeps it
 * moving. Auto-scroll pauses while the pointer is over it and after a swipe
 * it picks up again on its own. Respects prefers-reduced-motion.
 */
export function LogoMarquee({
  children,
  speed = 1,
  className,
}: {
  children: React.ReactNode;
  /** pixels per frame (~60fps). 1 ≈ 60px/s */
  speed?: number;
  className?: string;
}) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [viewportRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", skipSnaps: true },
    [
      AutoScroll({
        speed,
        startDelay: 0,
        playOnInit: !reduceMotion,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  return (
    <div
      ref={viewportRef}
      className={className}
      style={{
        overflow: "hidden",
        cursor: "grab",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul className="flex touch-pan-y select-none py-2">{children}</ul>
    </div>
  );
}
