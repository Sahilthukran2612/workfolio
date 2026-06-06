import type { Metadata } from 'next';
import { Manrope, DM_Mono, Unica_One } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: '500',
});

const unicaOne = Unica_One({
  subsets: ['latin'],
  variable: '--font-unica-one',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Sahil - Creative Web Developer',
  description: 'Explore the portfolio of Sahil, a creative web developer specializing in crafting immersive, high-performance digital experiences with modern technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable} ${unicaOne.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
