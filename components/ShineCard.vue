<script lang="ts" setup>
interface Props {
  blobColor?: string
}
withDefaults(defineProps<Props>(), {
  blobColor: 'bg-white/50',
})

const card = shallowRef<HTMLDivElement>()
const blob = shallowRef<HTMLDivElement>()

const { x, y } = useSharedMouse({ type: (e) => [e.clientX, e.clientY] })

watchEffect(() => {
  if (!card.value || !blob.value) return
  if (!card.value.getBoundingClientRect()) return

  const rect = card.value.getBoundingClientRect()
  const xAnimation = x.value - rect.left - rect.width / 2
  const yAnimation = y.value - rect.top - rect.height / 2

  blob.value.style.opacity = '1'
  blob.value.animate(
    [{ transform: `translate(${xAnimation}px,${yAnimation}px)` }],
    { duration: 300, fill: 'forwards' }
  )
})
</script>

<template>
  <div
    ref="card"
    class="relative p-1 overflow-hidden rounded-2xl bg-[#80808033] w-full"
  >
    <div
      class="z-1 relative w-full h-full rounded-xl overflow-hidden bg-[#1a1a1a]"
    >
      <slot />
    </div>

    <div
      ref="blob"
      class="z-0 absolute top-0 left-0 blur-2xl opacity-0 w-[250px] h-[250px] rounded-full"
      :class="blobColor"
    ></div>
  </div>
</template>
