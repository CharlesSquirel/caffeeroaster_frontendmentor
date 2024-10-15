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
        btnHover: '#66D2CF',
        chooseBg: '#2c343e',
        dropdownOptionBg: '#F4F1EB',
      },
    },
  },
  plugins: [],
};
export default config;
