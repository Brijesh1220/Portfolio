'use client';

import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';
import { ABOUT_CHIPS } from '@/data/portfolio';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="about"
      sx={{
        bgcolor: '#12141a',
        borderTop: '1px solid #1e2130',
        borderBottom: '1px solid #1e2130',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 10, md: 15 } }}>
        <Box ref={sectionRef} className="reveal">
          <Grid container spacing={{ xs: 5, md: 10 }} alignItems="center">

            {/* Avatar */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    width: '100%', aspectRatio: '4/5',
                    bgcolor: '#14161f',
                    border: '1px solid #1e2130',
                    borderRadius: 4,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                    '&::before': {
                      content: '""', position: 'absolute', inset: 0,
                      background: 'radial-gradient(circle at 30% 20%, rgba(245,166,35,0.12), transparent 60%)',
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 80, lineHeight: 1, position: 'relative', zIndex: 1 }}>
                    👨‍💻
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'absolute', bottom: -16, right: -16,
                    bgcolor: '#f5a623', color: '#000',
                    fontFamily: '"DM Mono", monospace',
                    fontSize: 11, px: 2, py: 1.25, borderRadius: 2,
                    letterSpacing: '0.08em',
                  }}
                >
                  MCA · NIT Kurukshetra
                </Box>
              </Box>
            </Grid>

            {/* Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionEyebrow>About Me</SectionEyebrow>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '32px', md: 'clamp(32px, 4.5vw, 56px)' },
                  fontWeight: 800, lineHeight: 1.05,
                  letterSpacing: '-0.02em', mb: 3,
                }}
              >
                Building interfaces
                <br />
                that{' '}
                <Box component="em" sx={{ fontFamily: '"Lora", serif', color: '#f5a623' }}>
                  scale.
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"DM Mono", monospace', fontSize: 12,
                  color: '#f5a623', letterSpacing: '0.1em', mb: 2,
                }}
              >
                📍 Gurugram, Haryana
              </Typography>

              <Typography
                sx={{ fontFamily: '"Lora", serif', fontSize: 18, lineHeight: 1.8, color: 'rgba(238,240,246,0.8)', mb: 2 }}
              >
                I&apos;m a{' '}
                <Box component="strong" sx={{ color: '#eef0f6', fontStyle: 'italic' }}>Full Stack Engineer</Box>{' '}
                with 3+ years at Incedo Technology Solutions, where I&apos;ve led frontend development of
                complex enterprise HR modules serving{' '}
                <Box component="strong" sx={{ color: '#eef0f6', fontStyle: 'italic' }}>100,000+ employees</Box>{' '}
                across global operations.
              </Typography>

              <Typography
                sx={{ fontFamily: '"Lora", serif', fontSize: 18, lineHeight: 1.8, color: 'rgba(238,240,246,0.8)', mb: 4 }}
              >
                I write code that{' '}
                <Box component="strong" sx={{ color: '#eef0f6', fontStyle: 'italic' }}>other engineers actually want to read</Box>{' '}
                — modular, well-structured, and built to last.
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
                {ABOUT_CHIPS.map((chip) => (
                  <Box
                    key={chip}
                    sx={{
                      fontFamily: '"DM Mono", monospace', fontSize: 11,
                      px: 1.75, py: 0.875,
                      border: '1px solid #1e2130', borderRadius: '100px',
                      color: '#6b7280', letterSpacing: '0.06em',
                      transition: 'border-color 0.2s, color 0.2s',
                      '&:hover': { borderColor: '#f5a623', color: '#f5a623' },
                    }}
                  >
                    {chip}
                  </Box>
                ))}
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
