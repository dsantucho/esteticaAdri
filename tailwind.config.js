/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'background': '#FFFCFC',
        'sc-background': '#FDF2EA',
        'footer-background':'#160601',
        'btn-background': '#ECBE8E',
        'typo-color': '#3F2B1E',
        'sc-typo-color': '#0D0D0D',
        'footer-typo-color':'#F1E8D8',
        'bkg-footer': '#160601',
        'typo-logo-color': '#ACA7A3',
        'wp-color':'#25D366',
        'btn-services-grey':'#999999',
        'tag-hombre':'#1E5ECB',
        'tag-mujer':'#FFBD82',
      },
    },
    plugins: [],
  }