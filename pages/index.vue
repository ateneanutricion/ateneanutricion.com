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
  <div class="space-y-16">
    <HeroHeader :titles="['Movimiento', 'es', 'Fortaleza.']">
      <template #preppend>
        <p class="font-light text-neutral-400 text-center">
          Haz de la nutrición tu ventaja
          <span class="text-white font-semibold">competitiva</span>
        </p>
      </template>

      <template #append>
        <div class="flex flex-col gap-4">
          <p class="font-light text-neutral-400 text-center mb-16">
            Sabemos que cada cuerpo es diferente y nos apasiona crear cada plan
            con un enfoque personalizado
          </p>

          <div class="flex flex-col md:flex-row gap-4 w-full max-w-100 mx-auto">
            <a
              href="#CTA"
              role="button"
              class="block rounded-xl bg-white text-black font-medium h-12 w-full px-4"
            >
              <div class="h-full flex gap-2 justify-center items-center">
                Saber más
              </div>
            </a>

            <GlowCard glow-gradient="from-purple-500 to-pink-500">
              <a
                href="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20nutricional."
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                class="block rounded-xl font-medium h-12 w-full px-4 text-neutral-200"
              >
                <div class="h-full flex gap-2 justify-center items-center">
                  <UnoIcon class="i-ph:whatsapp-logo w-5 h-5" />
                  Contactanos
                </div>
              </a>
            </GlowCard>
          </div>
        </div>
      </template>
    </HeroHeader>

    <span id="CTA"></span>
    <!-- Bento grid -->
    <HeroSection>
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
              src="/index/epigenetica.jpg"
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
          <GlowCard
            group
            disable-glow
            glow-gradient="from-indigo-500 to-purple-500"
            class="aspect-7/3 md:aspect-7/6"
          >
            <div class="h-full grid overflow-hidden text-neutral-200">
              <div class="flex h-full items-center px-4">
                <p class="text-3xl md:text-2xl font-bold text-neutral-200">
                  Psiconutrición
                </p>
              </div>

              <div
                class="w-full px-4 font-light text-sm text-neutral-200 inline-grid content-center gap-2"
              >
                <div
                  class="w-full flex items-center gap-2 rounded-xl bg-neutral-800 p-2"
                >
                  <UnoIcon class="i-ph:brain-duotone h-4 w-4" />
                  <p>Emociones</p>
                </div>

                <div
                  class="w-full flex items-center gap-2 rounded-xl bg-neutral-800 p-2"
                >
                  <UnoIcon class="i-ph:spiral-fill h-4 w-4" />
                  <p>Equilibrio</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        <!-- ENTRENAMIENTO -->
        <div
          class="md:col-start-4 md:col-span-2 lg:col-start-7 lg:row-span-2 lg:order-5"
        >
          <div
            group
            class="relative aspect-7/3 md:aspect-7/6 rounded-xl overflow-hidden"
          >
            <NuxtImg
              src="/index/entrenamiento.jpeg"
              loading="lazy"
              preset="hero"
              fit="cover"
              class="object-cover h-full w-full transition-300 group-hover:scale-110"
            />

            <div class="absolute inset-0 grid overflow-hidden text-neutral-200">
              <div class="flex h-full items-center px-4">
                <p class="text-3xl md:text-2xl font-bold text-neutral-200">
                  Entrenamiento
                </p>
              </div>

              <div
                class="w-full px-4 font-light text-sm text-neutral-200 inline-grid grid-cols-2 content-center gap-1"
              >
                <div
                  class="rounded-xl bg-black/50 p-2 backdrop-blur w-full inline-flex items-center justify-center"
                >
                  Fuerza
                </div>

                <div
                  class="rounded-xl bg-black/50 p-2 backdrop-blur w-full inline-flex items-center justify-center"
                >
                  Resistencia
                </div>

                <div
                  class="rounded-xl bg-black/50 p-2 backdrop-blur w-full inline-flex items-center justify-center"
                >
                  Fitness
                </div>

                <div
                  class="rounded-xl bg-black/50 p-2 backdrop-blur w-full inline-flex items-center justify-center"
                >
                  Potencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroSection>

    <!-- Presentation -->
    <HeroSection>
      <div
        class="w-full flex flex-col md:flex-row justify-center gap-8 content-start md:col-span-2"
      >
        <div class="w-full space-y-2 text-sm py-4">
          <article
            group
            class="aspect-1/1 h-full md:h-64 relative justify-self-end"
          >
            <NuxtImg
              src="/nutricion/people/nutri_0.png"
              loading="lazy"
              preset="hero"
              class="h-full w-full object-contain transition-300 group-hover:scale-110"
            />

            <div class="absolute bottom-2 left-2">
              <div
                class="flex items-center gap-2 py-2 pl-4 pr-12 bg-black/70 backdrop-blur rounded-full"
              >
                <div class="h-12 w-12 rounded-full overflow-hidden">
                  <NuxtImg
                    src="/nutricion/people/nutri_0.png"
                    loading="lazy"
                    preset="avatar"
                    width="50"
                    height="60"
                    class="object-cover w-full"
                  />
                </div>

                <div>
                  <p class="text-xs font-bold text-neutral-200">Nutriologa</p>
                  <p class="text-xs text-gray-400">Yetlanetzi Portillo</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="flex flex-col gap-4 justify-center text-neutral-300">
          <p>
            Mi nombre es
            <span class="text-[rgb(177_191_146)] font-black">Yetlanetzi</span>
            y quiero ayudarte a superar tus metas, nuestro objetivo principal
            será optimizar tu salud, utilizando la mejor arma que es la
            Nutrición de excelencia y calidad.
          </p>
          <div class="flex flex-wrap gap-2">
            <Badge
              class="text-neutral-400 border-neutral-400"
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
        </div>
      </div>
    </HeroSection>

    <!-- PSICONUTRICIÓN -->
    <HeroSection>
      <div class="grid gap-4">
        <div class="text-center overflow-hidden">
          <p class="text-4xl md:text-5xl font-black text-[rgb(177_191_146)]">
            Psiconutrición
          </p>

          <div class="p-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
            <div class="flex gap-2">
              <Badge
                class="text-neutral-400 border-neutral-400"
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

          <span class="text-neutral-400">Áreas de abordaje</span>
        </div>

        <div class="flex flex-wrap justify-center">
          <div
            class="w-full md:w-1/3 py-3 md:px-3"
            v-for="({ title, icon, content }, i) of psiconutricionAreas"
            :key="i"
          >
            <AteneaAccordion>
              <template #title> {{ title }} </template>
              <template #icon>
                <UnoIcon
                  :class="icon"
                  class="bg-purple-500 h-6 w-6"
                />
              </template>

              <p class="text-neutral-400">{{ content }}</p>
            </AteneaAccordion>
          </div>
        </div>
      </div>
    </HeroSection>
  </div>
</template>
