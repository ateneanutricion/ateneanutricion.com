<script lang="ts" setup>
const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  ui: () => ({}),
})
interface Props {
  as?: string
  ui?: Record<string, any>
}

const card = {
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
const body = Object.assign(card.body, props.ui.body ?? {})
const header = Object.assign(card.header, props.ui.header ?? {})
const footer = Object.assign(card.footer, props.ui.footer ?? {})
const ui = Object.assign(card, props.ui)
ui.body = body
ui.header = header
ui.footer = footer

const cardClass = computed(() =>
  [
    ui.base,
    ui.rounded,
    ui.divide,
    ui.ring,
    ui.shadow,
    ui.background,
  ],
)
</script>

<template>
  <component
    :is="$attrs.onSubmit ? 'form' : as"
    :class="cardClass"
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
