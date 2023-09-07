<script lang="ts" setup>
interface Sizes {
  base?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}
interface Props {
  cols?: Sizes
  rows?: Sizes
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="grid gap-4 p-4"
    :class="{
      'container-columns__base': !!props.cols?.base,
      'container-columns__sm': !!props.cols?.sm,
      'container-columns__md': !!props.cols?.md,
      'container-columns__lg': !!props.cols?.lg,
      'container-columns__xl': !!props.cols?.xl,
      'container-columns__xxl': !!props.cols?.xxl,

      'card-rows__base': !!props.rows?.base,
      'card-rows__sm': !!props.rows?.sm,
      'card-rows__md': !!props.rows?.md,
      'card-rows__lg': !!props.rows?.lg,
      'card-rows__xl': !!props.rows?.xl,
      'card-rows__xxl': !!props.rows?.xxl,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.container-rows__base {
  grid-template-rows: repeat(v-bind('rows?.base'), minmax(0, 1fr));
}
@media (min-width: 640px) {
  .container-rows__sm {
    grid-template-rows: repeat(v-bind('rows?.sm'), minmax(0, 1fr));
  }
}
@media (min-width: 768px) {
  .container-rows__md {
    grid-template-rows: repeat(v-bind('rows?.md'), minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .container-rows__lg {
    grid-template-rows: repeat(v-bind('rows?.lg'), minmax(0, 1fr));
  }
}
@media (min-width: 1280px) {
  .container-rows__xl {
    grid-template-rows: repeat(v-bind('rows?.xl'), minmax(0, 1fr));
  }
}
@media (min-width: 1536px) {
  .container-rows__xxl {
    grid-template-rows: repeat(v-bind('rows?.xxl'), minmax(0, 1fr));
  }
}

.container-columns__base {
  grid-template-columns: repeat(v-bind('cols?.base'), minmax(0, 1fr));
}
@media (min-width: 640px) {
  .container-columns__sm {
    grid-template-columns: repeat(v-bind('cols?.sm'), minmax(0, 1fr));
  }
}
@media (min-width: 768px) {
  .container-columns__md {
    grid-template-columns: repeat(v-bind('cols?.md'), minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .container-columns__lg {
    grid-template-columns: repeat(v-bind('cols?.lg'), minmax(0, 1fr));
  }
}
@media (min-width: 1280px) {
  .container-columns__xl {
    grid-template-columns: repeat(v-bind('cols?.xl'), minmax(0, 1fr));
  }
}
@media (min-width: 1536px) {
  .container-columns__xxl {
    grid-template-columns: repeat(v-bind('cols?.xxl'), minmax(0, 1fr));
  }
}
</style>
