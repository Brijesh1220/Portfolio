'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HERO_STATS, TYPEWRITER_PHRASES } from '@/data/portfolio';

export default function Hero() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = TYPEWRITER_PHRASES[phraseIdx];
      setTypedText(
        deleting ? phrase.substring(0, charIdx--) : phrase.substring(0, charIdx++)
      );
      if (!deleting && charIdx === phrase.length + 1) {
        deleting = true;
        timeoutId = setTimeout(tick, 1400);
        return;
      }
      if (deleting && charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % TYPEWRITER_PHRASES.length;
      }
      timeoutId = setTimeout(tick, deleting ? 40 : 80);
    };

    const initialDelay = setTimeout(tick, 1200);
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 3, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Ghost number */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          right: { xs: '-20px', md: '-40px' },
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: { xs: '160px', md: 'clamp(200px, 28vw, 420px)' },
          fontWeight: 800,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245,166,35,0.06)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          animation: 'fadeInScale 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s both',
        }}
      >
        4
      </Box>

      {/* Tag line */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          mb: '28px',
          animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both',
          '&::before': {
            content: '""',
            width: 32,
            height: 1,
            bgcolor: '#f5a623',
            display: 'block',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: '"DM Mono", monospace',
            fontSize: 12,
            color: '#f5a623',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Full Stack Developer
        </Typography>
      </Box>

      {/* Name */}
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: '52px', md: 'clamp(52px, 8vw, 110px)' },
          fontWeight: 800,
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both',
        }}
      >
        Bri
        <Box component="span" sx={{ color: '#f5a623' }}>j</Box>
        esh
        <br />
        Singh
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: '"Lora", serif',
          fontStyle: 'italic',
          fontSize: { xs: '16px', md: 'clamp(16px, 2vw, 22px)' },
          color: '#6b7280',
          mt: '20px',
          maxWidth: 520,
          lineHeight: 1.7,
          animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both',
        }}
      >
        Crafting enterprise-scale React interfaces
        <br />
        that move a hundred thousand people.
      </Typography>

      {/* Typewriter */}
      <Box
        sx={{
          fontFamily: '"DM Mono", monospace',
          fontSize: 14,
          color: '#4dd9f5',
          mt: '40px',
          animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.65s both',
        }}
      >
        {'> '}
        <Box
          component="span"
          sx={{
            '&::after': {
              content: '"\\|"',
              animation: 'blink 0.9s step-end infinite',
            },
          }}
        >
          {typedText}
        </Box>
      </Box>

      {/* CTAs */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mt: '48px',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.8s both',
        }}
      >
        <Box
          component="a"
          href="#contact"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            handleScroll('#contact');
          }}
          sx={{
            px: '32px', py: '14px',
            bgcolor: '#f5a623', color: '#000',
            fontWeight: 700, fontSize: 13,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            borderRadius: '6px', textDecoration: 'none', display: 'inline-block',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 0 32px rgba(245,166,35,0.35)' },
          }}
        >
          Let&apos;s Connect
        </Box>
        <Box
          component="a"
          href="#experience"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            handleScroll('#experience');
          }}
          sx={{
            px: '32px', py: '14px',
            bgcolor: 'transparent', color: '#eef0f6',
            fontFamily: '"DM Mono", monospace', fontSize: 12,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            border: '1px solid #1e2130', borderRadius: '6px',
            textDecoration: 'none', display: 'inline-block',
            transition: 'border-color 0.2s',
            '&:hover': { borderColor: '#eef0f6' },
          }}
        >
          View Work
        </Box>
      </Box>

      {/* Stats — fixed: display value as-is, no regex splitting */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 60,
          right: { xs: 24, md: 48 },
          display: 'flex',
          gap: { xs: '28px', md: '48px' },
          animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 1s both',
        }}
      >
        {HERO_STATS.map((stat) => (
          <Box key={stat.label} sx={{ textAlign: 'right' }}>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 40 },
                fontWeight: 800,
                lineHeight: 1,
                color: '#eef0f6',
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"DM Mono", monospace',
                fontSize: 11,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                mt: '4px',
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
