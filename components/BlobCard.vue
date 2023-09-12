<script lang="ts" setup>
interface Props {
  fillClass?: string
}
withDefaults(defineProps<Props>(), {
  fillClass: 'fill-teal-400',
})
</script>

<template>
  <article class="relative">
    <svg
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      class="h-full w-full"
      :class="fillClass"
    >
      <path
        d="M369,331Q345,422,256.5,393.5Q168,365,123,302.5Q78,240,116,166Q154,92,247,79.5Q340,67,366.5,153.5Q393,240,369,331Z"
      />
    </svg>

    <svg
      viewBox="0 0 100 100"
      class="absolute top-0 right-0 h-12 w-12"
      :class="fillClass"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
      />
    </svg>

    <div
      group
      class="absolute top-0 h-full w-full overflow-hidden"
    >
      <slot />
    </div>

    <footer class="absolute left-4 bottom-4">
      <slot name="footer" />
    </footer>
  </article>
</template>
