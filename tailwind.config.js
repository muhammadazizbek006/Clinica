/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'header':'#badf93',
        'akva':'#b8d8eb',
        'online-zakaz':'#153e35',
        'link':'#f8fcf4',
        'next':'#619cbe'
      },
      fontSize:{
        '42':'42px',
        '32':'32px'
      },
      boxShadow:{
        'header':'0 3px 7px -1px rgba(0,0,0,.1)',
      },
      screens:{
        '1381':'1381px',
        '1129':'1129px',
        "888": "888px",
        '654':'654px',
      }
    },
  },
  plugins: [],
}