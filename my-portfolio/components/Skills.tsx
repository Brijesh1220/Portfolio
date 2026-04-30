'use client';

import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import SectionEyebrow from './SectionEyebrow';
import { SKILL_GROUPS } from '@/data/portfolio';
import type { SkillItem } from '@/types';

interface SkillBarProps {
  skill: SkillItem;
  animate: boolean;
}

function SkillBar({ skill, animate }: SkillBarProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{skill.name}</Typography>
        <Typography sx={{ fontFamily: '"DM Mono", monospace', fontSize: 11, color: '#6b7280' }}>
          {skill.percentage}%
        </Typography>
      </Box>
      <Box sx={{ height: 4, bgcolor: '#1e2130', borderRadius: '4px', overflow: 'hidden' }}>
        <Box
          sx={{
            height: '100%',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, #f5a623, #4dd9f5)',
            transformOrigin: 'left',
            transform: animate ? `scaleX(${skill.percentage / 100})` : 'scaleX(0)',
            transition: animate ? 'transform 1.2s cubic-bezier(0.16,1,0.3,1)' : 'none',
          }}
        />
      </Box>
    </Box>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="skills"
      sx={{ bgcolor: '#0b0c10', position: 'relative', zIndex: 1 }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 6 }, py: { xs: 10, md: 15 } }}>
        <SectionEyebrow>Technical Skills</SectionEyebrow>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '32px', md: 'clamp(32px, 4.5vw, 56px)' },
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.02em', mb: 8,
          }}
        >
          My tech
          <br />
          arsenal.
        </Typography>

        <Box ref={sectionRef} className="reveal">
          <Grid container spacing={6}>
            {SKILL_GROUPS.map((group) => (
              <Grid key={group.title} size={{ xs: 12, md: 6 }}>
                <Typography
                  sx={{
                    fontFamily: '"DM Mono", monospace', fontSize: 11,
                    color: '#f5a623', letterSpacing: '0.2em',
                    textTransform: 'uppercase', mb: 3,
                  }}
                >
                  {group.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} animate={animate} />
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
