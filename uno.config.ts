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
})
