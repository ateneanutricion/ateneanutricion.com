<template>
  <div>
    <AteneaNavBar />

    <main class="container max-w-[80ch] mx-auto font-albert-sans">
      <slot />
    </main>

    <footer class="sm:h-xs grid grid-rows-2">
      <div class="relative z-1">
        <div class="absolute -bottom-6 w-full">
          <div
            class="h-full w-11/12 mx-auto bg-[#15CDCA] rounded-xl p-4 text-center"
          >
            <p class="text-neutral-200 font-semibold text-lg">ATENEA</p>
          </div>
        </div>
      </div>

      <div class="pt-6 bg-neutral-700 text-neutral-200 grid">
        <div class="p-4 space-y-4">
          <NuxtLink
            to="/"
            class="flex items-center gap-1"
          >
            <img
              src="@/assets/atenea_logo.png"
              class="h-10 w-10 drop-shadow-sm"
            />
            <span class="font-semibold text-[rgb(177_191_146)] drop-shadow-sm">
              ATENEA
            </span>
          </NuxtLink>

          <p>
            Mi nombre es Mitzi y quiero ayudarte a superar tus metas, nuestro
            objetivo principal será optimizar tu salud, utilizando la mejor arma
            que es la Nutrición de excelencia y calidad
          </p>
        </div>

        <div class="p-4">
          <p>Nosotros</p>
          <p>Contactanos <UnoIcon class="i-ph:whatsapp-logo-bold w-6 h-6" /></p>
        </div>

        <div class="p-4 flex">
          <UnoIcon class="i-ph:instagram-logo-bold w-6 h-6" />
          <UnoIcon class="i-ph:envelope-simple-bold w-6 h-6" />
          <UnoIcon class="i-ph:facebook-logo-bold w-6 h-6" />
          <UnoIcon class="i-ph:linkedin-logo-bold w-6 h-6" />
        </div>
      </div>
    </footer>
  </div>
</template>
