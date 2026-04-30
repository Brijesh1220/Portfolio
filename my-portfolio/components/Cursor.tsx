'use client';

import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Slightly delayed ring using lerp in RAF
      const targetX = e.clientX;
      const targetY = e.clientY;

      const animate = () => {
        ringX += (targetX - ringX) * 0.18;
        ringY += (targetY - ringY) * 0.18;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      };

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.opacity = '0.5';
    };

    const onLeaveLink = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove);

    const bindLinks = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };
    bindLinks();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <Box
        ref={cursorRef}
        sx={{
          position: 'fixed',
          width: 12,
          height: 12,
          bgcolor: 'amber.main',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          transition: 'opacity 0.2s',
        }}
      />
      {/* Ring */}
      <Box
        ref={ringRef}
        sx={{
          position: 'fixed',
          width: 36,
          height: 36,
          border: '1.5px solid rgba(245,166,35,0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
    </>
  );
}
