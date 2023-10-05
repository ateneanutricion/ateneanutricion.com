<script lang="ts" setup>
interface Props {
  disableGlow?: boolean
  glowGradient?: string
}
withDefaults(defineProps<Props>(), {
  disableGlow: false,
  glowGradient: 'from-indigo-500 to-cyan-500',
})
</script>

<template>
  <div
    class="relative w-full rounded-xl bg-gradient-to-r p-0.4"
    :class="glowGradient"
  >
    <div
      class="relative z-1 h-full w-full overflow-hidden rounded-xl bg-[#1a1a1a]"
    >
      <slot />
    </div>

    <div
      v-if="!disableGlow"
      class="absolute left-0 top-0 z-0 h-full w-full rounded-xl bg-gradient-to-r blur"
      :class="glowGradient"
    />
  </div>
</template>
