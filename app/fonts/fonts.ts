import { Barlow, Fraunces } from 'next/font/google';
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['900'],
});

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '700'],
});
