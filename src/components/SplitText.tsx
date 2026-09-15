"use client";

import { useEffect, useRef, useState, type ElementType, type Ref } from "react";

export interface TextSegment {
  text: string;
  className?: string;
}

/**
 * Splits one or more text segments into words and animates them in with a
 * staggered fade+rise once the element enters the viewport. Segments allow
 * mixing plain text with styled (e.g. gradient-highlighted) spans while
 * keeping a single continuous word-index for the stagger delay.
 */
export default function SplitText({
  text,
  segments,
  className = "",
  as = "span",
  baseDelay = 0,
  step = 30,
}: {
  text?: string;
  segments?: TextSegment[];
  className?: string;
  as?: "span" | "h1" | "h2";
  baseDelay?: number;
  step?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const resolvedSegments: TextSegment[] = segments ?? [{ text: text ?? "" }];
  const wordEntries = resolvedSegments.flatMap((seg) =>
    seg.text.split(" ").map((word) => ({ word, className: seg.className }))
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as ElementType;

  return (
    <Tag ref={ref as Ref<HTMLElement>} className={className}>
      {wordEntries.map(({ word, className: wordClassName }, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: "top" }}
        >
          <span
            className={`inline-block transition-all duration-500 ease-out motion-reduce:transition-none ${wordClassName ?? ""}`}
            style={{
              transitionDelay: `${baseDelay + i * step}ms`,
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
            }}
          >
            {word}
            {i < wordEntries.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
