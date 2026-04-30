import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Required for MUI + Next.js App Router
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
};

export default nextConfig;
