
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { usePathname } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'BPSDM Knowledge Hub',
//   description: 'Knowledge Management System for BPSDM Provinsi Jawa Barat',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>BPSDM Knowledge Hub</title>
        <meta name="description" content="Knowledge Management System for BPSDM Provinsi Jawa Barat" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased', !isLoginPage && 'min-h-screen bg-background flex flex-col')}>
        {!isLoginPage && <Header />}
        <main className={cn(!isLoginPage && 'flex-grow')}>{children}</main>
        {!isLoginPage && <Footer />}
        <Toaster />
        {!isLoginPage && <ScrollToTopButton />}
      </body>
    </html>
  );
}
