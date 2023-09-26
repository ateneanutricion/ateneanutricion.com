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
  <div class="space-y-12 px-4">
    <!-- 1er -->
    <header class="grid gap-4 md:grid-cols-2">
      <BlobCard>
        <NuxtImg
          src="/index/header.png"
          loading="lazy"
          preset="hero"
          class="h-full w-full object-contain transition-300 group-hover:scale-110"
        />

        <template #footer>
          <div
            class="flex items-center gap-2 py-2 pl-4 pr-12 bg-gray-100/70 backdrop-blur rounded-full shadow-xl border"
          >
            <div
              class="h-12 w-12 rounded-full overflow-hidden shadow-md border border-white"
            >
              <NuxtImg
                src="/index/header.png"
                loading="lazy"
                preset="avatar"
                width="60"
                height="60"
                class="object-cover w-full"
              />
            </div>

            <div>
              <p class="text-xs font-bold">Nutriologa</p>
              <p class="text-xs text-gray-500">Yetlanetzi Portillo</p>
            </div>
          </div>
        </template>
      </BlobCard>

      <article class="md:order-first grid content-center gap-4">
        <div class="font-semibold">
          <span class="text-[2.8rem]">
            ¡El Movimiento es
            <span class="text-5xl text-teal-400">Fortaleza!</span>
          </span>
        </div>

        <p>
          Mi nombre es Mitzi y quiero ayudarte a superar tus metas, nuestro
          objetivo principal será optimizar tu salud, utilizando la mejor arma
          que es la Nutrición de excelencia y calidad.
        </p>

        <div class="flex flex-wrap gap-2">
          <Badge
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
          </Badge>
        </div>
      </article>
    </header>

    <!-- GRID -->
    <section
      class="grid gap-4 lg:gap-2 md:grid-cols-6 lg:grid-cols-10 lg:-mx-28"
    >
      <!-- NUTRICION -->
      <div class="md:col-span-2 lg:row-span-3 lg:order-1">
        <ShineCard
          group
          blob-color="bg-purple-400"
          class="aspect-7/4 md:aspect-7/6 relative rounded-xl overflow-hidden transition-300 hover:scale-98"
        >
          <NuxtImg
            src="/index/nutricion.jpeg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="object-cover w-full h-full transition-300 group-hover:scale-110"
          />

          <div
            class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-neutral-800"
          >
            <p class="text-3xl md:text-2xl font-bold text-neutral-200">
              Nutrición
            </p>
            <span class="font-light text-sm text-neutral-300">
              Enfocada en tus objetivos
            </span>
          </div>
        </ShineCard>
      </div>

      <div class="hidden lg:block col-span-6 lg:order-2">
        <div class="text-center flex justify-center">
          <div
            class="bg-black rounded-xl text-neutral-200 p-2 flex items-center gap-1 text-sm font-semibold"
          >
            <p>¡Comencemos!</p>
          </div>
        </div>
      </div>

      <!-- FRASE -->
      <div class="md:col-span-2 order-1 md:order-none lg:order-6">
        <div
          class="md:aspect-7/6 lg:aspect-0 bg-black text-neutral-200 rounded-xl text-xl py-2 flex justify-center items-center whitespace-nowrap"
        >
          ¡Optimiza tu salud!
        </div>
      </div>

      <!-- EPIGENETICA -->
      <div class="md:col-span-2 lg:order-3 lg:row-span-3">
        <ShineCard
          group
          blob-color="bg-indigo-400"
          class="aspect-7/4 md:aspect-7/6 relative rounded-xl overflow-hidden transition-300 hover:scale-98"
        >
          <NuxtImg
            src="/index/epigenetica.jpeg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="object-cover w-full h-full transition-300 group-hover:scale-110"
          />

          <div
            class="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-neutral-800"
          >
            <p class="text-3xl md:text-2xl font-bold text-neutral-200">
              Epigenetica
            </p>
            <span class="font-light text-sm text-neutral-300">
              Enfocada en tus objetivos
            </span>
          </div>
        </ShineCard>
      </div>

      <!-- PSICONUTRICION -->
      <div
        class="md:col-span-2 md:col-start-2 lg:col-start-3 lg:row-span-2 lg:order-4"
      >
        <div
          group
          class="aspect-7/3 md:aspect-7/6 relative rounded-xl overflow-hidden transition-300 hover:scale-98"
        >
          <BlobCard fill-class="fill-purple-400" />

          <div
            class="absolute top-0 left-0 right-0 bottom-0 grid rounded-xl overflow-hidden bg-white/50 backdrop-blur text-neutral-600 border"
          >
            <div class="flex h-full items-center px-4">
              <p class="text-3xl md:text-2xl font-bold text-neutral-600">
                Psiconutrición
              </p>
            </div>

            <div
              class="w-full px-4 bg-gradient-to-r from-indigo-500 to-purple font-light text-sm text-neutral-200 inline-grid content-center gap-2"
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

      <!-- ENTRENAMIENTO PERSONALIZADO -->
      <div
        class="md:col-start-4 md:col-span-2 lg:col-start-7 lg:row-span-2 lg:order-5"
      >
        <div
          group
          class="aspect-7/3 md:aspect-7/6 relative rounded-xl overflow-hidden transition-300 hover:scale-98"
        >
          <NuxtImg
            src="/index/entrenamiento.jpeg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="object-cover w-full transition-300 group-hover:scale-110"
          />

          <div class="absolute top-0 left-0 right-0 p-4 h-full grid gap-2">
            <p class="text-3xl md:text-2xl font-bold text-neutral-200">
              Entrenamiento
            </p>

            <div
              class="w-full font-light text-sm text-neutral-200 inline-grid content-center gap-2 grid-cols-2"
            >
              <div class="text-center bg-black/30 backdrop-blur p-2 rounded-xl">
                <p>Fuerza</p>
              </div>
              <div class="text-center bg-black/30 backdrop-blur p-2 rounded-xl">
                <p>Resistencia</p>
              </div>
              <div class="text-center bg-black/30 backdrop-blur p-2 rounded-xl">
                <p>Fitness</p>
              </div>
              <div class="text-center bg-black/30 backdrop-blur p-2 rounded-xl">
                <p>Potencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PSICONUTRICIÓN -->
    <section class="grid gap-4">
      <div class="text-center overflow-hidden">
        <p class="text-3xl font-semibold text-gray-800">Psiconutrición</p>

        <div class="p-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
          <div class="flex gap-2">
            <Badge
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
            </Badge>
          </div>
        </div>

        <span class="text-gray-500">Áreas de abordaje</span>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
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
      </div>
    </section>
  </div>
</template>
