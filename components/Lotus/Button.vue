<script lang="ts" setup>
interface Props {
  type?: string
  block?: boolean
  label?: string
  loading?: boolean
  disabled?: boolean
  padded?: boolean
  size?: ButtonSize
  color?: ButtonColor
  variant?: ButtonVariant
  icon?: string
  loadingIcon?: string
  leadingIcon?: string
  leading?: boolean
  trailingIcon?: string
  trailing?: boolean
  square?: boolean
  truncate?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  block: false,
  loading: false,
  disabled: false,
  padded: true,
  size: 'sm',
  color: 'white',
  variant: 'solid',
  loadingIcon: 'i-mdi:loading',
  trailing: false,
  leading: false,
  square: false,
  truncate: false,
})

const ui = {
  base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
  font: 'font-medium',
  rounded: 'rounded-md',
  size: {
    '2xs': 'text-xs',
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-sm',
    'lg': 'text-sm',
    'xl': 'text-base',
  },
  gap: {
    '2xs': 'gap-x-1',
    'xs': 'gap-x-1.5',
    'sm': 'gap-x-1.5',
    'md': 'gap-x-2',
    'lg': 'gap-x-2.5',
    'xl': 'gap-x-2.5',
  },
  padding: {
    '2xs': 'px-2 py-1',
    'xs': 'px-2.5 py-1.5',
    'sm': 'px-2.5 py-1.5',
    'md': 'px-3 py-2',
    'lg': 'px-3.5 py-2.5',
    'xl': 'px-3.5 py-2.5',
  },
  square: {
    '2xs': 'p-1',
    'xs': 'p-1.5',
    'sm': 'p-1.5',
    'md': 'p-2',
    'lg': 'p-2.5',
    'xl': 'p-2.5',
  },
  icon: {
    base: 'flex-shrink-0',
    size: {
      '2xs': 'h-4 w-4',
      'xs': 'h-4 w-4',
      'sm': 'h-5 w-5',
      'md': 'h-5 w-5',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
  variants: {
    solid: 'shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    outline: 'ring-1 ring-inset ring-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    soft: 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    ghost: 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    link: 'underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  },
  color: {
    white: {
      solid: 'ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 dark:disabled:bg-gray-900',
      outline: 'text-gray-900 dark:text-white disabled:bg-transparent dark:disabled:bg-transparent',
      soft: 'text-gray-900 dark:text-white bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:disabled:bg-gray-950',
      ghost: 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900',
      link: 'text-gray-900 dark:text-white disabled:text-gray-500 dark:disabled:text-gray-400',
    },
    black: {
      solid: `
      ring-gray-300 dark:ring-gray-700
      text-white dark:text-gray-900 
      bg-gray-900 dark:bg-white
      hover:bg-gray-800 dark:hover:bg-gray-100
      disabled:bg-gray-900 dark:disabled:bg-white`,
      outline: `
      text-white dark:text-gray-900
      disabled:bg-transparent dark:disabled:bg-transparent`,
      soft: `
      text-white dark:text-gray-900
      bg-gray-800 dark:bg-gray-50
      hover:bg-gray-900 dark:hover:bg-gray-100
      disabled:bg-gray-50 dark:disabled:bg-gray-950`,
      ghost: `
      text-white dark:text-gray-900
      hover:bg-gray-900 dark:hover:bg-gray-100`,
      link: `
      text-white dark:text-gray-900
      disabled:text-gray-500 dark:disabled:text-gray-400`,
    },
    violet: {
      solid: `
      text-white dark:text-gray-900 
      bg-violet-500 dark:bg-violet-400
      hover:bg-violet-600 dark:hover:bg-violet-500
      disabled:bg-violet-500 dark:disabled:bg-violet-400
      focus-visible:outline-violet-500 dark:focus-visible:outline-violet-400`,
      outline: `
      text-violet-500 dark:text-violet-400
      hover:bg-violet-50 dark:hover:bg-violet-950
      disabled:bg-transparent dark:disabled:bg-transparent`,
      soft: `
      text-violet-500 dark:text-violet-400
      bg-violet-50 dark:bg-violet-950
      hover:bg-violet-100 dark:hover:bg-violet-900
      disabled:bg-violet-50 dark:disabled:bg-violet-950`,
      ghost: `
      text-violet-500 dark:text-violet-400
      hover:bg-violet-50 dark:hover:bg-violet-950
      disabled:bg-transparent dark:disabled:bg-transparent`,
      link: `
      text-violet-500 dark:text-violet-400
      hover:text-violet-600 dark:hover:text-violet-500
      disabled:text-violet-500 dark:disabled:text-violet-400`,
    },
    primary: {
      solid: `
      text-white dark:text-gray-900 
      bg-primary-500 dark:bg-primary-400
      hover:bg-primary-600 dark:hover:bg-primary-500
      disabled:bg-primary-500 dark:disabled:bg-primary-400
      focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400`,
      outline: `
      text-primary-500 dark:text-primary-400
      hover:bg-primary-50 dark:hover:bg-primary-950
      disabled:bg-transparent dark:disabled:bg-transparent`,
      soft: `
      text-primary-500 dark:text-primary-400
      bg-primary-50 dark:bg-primary-950
      hover:bg-primary-100 dark:hover:bg-primary-900
      disabled:bg-primary-50 dark:disabled:bg-primary-950`,
      ghost: `
      text-primary-500 dark:text-primary-400
      hover:bg-primary-50 dark:hover:bg-primary-950
      disabled:bg-transparent dark:disabled:bg-transparent`,
      link: `
      text-primary-500 dark:text-primary-400
      hover:text-primary-600 dark:hover:text-primary-500
      disabled:text-primary-500 dark:disabled:text-primary-400`,
    },
  },
}

type ButtonSize = keyof typeof ui.size
type ButtonColor = keyof typeof ui.color
type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost' | 'link'

const slots = useSlots()

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing) || props.leadingIcon
})
const isTrailing = computed(() => {
  return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
})
const isSquare = computed(() => props.square || (!slots.default && !props.label))

const buttonClass = computed(() => {
  const defaultVariant = ui.variants[props.variant]
  const variant = ui.color[props.color]?.[props.variant]

  return `${ui.base} ${ui.font} ${ui.rounded} ${ui.size[props.size]} ${ui.gap[props.size]} ${props.padded && ui[isSquare.value ? 'square' : 'padding'][props.size]} ${defaultVariant} ${variant} ${props.block ? 'w-full flex justify-center items-center' : 'inline-flex items-center'}`
})

const leadingIconName = computed(() => {
  if (props.loading)
    return props.loadingIcon

  return props.leadingIcon || props.icon
})
const trailingIconName = computed(() => {
  if (props.loading && !isLeading.value)
    return props.loadingIcon

  return props.trailingIcon || props.icon
})

const leadingIconClass = computed(() => {
  return `${ui.icon.base} ${ui.icon.size[props.size]} ${props.loading && 'animate-spin'}`
})
const trailingIconClass = computed(() => {
  return `${ui.icon.base} ${ui.icon.size[props.size]} ${props.loading && !isLeading.value && 'animate-spin'}`
})
</script>

<template>
  <LotusLink
    :as="type"
    :disabled="disabled || loading"
    :class="buttonClass"
  >
    <slot
      name="leading"
      :disabled="disabled"
      :loading="loading"
    >
      <UnoIcon
        v-if="isLeading && leadingIconName"
        :class="[leadingIconName, leadingIconClass]"
        aria-hidden="true"
      />
    </slot>

    <slot>
      <span
        v-if="label"
        :class="[truncate ? 'text-left break-all line-clamp-1' : '']"
      >
        {{ label }}
      </span>
    </slot>

    <slot
      name="trailing"
      :disabled="disabled"
      :loading="loading"
    >
      <UnoIcon
        v-if="isTrailing && trailingIconName"
        :class="[trailingIconName, trailingIconClass]"
        aria-hidden="true"
      />
    </slot>
  </LotusLink>
</template>
