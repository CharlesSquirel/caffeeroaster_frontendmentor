import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#0E8784',
        blueDark: '#333D4B',
        orange: '#FDD6BA',
        cream: '#FEFCF7',
        greay: '#83888F',
      },
    },
  },
  plugins: [],
};
export default config;
