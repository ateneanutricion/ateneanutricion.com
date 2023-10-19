<template>
  <footer class="relative">
    <div class="absolute w-full w-full -top-4">
      <div class="mx-auto w-10/12 rounded-lg bg-black py-2 text-center text-white sm:w-1/2">
        ¡Optimiza tu salud!
      </div>
    </div>

    <div class="grid gap-4 border-t p-12 sm:grid-cols-4">
      <div class="grid content-center gap-1 sm:justify-center">
        <LotusButton
          to="/"
          :padded="false"
          label="ATENEA"
          color="primary"
          variant="ghost"
        >
          <template #leading>
            <NuxtImg
              src="/atenea_logo.png"
              loading="lazy"
              preset="avatar"
              class="h-8 w-8"
              alt="Atenea Logo"
            />
          </template>
        </LotusButton>
        <span class="text-xs font-extralight text-primary-700">
          ¡Supera tus limites!
        </span>

        <span class="text-xs font-extralight text-primary-700">
          Matehuala, S.L.P.
        </span>
        <span class="text-xs font-extralight text-primary-700">
          San Luis Potosí, S.L.P.
        </span>

        <p class="text-xs font-extralight text-primary-200">
          Copyright © 2023
        </p>
      </div>

      <div class="grid gap-2 sm:col-span-3 sm:grid-cols-3">
        <div
          class="grid content-center gap-2 text-sm font-extralight sm:row-span-2"
        >
          <LotusButton
            to="/nutricion"
            label="Nutrición"
            color="primary"
            variant="ghost"
          />

          <LotusButton
            to="/epigenetica"
            label="Epigenética"
            color="primary"
            variant="ghost"
          />
        </div>

        <div
          class="grid content-center gap-2 text-sm font-extralight sm:row-span-2"
        >
          <LotusButton
            to="/nosotros"
            label="Nosotros"
            color="primary"
            variant="ghost"
          />
        </div>

        <div
          class="grid content-center justify-start text-sm sm:justify-center"
        >
          <LotusButton
            to="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20nutricional."
            target="_blank"
            label="Contacto"
            icon="i-ph:whatsapp-logo"
            color="primary"
            trailing
          />
        </div>

        <div class="flex justify-start py-4 sm:justify-center">
          <LotusButton
            to="https://www.instagram.com/ateneanutricion"
            icon="i-ph:instagram-logo"
            target="_blank"
            variant="ghost"
            aria-label="Sígueme en Instagram"
            square
          />
          <LotusButton
            to="https://www.facebook.com/YetlanetziPortillo"
            icon="i-ph:facebook-logo"
            target="_blank"
            variant="ghost"
            aria-label="Sígueme en Facebook"
            square
          />
          <LotusButton
            to="https://www.linkedin.com/in/mitzivillafaña"
            icon="i-ph:linkedin-logo"
            target="_blank"
            variant="ghost"
            aria-label="Contacto en Linkedin"
            square
          />
          <LotusButton
            to="mailto:contacto@ateneanutricion.com?Subject=Cita%20Nutricional"
            icon="i-ph:envelope"
            variant="ghost"
            aria-label="Contacto por correo electronico"
            square
          />
        </div>
      </div>
    </div>
  </footer>
</template>
