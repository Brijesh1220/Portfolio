import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionEyebrowProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function SectionEyebrow({ children, center }: SectionEyebrowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: center ? 'center' : 'flex-start',
        gap: '12px',
        mb: '20px',
        '&::after': center
          ? {}
          : {
              content: '""',
              flexShrink: 0,
              width: 60,
              height: 1,
              bgcolor: 'amber.main',
              opacity: 0.5,
              display: 'block',
            },
      }}
    >
      <Typography
        sx={{
          fontFamily: '"DM Mono", monospace',
          fontSize: 11,
          color: 'amber.main',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
