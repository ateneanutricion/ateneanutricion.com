<template>
  <div class="relative h-[640px] w-[1200px] overflow-hidden p-12 px-20">
    <NuxtLink
      to="/"
      class="flex items-center gap-1"
    >
      <NuxtImg
        src="/atenea_logo.png"
        loading="lazy"
        preset="avatar"
        width="64"
        height="64"
        quality="90"
      />
      <span class="text-3xl text-[rgb(177_191_146)]"> ATENEA </span>
    </NuxtLink>
    <div class="py-10 text-neutral-200 space-y-2">
      <h1
        class="from-emerald-500 to-[rgb(177_191_146)] bg-gradient-to-r bg-clip-text text-9xl text-transparent font-black"
      >
        Nosotros
      </h1>
      <p class="text-4xl text-neutral-200 font-bold">
        Conoce quienes somos
      </p>
      <p class="w-3/4 text-lg text-neutral-400 mt-10!">
        Sabemos que para alcanzar una salud física y mental para un óptimo
        bienestar, debemos tener un enfoque integral, nuestro objetivo es
        brindar las herramientas que impulsen un cambio de hábitos para alcanzar
        objetivos individuales, enfocados en una Nutrición de calidad, actividad
        física y bienestar emocional.
      </p>
    </div>
    <NuxtImg
      src="/atenea_logo.png"
      loading="lazy"
      preset="avatar"
      width="800"
      height="800"
      quality="90"
      class="absolute opacity-40 -bottom-1/2 -right-1/4"
    />
  </div>
</template>
