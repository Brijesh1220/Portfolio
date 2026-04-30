'use client';

import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme/theme';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    /**
     * AppRouterCacheProvider must wrap ThemeProvider.
     * It fixes the MUI style injection order for Next.js App Router
     * so that Emotion-generated classNames are stable across
     * server → client hydration and prevent style flickering.
     *
     * options.enableCssLayer — puts MUI styles in a CSS @layer so
     * your own styles can always override MUI without !important.
     */
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline normalises browser defaults and injects
            the global styles defined in theme.components.MuiCssBaseline */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}