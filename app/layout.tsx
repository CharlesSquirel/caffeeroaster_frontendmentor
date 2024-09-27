import type { Metadata } from 'next';
import { Barlow, Fraunces } from 'next/font/google';
import Header from './components/Header/Header';
import './globals.css';

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['900'],
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400'],
});

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
        className={`${barlow.className} flex h-screen w-screen justify-center bg-cream px-[24px] pb-[72px] pt-[32px] antialiased sm:px-[40px] sm:pt-[40px] md:px-[80px] md:pb-[87px] md:pt-[43px]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
