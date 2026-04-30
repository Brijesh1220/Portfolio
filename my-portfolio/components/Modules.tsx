'use client';

import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';
import { MODULES } from '@/data/portfolio';

export default function Modules() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    cardRefs.current.forEach((el, i) => {
      if (el) setTimeout(() => observer.observe(el), i * 80);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="modules"
      sx={{
        bgcolor: '#12141a',
        borderTop: '1px solid #1e2130',
        borderBottom: '1px solid #1e2130',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 10, md: 15 } }}>
        <Box ref={titleRef} className="reveal">
          <SectionEyebrow>Platform Modules</SectionEyebrow>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '32px', md: 'clamp(32px, 4.5vw, 56px)' },
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-0.02em', mb: 8,
            }}
          >
            What I&apos;ve
            <br />
            shipped.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {MODULES.map((mod, i) => (
            <Grid key={mod.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                ref={(el: HTMLDivElement | null) => { cardRefs.current[i] = el; }}
                className="reveal"
                sx={{
                  bgcolor: '#14161f',
                  border: '1px solid #1e2130',
                  borderRadius: 3,
                  p: '28px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s',
                  '&::before': {
                    content: '""', position: 'absolute',
                    top: 0, left: 0, right: 0, height: 2,
                    background: 'linear-gradient(90deg, #f5a623, transparent)',
                    opacity: 0, transition: 'opacity 0.3s',
                  },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'rgba(245,166,35,0.3)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,166,35,0.1)',
                    '&::before': { opacity: 1 },
                  },
                }}
              >
                <Typography sx={{ fontSize: 28, mb: 2 }}>{mod.icon}</Typography>
                <Typography sx={{ fontSize: 17, fontWeight: 700, mb: 1 }}>{mod.name}</Typography>
                <Typography sx={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, mb: 2 }}>
                  {mod.description}
                </Typography>
                <Typography
                  sx={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#4dd9f5', letterSpacing: '0.1em' }}
                >
                  {mod.scale}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
