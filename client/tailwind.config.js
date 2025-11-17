module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5ff',
          100: '#f3ebff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4c51bf',
        },
        secondary: {
          500: '#764ba2',
          600: '#6b42a0',
          700: '#60399e',
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
};
