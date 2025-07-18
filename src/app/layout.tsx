import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.css';
import '../styles/animate.css';
import '../styles/default.css';
import '../styles/nice-select.css';
import '../styles/nouislider.min.css';
import '../styles/slick-theme.css';
import '../styles/slick.css';
import '../styles/elegent-icons.min.css';
import '../styles/css/all.min.css';
import '../styles/intlTellInput.css';
import '../sass/main.scss';
import '../styles/responsive.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Banca - Banking & Business Loan Bootstrap-5 HTML Template',
  description:
    'Banca is a banking and business loan bootstrap-5 HTML template with a modern, clean, and professional design. It is a great choice for any financial institution or business looking to create a modern and professional website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
