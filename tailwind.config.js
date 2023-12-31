/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      screens: {
        'xs': '375px',
        'sm': '425px',
        'lsm': '576px',
        'md': '768px',
        'xlg': '991px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2560px',
        // 2560, 1920, 1440, 1199, 991, 767, 576
       
      },
    },
  },
  plugins: [],
}
