import type { Metadata } from 'next';
import './globals.css';
import {
  Fraunces,
  Barlow,
} from 'next/font/google';
import Header from './components/Header/Header';

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['900'],
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title:
    'Coffeeroasters subscription site',
  description:
    'Frontend Mentor | Coffeeroasters subscription site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${barlow.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
