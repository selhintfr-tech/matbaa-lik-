/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#E3DDD3',
          dark: '#111111',
          blue: '#0066FF',
          'blue-hover': '#0052cc',
          orange: '#F26522',
          border: '#D6D0C8',
          muted: '#555555',
          whatsapp: '#25D366',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        page: '1360px',
      },
      borderRadius: {
        hero: '20px',
        card: '14px',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'float': '0 10px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};
