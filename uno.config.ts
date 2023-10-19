import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno({ attributifyPseudo: true }), presetIcons()],
  rules: [
    [
      /^scrollbar-hide$/,
      () => {
        return `.scrollbar-hide {scrollbar-width: none;}
        .scrollbar-hide::-webkit-scrollbar {display: none;}`
      },
    ],
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#b1bf92',
        50: '#f4f6ef',
        100: '#e7ebdc',
        200: '#d1d9bd',
        300: '#b1bf92',
        400: '#97a972',
        500: '#7a8d55',
        600: '#5f6f41',
        700: '#4a5635',
        800: '#3d462e',
        900: '#353d2a',
        950: '#1b2013',
      },
    },
  },
})
