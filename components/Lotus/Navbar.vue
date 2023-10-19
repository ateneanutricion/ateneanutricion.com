<template>
  <nav class="sticky left-0 right-0 top-0 z-99 h-[--navbar-height] px-4">
    <div class="h-full w-full flex items-center justify-between">
      <LotusButton
        to="/"
        variant="link"
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

        <span class="text-primary">
          ATENEA
        </span>
      </LotusButton>

      <div class="space-x-3">
        <LotusButton
          label="Nutrición"
          variant="link"
          to="/nutricion"
          size="2xs"
          :padded="false"
          exact-active-class="font-bold text-primary!"
        />
        <LotusButton
          label="Epigenetica"
          variant="link"
          to="/epigenetica"
          size="2xs"
          :padded="false"
          exact-active-class="font-bold text-primary!"
        />
        <LotusButton
          label="Nosotros"
          variant="link"
          to="/nosotros"
          size="2xs"
          :padded="false"
          exact-active-class="font-bold! text-primary!"
        />
      </div>
    </div>

    <div class="bien-glass pointer-events-none absolute inset-0 backdrop-blur-2xl -z-1" />
  </nav>
</template>

<style>
.bien-glass {
  --extended-by: 100px;
  bottom: calc(-1 * var(--extended-by));
  /*   Cut the part of the backdrop that falls outside of <nav /> */
  --cutoff: calc(100% - var(--extended-by));
  mask-image: linear-gradient(
    to bottom,
    black 0,
    black var(--cutoff),
    transparent var(--cutoff)
  );
}
</style>
