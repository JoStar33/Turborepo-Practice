import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    colors: {
      primary: 'oklch(75% 0.18 154)',
      black: '#000000',
      secondary: 'oklch(40% 0.23 283)',
      error: 'oklch(54% 0.22 29)',
      buttongrey: '#383838',
      blue: '#4578ef',
    },
  },
};
export default config;
