"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * Wraps content in a container with a soft radial-gradient "spotlight"
 * that follows the mouse cursor. Purely CSS-variable driven, no deps.
 */
export default function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-container relative ${className}`}
    >
      {children}
    </div>
  );
}
