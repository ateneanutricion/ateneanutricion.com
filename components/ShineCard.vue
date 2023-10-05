<script lang="ts" setup>
interface Props {
  blobColor?: string
}
withDefaults(defineProps<Props>(), {
  blobColor: 'bg-white/50',
})

const card = shallowRef<HTMLDivElement>()
const blob = shallowRef<HTMLDivElement>()

const { x, y } = useSharedMouse({ type: e => [e.clientX, e.clientY] })

watchEffect(() => {
  if (!card.value || !blob.value)
    return
  if (!card.value.getBoundingClientRect())
    return

  const rect = card.value.getBoundingClientRect()
  const xAnimation = x.value - rect.left - rect.width / 2
  const yAnimation = y.value - rect.top - rect.height / 2

  blob.value.style.opacity = '1'
  blob.value.animate(
    [{ transform: `translate(${xAnimation}px,${yAnimation}px)` }],
    { duration: 300, fill: 'forwards' },
  )
})
</script>

<template>
  <div
    ref="card"
    class="relative w-full overflow-hidden rounded-2xl bg-[#80808033] p-1"
  >
    <div
      class="relative z-1 h-full w-full overflow-hidden rounded-xl bg-[#1a1a1a]"
    >
      <slot />
    </div>

    <div
      ref="blob"
      class="absolute left-0 top-0 z-0 h-[250px] w-[250px] rounded-full opacity-0 blur-2xl"
      :class="blobColor"
    />
  </div>
</template>
