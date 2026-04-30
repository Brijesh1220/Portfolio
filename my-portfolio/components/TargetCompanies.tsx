'use client';

import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';
import { TARGET_COMPANIES } from '@/data/portfolio';

export default function TargetCompanies() {
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
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((el, i) => {
      if (el) setTimeout(() => observer.observe(el), i * 80);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="targets"
      sx={{ bgcolor: '#0b0c10', position: 'relative', zIndex: 1 }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 10, md: 15 } }}>
        <SectionEyebrow>Interview Ready</SectionEyebrow>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '32px', md: 'clamp(32px, 4.5vw, 56px)' },
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.02em', mb: 8,
          }}
        >
          Where I&apos;m
          <br />
          headed next.
        </Typography>

        <Grid container spacing={2}>
          {TARGET_COMPANIES.map((company, i) => (
            <Grid key={company.name} size={{ xs: 6, md: 3 }}>
              <Box
                ref={(el: HTMLDivElement | null) => { cardRefs.current[i] = el; }}
                className="reveal"
                sx={{
                  bgcolor: '#14161f',
                  border: '1px solid #1e2130',
                  borderRadius: 3,
                  p: { xs: '20px', md: '28px 20px' },
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(77,217,245,0.4)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                  },
                }}
              >
                <Typography sx={{ fontSize: 32, mb: 1.5 }}>{company.emoji}</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 15, mb: 0.75 }}>{company.name}</Typography>
                <Typography
                  sx={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#6b7280', letterSpacing: '0.1em' }}
                >
                  {company.type}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
