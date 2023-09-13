<script lang="ts" setup>
interface Props {
  isVertical?: boolean
}
defineProps<Props>()
</script>

<template>
  <div
    peer
    class="flex bg-white rounded-xl border shadow-lg overflow-hidden transition-all-400 ease-in-out relative left-0 sm:[&:not(:first-child)]:-ml-12 hover:-translate-y-5 sm:peer-hover:left-12"
    :class="{
      'top-0': isVertical,
      '[&:not(:first-child)]:-mt-[60%]': isVertical,
      'sm:[&:not(:first-child)]:mt-0': isVertical,
      'peer-hover:top-30': isVertical,
      'sm:peer-hover:top-0': isVertical,
    }"
  >
    <slot />
  </div>
</template>
