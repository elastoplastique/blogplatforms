/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';
// @ts-ignore
import { radixThemePreset } from 'radix-themes-tw';
const { blackA, violet, mauve, jade, indigo, pink, purple, crimson, slate, iris, tomato } = require('@radix-ui/colors');

const { nextui } = require('@nextui-org/react');

export default {
  presets: [radixThemePreset],
  darkMode: ['class'],
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@radix-ui/themes/dist/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    minWidth: {
      full: '100%',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: 0 },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: 0 },
      //   },
      // },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    colors: {
      ...blackA,
      ...slate,
      ...violet,
      ...mauve,
      ...jade,
      ...indigo,
      ...pink,
      ...purple,
      ...crimson,
      ...iris,
      ...tomato,
      overlay: 'var(--overlay)',
      'app-bg': 'var(--app-bg)',
      'subtle-bg': 'var(--subtle-bg)',

      'ui-bg': 'var(--ui-bg)',
      'hover-ui-bg': 'var(--hover-ui-bg)',
      'active-ui-bg': 'var(--active-ui-bg)',

      'subtle-border': 'var(--subtle-border)',
      'ui-border': 'var(--ui-border)',
      'hover-ui-border': 'var(--hover-ui-border)',

      'solid-bg': 'var(--solid-bg)',
      'hover-solid-bg': 'var(--hover-solid-bg)',

      'text-low-contrast': 'var(--text-low-contrast)',
      'text-high-contrast': 'var(--text-high-contrast)',

      // CUSTOM
      'border-white': 'var(--border-white)',

      // Primary
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    letterSpacing: {
      tightest: '-0.03em',
    },
    borderRadius: {
      full: '100%',
      '4xl': 'calc(var(--radius) * 4)',
      '3xl': 'calc(var(--radius) * 3)',
      '2xl': 'calc(var(--radius) * 2)',
      xl: 'calc(var(--radius) * 1.5)',
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
  },
  plugins: [nextui()],
  // corePlugins: ['float', 'padding', 'margin']
} satisfies Config;
