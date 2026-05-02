import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        textAlign: 'center',
        px: 6,
        py: 4,
        borderTop: '1px solid',
        borderColor: 'borderColor',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Typography
        sx={{
          fontFamily: '"DM Mono", monospace',
          fontSize: 11,
          color: 'text.secondary',
          letterSpacing: '0.1em',
        }}
      >
        Designed &amp; built with ❤️ by{' '}
        <Box component="span" sx={{ color: 'amber.main' }}>
          Brijesh Singh
        </Box>{' '}
        · Gurugram, India ·{' '}
        <Box component="span" sx={{ color: 'amber.main' }}>
          {year}
        </Box>
      </Typography>
    </Box>
  );
}
