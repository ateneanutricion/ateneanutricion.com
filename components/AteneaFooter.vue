<template>
  <footer>
    <div class="relative z-1 h-24 select-none">
      <div class="absolute w-full -bottom-6">
        <div
          class="mx-auto h-full w-10/12 border rounded-2xl py-2 text-center md:w-1/2"
        >
          <p class="font-semibold text-neutral-100">
            ¡Optimiza tu salud!
          </p>
        </div>
      </div>
    </div>

    <div
      class="grid gap-4 bg-black px-12 pb-12 pt-16 text-neutral-200 md:grid-cols-4"
    >
      <div class="grid content-center gap-1 md:justify-center">
        <NuxtLink
          to="/"
          class="flex items-center gap-1"
        >
          <NuxtImg
            src="/atenea_logo.png"
            loading="lazy"
            preset="avatar"
            class="h-10 w-10 drop-shadow-sm"
            alt="Atenea Logo"
          />
          <span class="font-semibold text-[rgb(177_191_146)] drop-shadow-sm">
            ATENEA
          </span>
        </NuxtLink>

        <span class="text-xs font-extralight text-neutral-300">
          Matehuala, S.L.P.
        </span>
        <span class="text-xs font-extralight text-neutral-300">
          San Luis Potosí, S.L.P.
        </span>

        <p class="text-xs font-extralight text-neutral-300">
          ¡Supera tus limites!
        </p>
        <p class="text-xs font-extralight text-neutral-300">
          Copyright © 2023
        </p>
      </div>

      <div class="grid gap-2 md:col-span-3 md:grid-cols-3">
        <div
          class="grid content-center gap-2 text-sm font-extralight md:row-span-2"
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
          class="grid content-center gap-2 text-sm font-extralight md:row-span-2"
        >
          <NuxtLink
            to="/nosotros"
            class="border-l-3 border-[rgb(177_191_146)] pl-2"
          >
            Nosotros
          </NuxtLink>
        </div>

        <div
          class="grid content-center justify-start text-sm md:justify-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20nutricional."
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            class="rounded-xl bg-[rgb(177_191_146)] px-6 py-2 font-semibold text-neutral-800"
          >
            <div class="flex items-center justify-center gap-1">
              Contacto
              <UnoIcon class="i-ph:whatsapp-logo h-4 w-4" />
            </div>
          </a>
        </div>

        <div class="flex justify-start gap-4 py-4 md:justify-center">
          <a
            href="https://www.instagram.com/ateneanutricion/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sígueme en Instagram"
          >
            <UnoIcon class="i-ph:instagram-logo h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/YetlanetziPortillo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sígueme en Facebook"
          >
            <UnoIcon class="i-ph:facebook-logo h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mitzivillafaña"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacto en Linkedin"
          >
            <UnoIcon class="i-ph:linkedin-logo h-6 w-6" />
          </a>
          <a
            href="mailto:contacto@ateneanutricion.com?Subject=Cita%20Nutricional"
            aria-label="Contacto por correo electronico"
          >
            <UnoIcon class="i-ph:envelope-simple h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
