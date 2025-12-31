/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.700'),
                textDecoration: 'underline',
              },
            },
            h1: {
              fontSize: '2.25rem',
              fontWeight: 'bold',
              marginTop: '0',
              marginBottom: '.5rem',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginTop: '2rem',
              marginBottom: '.75rem',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginTop: '1.5rem',
              marginBottom: '.5rem',
              lineHeight: '1.4',
            },
            'h2 a, h3 a': {
              textDecoration: 'none',
              color: 'inherit',
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
              margin: '1rem 0',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: theme('borderRadius.md'),
              fontSize: '0.875rem',
            },
            'pre code': {
              background: 'none',
              padding: '0',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.gray.300'),
              fontStyle: 'italic',
              paddingLeft: '1rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}