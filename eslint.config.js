import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default [
  ...antfu({
    overrides: {
      vue: {
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        }],
      },
    },
  }),
  unocss,

]
