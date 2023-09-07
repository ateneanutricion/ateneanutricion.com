<script lang="ts" setup>
const [flipped, toggleFlipped] = useToggle(false)
</script>

<template>
  <div
    class="h-full w-full cursor-pointer select-none"
    @click="() => toggleFlipped()"
  >
    <div
      class="flip-card-inner relative w-full h-full transform preserve-3d transition-transform-800"
      :class="{ 'rotate-y-180': flipped }"
    >
      <UnoIcon
        class="i-ph:arrow-circle-right-bold absolute top-2 right-2 z-1"
        :class="{ 'text-gray-200': flipped }"
      />

      <div class="absolute w-full h-full backface-hidden">
        <slot name="front" />
      </div>

      <div class="absolute w-full h-full backface-hidden rotate-y-180">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>
