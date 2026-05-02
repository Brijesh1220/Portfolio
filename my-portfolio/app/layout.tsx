import type { Metadata } from 'next';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Brijesh Singh — Full Stack Developer',
  description:
    'Portfolio of Brijesh Singh, Full Stack Developer with almost 4 years building enterprise-scale React applications at Incedo Technology Solutions.',
  keywords: ['Brijesh Singh', 'Full Stack Developer', 'React Developer', 'Next.js', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Brijesh Singh' }],
  openGraph: {
    title: 'Brijesh Singh — Full Stack Developer',
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
