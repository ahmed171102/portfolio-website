"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export default function MagneticButton({
  children,
  className = "",
  href,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  href: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out motion-reduce:transform-none ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
