import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',
        fog: '#F7F7F5',
        slate: '#1D1D1D'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
