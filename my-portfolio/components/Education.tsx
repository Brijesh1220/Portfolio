'use client';

import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';

export default function Education() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="education"
      sx={{
        bgcolor: 'surface',
        borderTop: '1px solid',
        borderColor: 'borderColor',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 10, md: 15 } }}>
        <SectionEyebrow>Education</SectionEyebrow>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '32px', md: 'clamp(32px, 4.5vw, 56px)' },
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            mb: 8,
          }}
        >
          Where it
          <br />
          all started.
        </Typography>

        <Box
          ref={cardRef}
          className="reveal"
          sx={{
            bgcolor: 'card',
            border: '1px solid',
            borderColor: 'borderColor',
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 6 },
            alignItems: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '"NIT"',
              position: 'absolute',
              right: -20,
              bottom: -30,
              fontSize: 140,
              fontWeight: 800,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(245,166,35,0.05)',
              lineHeight: 1,
              pointerEvents: 'none',
            },
          }}
        >
          <Typography sx={{ fontSize: 52, flexShrink: 0 }}>🎓</Typography>
          <Box>
            <Typography sx={{ fontSize: 26, fontWeight: 700, mb: 0.75 }}>
              Master of Computer Applications
            </Typography>
            <Typography sx={{ fontSize: 17, color: 'amber.main', mb: 1 }}>
              National Institute of Technology (NIT), Kurukshetra
            </Typography>
            <Typography
              sx={{
                fontFamily: '"DM Mono", monospace',
                fontSize: 12,
                color: 'text.secondary',
                mb: 2.5,
              }}
            >
              MCA · Haryana, India
            </Typography>
            <Typography
              sx={{ fontSize: 14, color: 'rgba(238,240,246,0.65)', lineHeight: 1.8 }}
            >
              Graduated from one of India&apos;s premier technical institutes, building a strong
              foundation in computer science fundamentals — data structures, algorithms, operating
              systems, and software engineering. The rigorous curriculum and competitive peer
              environment shaped my approach to problem-solving and engineering discipline. NIT
              Kurukshetra&apos;s reputation for producing industry-ready engineers continues to be a
              strong signal of technical caliber.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
