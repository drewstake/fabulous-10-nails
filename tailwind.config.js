module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blush: '#FFE7EC',
          rose: '#F7C8D7',
          berry: '#E75480',
          nude: '#EAD3C4',
          ivory: '#FFF8F4',
          charcoal: '#1F1F29',
          champagne: '#D9B7A6',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(31, 31, 41, 0.10)',
        glow: '0 16px 38px rgba(231, 84, 128, 0.28)',
      },
    },
  },
  plugins: [],
};
