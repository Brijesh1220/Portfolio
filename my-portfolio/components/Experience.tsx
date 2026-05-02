'use client';

import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';
import { EXPERIENCE } from '@/data/portfolio';

export default function Experience() {
  const titleRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = [titleRef.current, ...itemRefs.current].filter(Boolean) as HTMLElement[];
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
    els.forEach((el, i) => {
      setTimeout(() => el && observer.observe(el), i * 100);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="experience"
      sx={{ bgcolor: 'background.default', position: 'relative', zIndex: 1 }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 10, md: 15 } }}>
        <Box ref={titleRef} className="reveal">
          <SectionEyebrow>Career</SectionEyebrow>
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
            Where I&apos;ve
            <br />
            built things.
          </Typography>
        </Box>

        {/* Timeline */}
        <Box
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 8,
              bottom: 8,
              width: 1,
            },
          }}
        >
          {EXPERIENCE.map((item, i) => (
            <Box
              key={i}
              ref={(el: HTMLDivElement | null) => { itemRefs.current[i] = el; }}
              className="reveal"
              sx={{
                pl: '40px',
                pb: i < EXPERIENCE.length - 1 ? '60px' : 0,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '-5px',
                  top: 8,
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  bgcolor: 'amber.main',
                  boxShadow: '0 0 0 3px #0b0c10, 0 0 0 4px rgba(245,166,35,0.3)',
                },
              }}
            >
              {/* Period */}
              <Typography
                sx={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: 11,
                  color: 'amber.main',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  mb: 1,
                }}
              >
                {item.period}
              </Typography>

              {/* Role */}
              <Typography sx={{ fontSize: 22, fontWeight: 700, mb: 0.5 }}>
                {item.role}
              </Typography>

              {/* Company */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: 15,
                  color: 'text.secondary',
                  mb: 2,
                  '&::after': {
                    content: '"↗"',
                    color: 'amber.main',
                    fontSize: 12,
                  },
                }}
              >
                <Typography sx={{ fontSize: 15, color: 'text.secondary' }}>
                  {item.company}
                </Typography>
              </Box>

              {/* Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
                {item.tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: 10,
                      px: 1.25,
                      py: 0.5,
                      bgcolor: 'rgba(245,166,35,0.1)',
                      border: '1px solid rgba(245,166,35,0.2)',
                      color: 'amber.main',
                      borderRadius: '4px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>

              {/* Bullets */}
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {item.bullets.map((bullet, j) => (
                  <Box
                    key={j}
                    component="li"
                    sx={{
                      fontSize: 14,
                      color: 'rgba(238,240,246,0.65)',
                      lineHeight: 1.8,
                      mb: 1,
                      pl: '18px',
                      position: 'relative',
                      '&::before': {
                        content: '"→"',
                        position: 'absolute',
                        left: 0,
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {bullet}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
