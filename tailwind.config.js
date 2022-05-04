const defaultTheme = require('tailwindcss');
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  content: ['./pages/**/*.{js.jsx,ts,tsx}', './components/**/*.{js.jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      backgroundColor: {
        white: '#FFFFFF',
        black: '#000000',
        'grey-1': '#F8F8F8',
        'grey-2': '#F3F4F5',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'grey-1': '#F8F8F8',
        'grey-2': '#F3F4F5',
        'grey-3': '#EAEBED',
        'grey-4': '#DCDEE0',
        'grey-5': '#CBCED0',
        'grey-6': '#93999F',
        'grey-7': '#777F88',
        'grey-8': '#5E656E',
        'grey-9': '#464C53',
        'grey-10': '#2E3338',
        'grey-11': '#16191D',
        'grey-12': '#0B0D0F',
        'blue-1': '#F6FCFF',
        'blue-2': '#E5F5FF',
        'blue-3': '#C9EAFF',
        'blue-4': '#A1DAFF',
        'blue-5': '#7ACBFF',
        'blue-6': '#54BBFD',
        'blue-7': '#2EA8F7',
        'blue-8': '#0C98F3',
      },
    },
    fontFamily: {
      spoqa: 'Spoqa Han Sans Neo',
    },
  },
  plugins: [],
};
