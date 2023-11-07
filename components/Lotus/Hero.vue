<script lang="ts" setup>
interface Props {
  title: string
  subTitle?: string
  image?: string
}
defineProps<Props>()
</script>

<template>
  <header class="grid min-h-[calc(100dvh-var(--navbar-height))] content-center items-center gap-8 @container sm:grid-cols-2">
    <div
      v-if="image"
      class="relative aspect-1 self-center sm:order-last <sm:aspect-16/9"
    >
      <div
        class="h-full w-full overflow-hidden rounded-3xl"
      >
        <NuxtImg
          :src="image"
          loading="lazy"
          preset="hero"
          fit="cover"
          class="w-full object-cover transition-300 hover:scale-105"
          alt="Atenea Logo"
        />
      </div>

      <span class="absolute bottom-0 left-0 h-18 w-18 rounded-3xl bg-violet-100 shadow" />
    </div>

    <div class="flex flex-col items-start gap-6">
      <span
        class="text-[20cqw]/[1] font-extrabold sm:text-[10cqw]/[1]"
      >
        {{ title }}
      </span>

      <span class="text-xs">
        {{ subTitle }}
      </span>

      <hr class="mx-auto h-[1] w-3/4 border-neutral-300">

      <div class="w-full flex justify-center gap-4">
        <LotusButton
          label="Saber más"
          to="#CTA"
          variant="link"
          size="lg"
        />

        <GlowCard>
          <LotusButton
            label="Contactanos"
            icon="i-ph:whatsapp-logo"
            size="lg"
            target="_blank"
            color="black"
            to="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20nutricional."
          />
        </GlowCard>
      </div>
    </div>
  </header>
</template>
