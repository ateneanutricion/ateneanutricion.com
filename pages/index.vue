<script lang="ts" setup>
interface CardContent {
  title: string
  icon: string
  content: string
  blobColor?: string
}
const psiconutricionAreas: CardContent[] = [
  {
    title: 'Diagnostico',
    icon: 'i-ph:heartbeat',
    content:
      'Valoración del paciente para identificar factores predisponentes, que deterioran el estado de salud',
  },
  {
    title: 'Área Conductual',
    icon: 'i-mdi:reminder',
    content:
      'Trabajo sobre los comportamientos que mantienen el problema, sobre aspectos psicológicos e ingesta de alimentos',
  },
  {
    title: 'Área Emocional',
    icon: 'i-ph:brain-duotone',
    content:
      'Trabajo sobre las emociones que pueden ser detonantes en ciertos comportamientos relacionados a algún TCA',
  },
  {
    title: 'Área Congnitiva',
    icon: 'i-mdi:head-heart-outline',
    content:
      'Trabajo sobre los pensamientos y emociones del paciente, para transformar los patrones de pensamiento contraproducentes en maneras de pensar que sean más útiles',
  },
  {
    title: 'Mindfull Eating',
    icon: 'i-ph:spiral-fill',
    content:
      'Trabajo sobre técnicas de alimentación consciente, para mejorar la relación con la comida, con un abordaje integral, para reducir el estrés, problemas nutricionales y psicológicos asociados',
  },
]
</script>

<template>
  <div class="space-y-4">
    <!-- 1er -->
    <section class="grid gap-4 p-4 sm:grid-cols-2">
      <GridCard class="grid content-center">
        <div class="relative rounded-xl">
          <svg
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            class="h-full fill-teal"
          >
            <path
              d="M369,331Q345,422,256.5,393.5Q168,365,123,302.5Q78,240,116,166Q154,92,247,79.5Q340,67,366.5,153.5Q393,240,369,331Z"
            />
          </svg>

          <div class="absolute top-0 pt-4 h-full w-full overflow-hidden">
            <img
              src="@/assets/images/index/header.png"
              class="h-full w-full object-contain transition-300 group-hover:scale-110"
            />
          </div>

          <div class="absolute top-0 right-0">
            <span class="block h-12 w-12 p-2 bg-[#4FE0B6] rounded-full"></span>
          </div>

          <div class="absolute left-4 bottom-4">
            <div
              class="flex items-center gap-2 py-2 pl-4 pr-12 bg-gray-100/70 backdrop-blur rounded-full shadow-xl border"
            >
              <div
                class="h-12 w-12 rounded-full overflow-hidden shadow-md border border-white"
              >
                <img
                  src="@/assets/images/index/header.png"
                  class="object-center object-cover"
                />
              </div>

              <div>
                <p class="text-xs font-bold">Nutriologa</p>
                <p class="text-xs text-gray-500">Yetlanetzi Portillo</p>
              </div>
            </div>
          </div>
        </div>
      </GridCard>

      <GridCard class="sm:order-first mt-4 space-y-4">
        <div class="font-semibold">
          <span class="text-5xl">¡El Movimiento</span>
          <br />
          <span class="text-5xl">
            es
            <span class="text-6xl text-[#4FE0B6]">Fortaleza!</span>
          </span>
        </div>

        <p>
          Mi nombre es Mitzi y quiero ayudarte a superar tus metas, nuestro
          objetivo principal será optimizar tu salud, utilizando la mejor arma
          que es la Nutrición de excelencia y calidad.
        </p>

        <div class="flex flex-wrap gap-2">
          <AteneaTag
            v-for="(content, i) of [
              'Nutrición',
              'Epigenética',
              'Deporte',
              'Fitness',
              'Entrenamiento',
              'Salud',
            ]"
            :key="i"
          >
            {{ content }}
          </AteneaTag>
        </div>
      </GridCard>
    </section>

    <!-- GRID -->
    <section
      class="grid justify-center gap-4 md:gap-2 p-4 md:px-0 md:-mx-6 auto-rows-[140px] sm:grid-rows-2 sm:grid-cols-6 md:grid-rows-[90px_40px_90px] md:grid-cols-10"
    >
      <!-- NUTRICION -->
      <GridCard class="sm:col-span-2 md:row-span-3 md:order-1">
        <AteneaBlobCard
          class="h-full"
          blob-color="bg-purple"
        >
          <div class="relative h-full">
            <div class="absolute top-4 left-4 text-neutral-200 z-1">
              <p class="text-5xl md:text-3xl font-semibold">Nutrición</p>
              <p class="text-sm md:text-xs text-neutral-300">
                Enfocada en tus objetivos
              </p>
            </div>

            <img
              src="@/assets/images/index/nutricion.jpeg"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
            />
          </div>
        </AteneaBlobCard>
      </GridCard>

      <div class="hidden md:block col-span-6 md:order-2">
        <div class="text-center flex justify-center">
          <div
            class="bg-black rounded-xl text-neutral-200 p-2 flex items-center gap-1 text-sm font-semibold"
          >
            <p>¡Comencemos!</p>
          </div>
        </div>
      </div>

      <!-- FRASE -->
      <GridCard class="sm:col-span-2 order-1 sm:order-none md:order-6">
        <div
          class="bg-teal-300 h-full rounded-xl text-2xl font-black grid content-center justify-center text-center"
        >
          <p>¡Optimiza tu salud!</p>
        </div>
      </GridCard>

      <!-- EPIGENETICA -->
      <GridCard class="sm:col-span-2 md:order-3 md:row-span-3">
        <AteneaBlobCard
          class="h-full"
          blob-color="bg-indigo-500"
        >
          <div class="relative h-full">
            <div class="absolute top-4 left-4 text-neutral-200 z-1">
              <p class="text-5xl md:text-3xl font-semibold md:vertical-lr">
                Epigenetica
              </p>
              <p class="text-sm md:text-xs text-neutral-300">
                Enfocada en tus objetivos
              </p>
            </div>

            <div
              class="absolute z-1 bottom-0 w-full text-neutral-200 p-1 text-sm font-semibold"
            >
              <div
                class="bg-white/70 w-1/2 mx-auto backdrop-blur rounded-xl flex items-center gap-1 p-1"
              >
                <div class="bg-black rounded-xl px-2 py-1">
                  <UnoIcon class="i-mdi:weight-lifter h-4 w-4" />
                </div>
                <p class="text-black">Personalizado</p>
              </div>
            </div>

            <img
              src="@/assets/images/index/epigenetica.jpeg"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
            />
          </div>
        </AteneaBlobCard>
      </GridCard>

      <!-- PSICONUTRICION -->
      <GridCard
        class="sm:col-span-2 sm:col-start-2 md:col-start-3 md:row-span-2 md:order-4"
      >
        <div class="relative h-full">
          <svg
            id="10015.io"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="absolute top-0 object-cover h-full w-full fill-purple-400"
          >
            <path
              d="M421.5,311.5Q410,383,343.5,417Q277,451,224,405.5Q171,360,105.5,336.5Q40,313,29.5,236Q19,159,89.5,130Q160,101,221,52.5Q282,4,317,75Q352,146,392.5,193Q433,240,421.5,311.5Z"
            />
          </svg>

          <div
            class="h-full bg-white/50 backdrop-blur border shadow-xl rounded-xl overflow-hidden"
          >
            <div class="h-full flex flex-col gap-2">
              <div class="h-full grid content-center text-center">
                <p
                  class="font-light text-3xl sm:text-2xl md:text-xl text-neutral-700"
                >
                  Psiconutrición
                </p>
              </div>

              <div
                class="h-full w-full px-3 bg-gradient-to-r from-indigo-500 to-purple text-neutral-200 grid gap-2 content-center text-sm font-light"
              >
                <div class="w-full flex items-center gap-2">
                  <UnoIcon class="i-ph:brain-duotone h-6 w-6" />
                  <p>Emociones</p>
                </div>

                <div class="w-full flex items-center gap-2">
                  <UnoIcon class="i-ph:spiral-fill h-6 w-6" />
                  <p>Equilibrio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridCard>

      <!-- ENTRENAMIENTO PERSONALIZADO -->
      <GridCard
        class="sm:col-start-4 sm:col-span-2 md:col-start-7 md:row-span-2 md:order-5"
      >
        <div class="relative h-full rounded-xl overflow-hidden">
          <img
            src="@/assets/images/index/entrenamiento.jpeg"
            class="absolute h-full w-full object-cover -z-1"
          />

          <div class="h-full">
            <div class="h-full flex flex-col gap-2">
              <div class="h-full grid content-center text-center">
                <p
                  class="font-light text-3xl sm:text-2xl md:text-xl text-neutral-200"
                >
                  Entrenamiento
                </p>
              </div>

              <div
                class="h-full w-full p-1 text-neutral-200 grid grid-cols-2 gap-1 content-center text-sm md:text-xs font-light"
              >
                <div
                  class="text-center bg-black/30 backdrop-blur p-2 rounded-xl"
                >
                  <p>Fuerza</p>
                </div>
                <div
                  class="text-center bg-black/30 backdrop-blur p-2 rounded-xl"
                >
                  <p>Resistencia</p>
                </div>
                <div
                  class="text-center bg-black/30 backdrop-blur p-2 rounded-xl"
                >
                  <p>Fitness</p>
                </div>
                <div
                  class="text-center bg-black/30 backdrop-blur p-2 rounded-xl"
                >
                  <p>Potencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridCard>
    </section>

    <!-- PSICONUTRICIÓN -->
    <GridContainer>
      <GridCard class="text-center overflow-hidden flex-col">
        <p class="text-3xl font-semibold text-gray-800">Psiconutrición</p>

        <div
          class="px-4 py-2 overflow-x-scroll overflow-y-hidden scrollbar-hide"
        >
          <div class="flex gap-2">
            <AteneaTag
              v-for="(content, i) of [
                'TCA',
                'TCANE',
                'Bulimia',
                'Anorexia',
                'Obesidad',
                'Ortorexia',
                'Ansiedad',
                'Vigorexia',
                'Atracón',
                'Comedor nocturno',
                'Restricción',
              ]"
              :key="i"
            >
              {{ content }}
            </AteneaTag>
          </div>
        </div>

        <span class="text-gray-500">Áreas de abordaje</span>
      </GridCard>

      <GridContainer
        :cols="{ sm: 2, md: 3 }"
        class="p-0! gap-6!"
      >
        <AteneaAccordion
          v-for="({ title, icon, content }, i) of psiconutricionAreas"
          :key="i"
        >
          <template #title> {{ title }} </template>
          <template #icon>
            <UnoIcon
              :class="icon"
              class="bg-purple-500 h-6 w-6"
            />
          </template>

          <p>{{ content }}</p>
        </AteneaAccordion>
      </GridContainer>
    </GridContainer>
  </div>
</template>
