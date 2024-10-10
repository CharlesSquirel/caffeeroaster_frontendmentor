import Header from '@/components/Header/Header';
import { barlow } from '@/fonts/fonts';
import { Metadata } from 'next';
import Footer from './components/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coffeeroasters subscription site',
  description: 'Frontend Mentor | Coffeeroasters subscription site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} flex w-screen flex-col items-center bg-cream px-[24px] pb-[72px] pt-[32px] antialiased md:px-[40px] md:pt-[40px] xl:px-[80px] xl:pb-[87px] xl:pt-[43px]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
