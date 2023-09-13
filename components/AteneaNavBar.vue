<script lang="ts" setup></script>

<template>
  <nav class="sticky top-0 px-6 h-16 bg-white/70 backdrop-blur z-2">
    <div class="h-full flex items-center justify-between">
      <NuxtLink
        to="/"
        class="flex items-center gap-1"
      >
        <NuxtImg
          src="/atenea_logo.png"
          loading="lazy"
          preset="avatar"
          class="h-10 w-10 drop-shadow-sm"
        />
        <span class="font-semibold text-[rgb(177_191_146)] drop-shadow-sm">
          ATENEA
        </span>
      </NuxtLink>

      <div class="space-x-2 md:space-x-4 text-xs">
        <NuxtLink to="/nutricion"> Nutrición </NuxtLink>
        <NuxtLink to="/epigenetica"> Epigenetica </NuxtLink>
        <NuxtLink to="/nosotros"> Nosotros </NuxtLink>
      </div>
    </div>
  </nav>
</template>
