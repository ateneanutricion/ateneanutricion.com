<script lang="ts" setup>
interface Props {
  title?: string
  subTitle?: string
}
defineProps<Props>()
</script>

<template>
  <section class="space-y-10">
    <header class="@container space-y-4">
      <span
        class="font-extrabold leading-none"
        style="font-size: clamp(3.5rem, 2.0902rem + 6.015vw, 6rem);"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </span>

      <span
        v-if="subTitle"
        class="block text-xs"
      >
        {{ subTitle }}
      </span>
    </header>

    <slot />
  </section>
</template>
