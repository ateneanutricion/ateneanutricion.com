import { defineConfig, presetUno, presetIcons } from 'unocss'

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
    fontFamily: {
      'source-serif': 'SourceSerif4, "Times New Roman", Times, serif',
      'albert-sans': 'AlbertSans, "Helvetica Neue", sans-serif',
    },
  },
})
