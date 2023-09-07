<template>
  <AteneaContainer>
    <div class="col-span-2 p-4 rounded-3xl grid-rows-2">
      <div class="grid auto-rows-[192px] grid-cols-4 gap-4">
        <!-- 1 -->
        <div class="row-span-2 col-span-2 rounded-xl bg-[rgb(75_167_139)] p-4">
          <div class="h-full flex flex-col justify-between">
            <h3 class="font-black text-6xl">Estudios</h3>

            <div class="flex gap-4 items-end justify-start tracking-tighter">
              <h3
                class="font-black text-5xl"
                style="writing-mode: vertical-lr"
              >
                epigenéticos
              </h3>
              <p class="font-medium text-base">
                Mi nombre es Mitzi y quiero ayudarte a superar tus metas, nuestro objetivo principal será optimizar tu
                salud, utilizando la mejor arma que es la Nutrición de excelencia y calidad
              </p>
            </div>
          </div>
        </div>

        <!-- Nutricion -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl bg-[rgb(169_173_217)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon class="i-mdi:fruit-cherries h-6 w-6 group-hover:animate-wobble" />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Vitaminas</h3>
              <p class="text-xs">Enfocada en tus objetivos</p>
            </div>

            <div class="flex justify-between">
              <AteneaTag class="bg-black text-white border-0!">Pick</AteneaTag>
              <AteneaTag>Pick</AteneaTag>
            </div>
          </div>
        </div>

        <div class="row-span-1 col-span-1 rounded-xl bg-[rgb(200_233_94)] p-4">
          <div class="h-full flex flex-col justify-between">
            <UnoIcon class="i-mdi:head-snowflake-outline h-6 w-6 group-hover:animate-wobble" />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Antioxidantes</h3>
              <p class="text-xs">Coaching psiconutricional para trabajar tu motivación y metas</p>
            </div>

            <AteneaTag class="bg-black text-white border-0!">Pick</AteneaTag>
          </div>
        </div>

        <div
          group
          class="row-span-1 col-span-1 rounded-xl bg-[rgb(169_173_217)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon class="i-mdi:fruit-cherries h-6 w-6 group-hover:animate-wobble" />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Minerales</h3>
              <p class="text-xs">Enfocada en tus objetivos</p>
            </div>

            <div class="flex justify-between">
              <AteneaTag class="bg-black text-white border-0!">Pick</AteneaTag>
              <AteneaTag>Pick</AteneaTag>
            </div>
          </div>
        </div>

        <!-- CONTACTO -->
        <div class="row-span-2 col-span-1 rounded-xl bg-[rgb(33_50_216)] overflow-hidden">
          <div class="relative h-full flex flex-col justify-end">
            <img
              src="@/assets/workout.jpg"
              class="h-full w-full object-cover transition transition-duration-300 hover:scale-110"
            />

            <div class="absolute bottom-2 left-2 text-white tracking-tighter">
              <h3 class="font-black text-3xl">CONTACTO</h3>
              <p class="text-xs">+52 444 123 456</p>
            </div>
          </div>
        </div>

        <!-- EPIGENÉTICA -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl bg-[rgb(251_252_211)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon class="i-ph:dna-duotone h-6 w-6 group-hover:animate-wobble" />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Interferencias</h3>
              <p class="text-xs">Coaching psiconutricional para trabajar tu motivación</p>
            </div>
          </div>
        </div>
        <!-- ENTRENAMIENTO -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-[rgb(252_235_211)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon class="i-mdi:weight-lifter h-6 w-6 group-hover:animate-wobble" />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Ácidos Grasos</h3>
              <p class="text-xs">Programa de entrenamiento fisico</p>
            </div>

            <div class="flex justify-between">
              <AteneaTag class="bg-black text-white border-0!">Pick</AteneaTag>
              <AteneaTag>Pick</AteneaTag>
            </div>
          </div>
        </div>
        <!-- PSICONUTRICIÓN -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-[rgb(247_211_207)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon class="i-mdi:head-snowflake-outline h-6 w-6 group-hover:animate-wobble" />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Aminoácidos</h3>
              <p class="text-xs">Coaching psiconutricional para trabajar tu motivación y metas</p>
            </div>

            <div class="flex justify-between">
              <AteneaTag class="bg-black text-white border-0!">Pick</AteneaTag>
              <AteneaTag>Pick</AteneaTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AteneaContainer>
</template>
