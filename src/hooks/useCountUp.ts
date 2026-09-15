"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a numeric value counting up from 0 once the returned ref
 * element scrolls into view. Handles values with a trailing "%" or
 * other suffix by parsing the leading number and re-appending the rest.
 */
export function useCountUp(target: string, durationMs = 1400) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState<string>(target.replace(/[\d.]+/, "0"));
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = target.match(/[\d.]+/);
    if (!match) {
      setDisplay(target);
      return;
    }
    const numeric = parseFloat(match[0]);
    const prefix = target.slice(0, match.index);
    const suffix = target.slice((match.index ?? 0) + match[0].length);
    const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const value = numeric * eased;
            setDisplay(`${prefix}${value.toFixed(decimals)}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, display };
}
