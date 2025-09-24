import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/default.css";
import "@/styles/sass/style.scss";
import "@/styles/css/responsive.css";
import type { Metadata } from 'next';
import BackToTop from '@/components/BackToTop';
import PreLoader from '@/components/Loader';
import { quote } from '@/utils/get-random-quote';
import ClientWraper from '@/components/ClientWraper';

export const metadata: Metadata = {
  title: 'Banca - Banking & Business Loan Next Js Template',
  description:
    'Banca is a banking and business loan Next Js template with a modern, clean, and professional design. It is a great choice for any financial institution or business looking to create a modern and professional website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
          <BackToTop />
          <PreLoader quote={quote} />
          <ClientWraper>{children}</ClientWraper>
      </body>
    </html>
  );
}
