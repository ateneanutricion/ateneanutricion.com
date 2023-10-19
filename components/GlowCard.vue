<script lang="ts" setup>
interface Props {
  disableGlow?: boolean
  glowGradient?: string
}
const props = withDefaults(defineProps<Props>(), {
  disableGlow: false,
  glowGradient: 'from-indigo-500 to-cyan-500',
})
const glowClasses = computed(() => props.disableGlow
  ? ''
  : `before:absolute before:inset-0 before:bg-gradient-to-r before:blur-md before:content-[''] before:-z-1`)
</script>

<template>
  <div
    class="[background:linear-gradient(to_right,var(--un-gradient-stops))_border-box] relative border-4 border-transparent rounded-2xl"
    :class="[glowGradient, glowClasses]"
  >
    <div
      class="h-full w-full overflow-hidden rounded-xl"
    >
      <slot />
    </div>
  </div>
</template>
