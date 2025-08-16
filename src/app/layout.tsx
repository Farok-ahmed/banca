import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/sass/style.scss";
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import BackToTop from '@/components/BackToTop';
import PreLoader from '@/components/Loader';
// import StickyNavbar from '@/components/StickyNavbar';
import { ThemeProvider } from '@/contextAPi/ThemeContext';

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
  icons: {
    icon: '/img/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {/* <StickyNavbar /> */}
          <BackToTop />
          <PreLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
