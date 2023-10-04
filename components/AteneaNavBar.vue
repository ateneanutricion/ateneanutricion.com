<template>
  <nav class="sticky w-full top-0 px-6 h-16 bg-black/70 backdrop-blur z-99">
    <div class="h-full flex items-center justify-between">
      <NuxtLink
        to="/"
        class="flex items-center gap-1"
      >
        <NuxtImg
          src="/atenea_logo.png"
          loading="lazy"
          preset="avatar"
          class="h-10 w-10"
          alt="Atenea Logo"
        />
        <span class="text-[rgb(177_191_146)]"> ATENEA </span>
      </NuxtLink>

      <div class="space-x-2 md:space-x-4 text-xs font-light text-neutral-300">
        <NuxtLink
          to="/nutricion"
          exact-active-class="font-bold text-[rgb(177_191_146)]"
        >
          Nutrición
        </NuxtLink>
        <NuxtLink
          to="/epigenetica"
          exact-active-class="font-bold text-[rgb(177_191_146)]"
        >
          Epigenetica
        </NuxtLink>
        <NuxtLink
          to="/nosotros"
          exact-active-class="font-bold text-[rgb(177_191_146)]"
        >
          Nosotros
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
