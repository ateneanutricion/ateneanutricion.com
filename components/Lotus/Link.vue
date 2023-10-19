<script lang="ts" setup>
import type { NuxtLinkProps } from 'nuxt/dist/app/components'

interface Props extends NuxtLinkProps {
  as?: string
  disabled?: boolean

}
defineOptions({ inheritAttrs: false })
withDefaults(defineProps<Props>(), {
  as: 'button',
  prefetch: undefined,
  noPrefetch: undefined,
})
</script>

<template>
  <component
    :is="as"
    v-if="!to"
    :disabled="disabled"
    :aria-disabled="disabled ? 'true' : undefined"
    v-bind="$attrs"
  >
    <slot />
  </component>
  <NuxtLink
    v-else
    v-slot="{ href, target, rel, navigate, isExactActive, isExternal }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="!disabled ? href : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :role="disabled ? 'link' : undefined"
      :rel="rel"
      :target="target"
      :class="[isExactActive ? exactActiveClass : '']"
      @click="(e) => !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: isExactActive }" />
    </a>
  </NuxtLink>
</template>
