'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NAV_LINKS } from '@/data/portfolio';

export default function Navbar() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 3, md: 6 },
        py: '22px',
        bgcolor: 'rgba(11,12,16,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        animation: 'slideDown 0.8s cubic-bezier(0.16,1,0.3,1) both',
      }}
    >
      {/* Logo */}
      <Typography
        sx={{
          fontFamily: '"DM Mono", monospace',
          fontSize: 13,
          color: 'amber.main',
          letterSpacing: '0.1em',
        }}
      >
        brijesh.dev
      </Typography>

      {/* Links */}
      <Box
        component="ul"
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 4,
          listStyle: 'none',
          m: 0,
          p: 0,
        }}
      >
        {NAV_LINKS.map((link) => (
          <Box component="li" key={link.href}>
            <Box
              component="a"
              href={link.href}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleNavClick(e, link.href)
              }
              sx={{
                fontFamily: '"DM Mono", monospace',
                fontSize: 12,
                color: 'text.secondary',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                '&:hover': { color: 'text.primary' },
              }}
            >
              {link.label}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
