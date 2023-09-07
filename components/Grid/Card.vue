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
  colSpan?: Sizes
  rowSpan?: Sizes
}
const props = defineProps<Props>()
</script>

<template>
  <div
    group
    :class="{
      'card-columns__base': !!props.colSpan?.base,
      'card-columns__sm': !!props.colSpan?.sm,
      'card-columns__md': !!props.colSpan?.md,
      'card-columns__lg': !!props.colSpan?.lg,
      'card-columns__xl': !!props.colSpan?.xl,
      'card-columns__xxl': !!props.colSpan?.xxl,

      'card-rows__base': !!props.rowSpan?.base,
      'card-rows__sm': !!props.rowSpan?.sm,
      'card-rows__md': !!props.rowSpan?.md,
      'card-rows__lg': !!props.rowSpan?.lg,
      'card-rows__xl': !!props.rowSpan?.xl,
      'card-rows__xxl': !!props.rowSpan?.xxl,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.card-rows__base {
  grid-row: span v-bind('rowSpan?.base') / span v-bind('rowSpan?.base');
}
@media (min-width: 640px) {
  .card-rows__sm {
    grid-row: span v-bind('rowSpan?.sm') / span v-bind('rowSpan?.sm');
  }
}
@media (min-width: 768px) {
  .card-rows__md {
    grid-row: span v-bind('rowSpan?.md') / span v-bind('rowSpan?.md');
  }
}
@media (min-width: 1024px) {
  .card-rows__lg {
    grid-row: span v-bind('rowSpan?.lg') / span v-bind('rowSpan?.lg');
  }
}
@media (min-width: 1280px) {
  .card-rows__xl {
    grid-row: span v-bind('rowSpan?.xl') / span v-bind('rowSpan?.xl');
  }
}
@media (min-width: 1536px) {
  .card-rows__xxl {
    grid-row: span v-bind('rowSpan?.xxl') / span v-bind('rowSpan?.xxl');
  }
}
.card-columns__base {
  grid-column: span v-bind('colSpan?.base') / span v-bind('colSpan?.base');
}
@media (min-width: 640px) {
  .card-columns__sm {
    grid-column: span v-bind('colSpan?.sm') / span v-bind('colSpan?.sm');
  }
}
@media (min-width: 768px) {
  .card-columns__md {
    grid-column: span v-bind('colSpan?.md') / span v-bind('colSpan?.md');
  }
}
@media (min-width: 1024px) {
  .card-columns__lg {
    grid-column: span v-bind('colSpan?.lg') / span v-bind('colSpan?.lg');
  }
}
@media (min-width: 1280px) {
  .card-columns__xl {
    grid-column: span v-bind('colSpan?.xl') / span v-bind('colSpan?.xl');
  }
}
@media (min-width: 1536px) {
  .card-columns__xxl {
    grid-column: span v-bind('colSpan?.xxl') / span v-bind('colSpan?.xxl');
  }
}
</style>
