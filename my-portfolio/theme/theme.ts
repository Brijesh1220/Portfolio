import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    amber: { main: string; dim: string };
    cyan: { main: string };
    surface: string;
    card: string;
    borderColor: string;
  }
  interface PaletteOptions {
    amber?: { main: string; dim: string };
    cyan?: { main: string };
    surface?: string;
    card?: string;
    borderColor?: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f5a623' },
    secondary: { main: '#4dd9f5' },
    background: {
      default: '#0b0c10',
      paper: '#12141a',
    },
    text: {
      primary: '#eef0f6',
      secondary: '#6b7280',
    },
    amber: { main: '#f5a623', dim: '#c4811a' },
    cyan: { main: '#4dd9f5' },
    surface: '#12141a',
    card: '#14161f',
    borderColor: '#1e2130',
  },
  typography: {
    fontFamily: '"Syne", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    body1: { fontFamily: '"Lora", serif', lineHeight: 1.8 },
    body2: { fontFamily: '"DM Mono", monospace', fontSize: '0.75rem' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Lora:ital,wght@0,400;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          background-color: #0b0c10;
          color: #eef0f6;
          overflow-x: hidden;
          cursor: none;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          mix-blend-mode: overlay;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0b0c10; }
        ::-webkit-scrollbar-thumb { background: #c4811a; border-radius: 4px; }

        a { cursor: none; }
        button { cursor: none; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.1); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(-50%) scale(0.9); }
          to   { opacity: 1; transform: translateY(-50%) scale(1);   }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 6 },
      },
    },
  },
});
