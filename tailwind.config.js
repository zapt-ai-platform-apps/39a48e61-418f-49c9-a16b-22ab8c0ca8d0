export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          text: '#000000',
          primary: '#1D4ED8',
          secondary: '#6B7280',
          neutral: '#F3F4F6',
        },
        dark: {
          background: '#1F2937',
          text: '#FFFFFF',
          primary: '#3B82F6',
          secondary: '#9CA3AF',
          neutral: '#374151',
        },
      },
    },
  },
  plugins: [],
};