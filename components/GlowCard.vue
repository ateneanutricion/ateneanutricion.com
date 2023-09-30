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
    class="relative p-0.4 rounded-xl bg-gradient-to-r w-full"
    :class="glowGradient"
  >
    <div
      class="z-1 relative w-full h-full rounded-xl overflow-hidden bg-[#1a1a1a]"
    >
      <slot />
    </div>

    <div
      v-if="!disableGlow"
      class="absolute z-0 top-0 left-0 blur w-full h-full rounded bg-gradient-to-r"
      :class="glowGradient"
    ></div>
  </div>
</template>
