import type { Metadata } from 'next';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Brijesh Kumar — Full Stack Engineer',
  description:
    'Portfolio of Brijesh Kumar, Full Stack Engineer with 3+ years building enterprise-scale React applications at Incedo Technology Solutions.',
  keywords: ['Brijesh Kumar', 'Full Stack Engineer', 'React Developer', 'Next.js', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Brijesh Kumar' }],
  openGraph: {
    title: 'Brijesh Kumar — Full Stack Engineer',
    description: 'Crafting enterprise-scale React interfaces that move a hundred thousand people.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
