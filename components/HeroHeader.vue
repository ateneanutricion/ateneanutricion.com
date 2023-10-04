<script lang="ts" setup>
interface Props {
  titles: string[]
}

defineProps<Props>()
</script>

<template>
  <header class="h-[calc(100dvh-4rem)] px-6 overflow-clip @container">
    <div
      class="h-full flex flex-col items-center justify-center py-10 md:py-12 container mx-auto"
    >
      <slot name="prepend" />

      <div
        class="h-full w-full flex gap-2 flex-col md:flex-row items-center justify-center text-[20cqw]/[1] md:text-[8cqw] lg:text-[8.4cqw] font-black"
      >
        <span
          v-for="(title, i) in titles"
          :key="i"
          :data-title-content="title"
          class="relative block select-none before:absolute before:block before:text-white"
        >
          <span
            class="bg-gradient-to-r bg-clip-text text-transparent"
            :class="{
              'from-indigo-500 to-sky-500': i === 0,
              'from-emerald-500 to-[rgb(177_191_146)]': i === 1,
              'from-purple-500 to-pink-500': i === 2,
            }"
          >
            {{ title }}
          </span>
        </span>
      </div>
      <slot name="append" />
    </div>
  </header>
</template>

<style scoped>
[data-title-content]::before {
  content: attr(data-title-content);
}

[data-title-content] > span {
  animation: gradient-text_fade2 8s infinite;
}
[data-title-content]:nth-child(1) > span {
  animation: gradient-text_fade 8s infinite;
}
[data-title-content]:nth-child(3) > span {
  animation: gradient-text_fade3 8s infinite;
}

@keyframes gradient-text_fade {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes gradient-text_fade2 {
  0%,
  100% {
    opacity: 0;
  }
  33.333%,
  50% {
    opacity: 1;
  }
  16.667%,
  66.667% {
    opacity: 0;
  }
}

@keyframes gradient-text_fade3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  66.667%,
  83.333% {
    opacity: 1;
  }
}
</style>
