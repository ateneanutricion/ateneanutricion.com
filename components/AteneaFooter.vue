<template>
  <footer>
    <div class="relative z-1 h-24">
      <div class="absolute -bottom-6 w-full">
        <div
          class="h-full w-10/12 md:w-1/2 mx-auto border rounded-2xl py-2 text-center"
        >
          <p class="text-neutral-100 font-semibold">¡Optimiza tu salud!</p>
        </div>
      </div>
    </div>

    <div
      class="px-12 pb-12 pt-16 grid gap-4 md:grid-cols-4 bg-black text-neutral-200"
    >
      <div class="grid gap-1 content-center md:justify-center">
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

        <span class="text-xs text-neutral-300 font-extralight">
          Matehuala, S.L.P.
        </span>
        <span class="text-xs text-neutral-300 font-extralight">
          San Luis Potosí, S.L.P.
        </span>
        <span class="text-xs text-neutral-300 font-extralight">
          San Miguel Allende, Gto.
        </span>

        <p class="text-xs text-neutral-300 font-extralight">
          ¡Supera tus limites!
        </p>
        <p class="text-xs text-neutral-300 font-extralight">Copyright © 2023</p>
      </div>

      <div class="grid gap-2 md:grid-cols-3 md:col-span-3">
        <div
          class="grid md:row-span-2 gap-2 content-center text-sm font-extralight"
        >
          <NuxtLink
            to="/nutricion"
            class="border-l-3 border-[rgb(177_191_146)] pl-2"
          >
            Nutrición
          </NuxtLink>

          <NuxtLink
            to="/epigenetica"
            class="border-l-3 border-[rgb(177_191_146)] pl-2"
          >
            Epigenética
          </NuxtLink>
        </div>

        <div
          class="grid md:row-span-2 gap-2 content-center text-sm font-extralight"
        >
          <NuxtLink
            to="/nosotros"
            class="border-l-3 border-[rgb(177_191_146)] pl-2"
          >
            Nosotros
          </NuxtLink>
        </div>

        <div
          class="grid justify-start md:justify-center content-center text-sm"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20nutricional."
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            class="rounded-xl bg-[rgb(177_191_146)] text-neutral-600 font-semibold py-2 px-6"
          >
            <div class="flex gap-1 justify-center items-center">
              Contacto
              <UnoIcon class="i-ph:whatsapp-logo w-4 h-4" />
            </div>
          </a>
        </div>

        <div class="flex gap-4 justify-start md:justify-center py-4">
          <a
            href="https://www.instagram.com/ateneanutricion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UnoIcon class="i-ph:instagram-logo w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/YetlanetziPortillo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UnoIcon class="i-ph:facebook-logo w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mitzivillafaña"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UnoIcon class="i-ph:linkedin-logo w-6 h-6" />
          </a>
          <a
            href="mailto:contacto@ateneanutricion.com?Subject=Cita%20Nutricional"
          >
            <UnoIcon class="i-ph:envelope-simple w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
