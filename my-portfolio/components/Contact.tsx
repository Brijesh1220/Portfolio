'use client';

import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';
import { CONTACT_LINKS } from '@/data/portfolio';

export default function Contact() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
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
      id="contact"
      sx={{
        bgcolor: 'surface',
        borderTop: '1px solid',
        borderColor: 'borderColor',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        ref={innerRef}
        className="reveal"
        sx={{
          textAlign: 'center',
          maxWidth: 700,
          mx: 'auto',
          px: { xs: 3, md: 6 },
          py: { xs: 10, md: 15 },
        }}
      >
        <SectionEyebrow center>Let&apos;s Talk</SectionEyebrow>

        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '42px', md: 'clamp(42px, 6vw, 80px)' },
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            mb: 3,
          }}
        >
          Open to
          <br />
          <Box component="span" sx={{ color: 'amber.main' }}>
            great
          </Box>
          <br />
          opportunities.
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Lora", serif',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'text.secondary',
            lineHeight: 1.7,
            mb: 6,
          }}
        >
          Whether you&apos;re a recruiter, a fellow engineer, or a team building something
          ambitious — my inbox is always open.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2.5,
            flexWrap: 'wrap',
          }}
        >
          {CONTACT_LINKS.map((link) => (
            <Box
              key={link.label}
              component="a"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              sx={{
                fontFamily: '"DM Mono", monospace',
                fontSize: 12,
                px: 3,
                py: 1.5,
                border: '1px solid',
                borderColor: 'borderColor',
                color: 'text.primary',
                textDecoration: 'none',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                transition: 'border-color 0.2s, color 0.2s',
                '&:hover': {
                  borderColor: 'amber.main',
                  color: 'amber.main',
                },
              }}
            >
              <span>{link.icon}</span>
              {link.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
