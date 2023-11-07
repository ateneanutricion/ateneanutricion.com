<script lang="ts" setup>
interface UIBaseProperties {
  base: string
  background: string
  padding: string
}
interface UIButtonProperties extends Omit<UIBaseProperties, 'padding'> {
  divide: string
  ring: string
  rounded: string
  shadow: string
}
interface UI extends UIButtonProperties {
  body: Partial<UIBaseProperties>
  header: Partial<UIBaseProperties>
  footer: Partial<UIBaseProperties>
}
interface Props {
  as?: string
  ui?: Partial<UI>
}
const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  ui: () => ({}),
})

const DEFAULT: UI = {
  base: 'overflow-hidden',
  background: 'bg-white dark:bg-gray-900',
  divide: 'divide-y divide-gray-200 dark:divide-gray-800',
  ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
  rounded: 'rounded-lg',
  shadow: 'shadow',
  body: {
    base: '',
    background: '',
    padding: 'px-4 py-5 sm:p-6',
  },
  header: {
    base: '',
    background: '',
    padding: 'px-4 py-5 sm:px-6',
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-4 py-4 sm:px-6',
  },
}

const ui = computed(() => ({
  ...DEFAULT,
  ...props.ui,
  body: { ...DEFAULT.body, ...props.ui.body },
  header: { ...DEFAULT.header, ...props.ui.header },
  footer: { ...DEFAULT.footer, ...props.ui.footer },

}))
</script>

<template>
  <component
    :is="$attrs.onSubmit ? 'form' : as"
    :class=" [
      ui.base,
      ui.rounded,
      ui.divide,
      ui.ring,
      ui.shadow,
      ui.background,
    ]"
    class="h-full w-full"
  >
    <header
      v-if="$slots.header"
      :class="[ui.header.base, ui.header.padding, ui.header.background]"
    >
      <slot name="header" />
    </header>

    <div :class="[ui.body.base, ui.body.padding, ui.body.background]">
      <slot />
    </div>

    <footer
      v-if="$slots.footer"
      :class="[ui.footer.base, ui.footer.padding, ui.footer.background]"
    >
      <slot name="footer" />
    </footer>
  </component>
</template>
