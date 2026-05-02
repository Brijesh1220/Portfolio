'use client';

import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';
import { ABOUT_CHIPS } from '@/data/portfolio';

const QUICK_STATS = [
  { value: '4', label: 'Years Exp.', suffix: '' },
  { value: '6', label: 'Modules Built', suffix: '+' },
  { value: '3.5K', label: 'Users Served', suffix: '+' },
  { value: '9', label: 'CGPA / NIT', suffix: '/10' },
];


export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          setCountersActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245,166,35,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,166,35,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none', zIndex: 0,
        },
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 10, md: 15 }, position: 'relative', zIndex: 1 }}>
        <Box ref={sectionRef} className="reveal">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">

            {/* ── LEFT COLUMN ── */}
            <Grid size={{ xs: 12, md: 5 }}>

              {/* Avatar */}
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    width: '100%', aspectRatio: '1/1',
                    bgcolor: '#0b0c10',
                    border: '1px solid #1e2130',
                    borderRadius: 5,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                    '&::before': {
                      content: '""', position: 'absolute', inset: 0,
                      background: 'radial-gradient(circle at 30% 20%, rgba(245,166,35,0.15), transparent 65%)',
                    },
                    '&::after': {
                      content: '""', position: 'absolute', inset: 0,
                      background: 'radial-gradient(circle at 80% 80%, rgba(77,217,245,0.07), transparent 55%)',
                    },
                  }}
                >
                  {/* Spinning rings */}
                  <Box sx={{
                    position: 'absolute', width: '75%', height: '75%',
                    border: '1px dashed rgba(245,166,35,0.15)', borderRadius: '50%',
                    animation: 'aboutSpin 20s linear infinite',
                    '@keyframes aboutSpin': {
                      from: { transform: 'rotate(0deg)' },
                      to: { transform: 'rotate(360deg)' },
                    },
                  }} />
                  <Box sx={{
                    position: 'absolute', width: '55%', height: '55%',
                    border: '1px dashed rgba(77,217,245,0.1)', borderRadius: '50%',
                    animation: 'aboutSpin 14s linear infinite reverse',
                  }} />
                  <Typography sx={{ fontSize: 90, lineHeight: 1, position: 'relative', zIndex: 1 }}>
                    👨‍💻
                  </Typography>
                </Box>

                {/* NIT badge */}
                <Box
                  sx={{
                    position: 'absolute', bottom: -20, left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: '#f5a623', color: '#000',
                    fontFamily: '"DM Mono", monospace',
                    fontSize: 11, fontWeight: 600,
                    px: 2.5, py: 1.25, borderRadius: '100px',
                    letterSpacing: '0.08em', whiteSpace: 'nowrap',
                    boxShadow: '0 8px 24px rgba(245,166,35,0.35)',
                  }}
                >
                  🎓 MCA · NIT Kurukshetra · 9/10
                </Box>
              </Box>

              {/* Quick stats grid */}
              <Grid container spacing={1.5} sx={{ mt: 6 }}>
                {QUICK_STATS.map((stat) => (
                  <Grid key={stat.label} size={6}>
                    <Box
                      sx={{
                        bgcolor: '#0b0c10',
                        border: '1px solid #1e2130',
                        borderRadius: 3, p: 2.5, textAlign: 'center',
                        transition: 'border-color 0.3s, transform 0.3s',
                        '&:hover': {
                          borderColor: 'rgba(245,166,35,0.4)',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 28, fontWeight: 800, lineHeight: 1,
                          color: countersActive ? '#f5a623' : 'transparent',
                          transition: 'color 0.6s ease',
                        }}
                      >
                        {stat.value}
                        <Box component="span" sx={{ fontSize: 16, color: '#4dd9f5' }}>
                          {stat.suffix}
                        </Box>
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"DM Mono", monospace',
                          fontSize: 10, color: '#6b7280',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em', mt: 0.75,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* ── RIGHT COLUMN ── */}
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
                <Box
                  component="em"
                  sx={{
                    fontFamily: '"Lora", serif', color: '#f5a623',
                    position: 'relative',
                    '&::after': {
                      content: '""', position: 'absolute',
                      left: 0, bottom: -4, right: 0, height: '2px',
                      background: 'linear-gradient(90deg, #f5a623, transparent)',
                    },
                  }}
                >
                  scale.
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"DM Mono", monospace', fontSize: 12,
                  color: '#f5a623', letterSpacing: '0.1em',
                  mb: 3, display: 'flex', alignItems: 'center', gap: 1,
                }}
              >
                📍 Gurugram, Haryana
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Lora", serif', fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.85, color: 'rgba(238,240,246,0.8)', mb: 2.5,
                }}
              >
                I&apos;m a{' '}
                <Box component="strong" sx={{ color: '#eef0f6', fontStyle: 'italic' }}>
                  Senior Full Stack Developer
                </Box>{' '}
                with almost 4 years at Incedo Technology Solutions. I lead frontend architecture of
                complex enterprise HR platforms, currently serving{' '}
                <Box component="strong" sx={{ color: '#eef0f6', fontStyle: 'italic' }}>
                  3,500+ employees
                </Box>{' '}
                across global operations.
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Lora", serif', fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.85, color: 'rgba(238,240,246,0.8)', mb: 4,
                }}
              >
                I write code that{' '}
                <Box component="strong" sx={{ color: '#eef0f6', fontStyle: 'italic' }}>
                  other engineers actually want to read
                </Box>{' '}
                — modular, well-structured, and built to last.
              </Typography>

              {/* Divider */}
              <Box
                sx={{
                  height: '1px',
                  background: 'linear-gradient(90deg, #1e2130, transparent)',
                  mb: 3,
                }}
              />

              {/* Tech stack */}
              <Typography
                sx={{
                  fontFamily: '"DM Mono", monospace', fontSize: 10,
                  color: '#6b7280', letterSpacing: '0.2em',
                  textTransform: 'uppercase', mb: 2,
                }}
              >
                Tech Stack
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
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: '#f5a623', color: '#f5a623',
                        bgcolor: 'rgba(245,166,35,0.06)',
                        transform: 'translateY(-1px)',
                      },
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