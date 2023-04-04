/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base : withOpacity('--color-text-base'),
          muted : withOpacity('--color-text-muted'),
          fill : withOpacity('--color-fill')
        },
        form : {
          base : withOpacity('--color-textinput-base')
        }
      },
      backgroundColor: {
        skin: {
          fill : withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
        }
      },
      gradientColorStops:{
        skin: {
          fill : withOpacity('--color-fill'),
          hue: withOpacity('--color-fillstop')
        }
      }
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
  }),],
}
