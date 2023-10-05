<template>
  <div class="relative w-[1200px] h-[640px] p-12 px-20 overflow-hidden">
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
    <div class="text-neutral-200 py-10 space-y-2">
      <h1
        class="text-9xl font-black text-transparent bg-gradient-to-r from-emerald-500 to-[rgb(177_191_146)] bg-clip-text"
      >
        Nosotros
      </h1>
      <p class="text-4xl font-bold text-neutral-200">
        Conoce quienes somos
      </p>
      <p class="w-3/4 text-neutral-400 text-lg mt-10!">
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
      class="absolute -bottom-1/2 -right-1/4 opacity-40"
    />
  </div>
</template>
