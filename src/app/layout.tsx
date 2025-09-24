import "@/styles/sass/style.scss";
import type { Metadata } from 'next';
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
          <ClientWraper>{children}</ClientWraper>
      </body>
    </html>
  );
}
