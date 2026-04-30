'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Triggers a CSS "reveal" animation once the element enters the viewport.
 * Adds the class `visible` to every `.reveal` child of the observed element,
 * staggered by `staggerMs` per sibling index.
 */
export function useReveal<T extends HTMLElement>(
  threshold = 0.12,
  staggerMs = 80
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Stagger sibling .reveal elements inside parent
          const siblings = Array.from(
            el.parentElement?.querySelectorAll(':scope > .reveal') ?? []
          );
          const idx = siblings.indexOf(el);
          setTimeout(() => el.classList.add('visible'), idx * staggerMs);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, staggerMs]);

  return { ref, visible };
}
