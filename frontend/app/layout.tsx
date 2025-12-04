import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'YPL.app - The Future Starter Platform',
    template: '%s | YPL.app',
  },
  description: 'Innovative platform powered by YPL GRUP INC (Florida, USA)',
  metadataBase: new URL('https://ypl.app'),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
