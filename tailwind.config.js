/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#613296',
      // ---------------------------------
      'main-black': '#28262A',
      'black': '#202020',
      'default-black': '#000000',
      'dark-black': '#1E1E1E',
      'light-gray': '#F5F2F9',
      'gray': '#8B8B8B',
      'blue': '#81B8F9',
      'violet': '#613296',
      'light-violet': '#B7A2CE',
      'orange': '#FF964A',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'manropeRegular': ['manropeRegular', 'regular'],
        'manropeMedium': ['manropeMedium', 'medium'],
        'manropeSemiBold': ['manropeSemiBold', 'semi-bold'],
        'manropeBold': ['manropeBold', 'bold'],
        'manropeExtraBold': ['manropeExtraBold', 'extra-bold'],
        'play': ['Play', 'bold'],
      }
    }
  },
  plugins: [],
}

