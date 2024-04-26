import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
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
      'vue/no-restricted-syntax': [
        'error',
        {
          selector: 'VElement[name="a"]',
          message: 'Use NuxtLink instead.',
        },
      ],
    },
  },
}, {
  rules: {
    'no-console': ['warn', { allow: ['info'] }],
    'no-alert': 'warn',
  },
})
