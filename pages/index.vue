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
    title: 'Área Cognitiva',
    icon: 'i-mdi:head-heart-outline',
    content:
      'Trabajo sobre los pensamientos y emociones del paciente, para transformar los patrones de pensamiento contraproducentes en maneras de pensar que sean más útiles',
  },
  {
    title: 'Mindful Eating',
    icon: 'i-ph:spiral-fill',
    content:
      'Trabajo sobre técnicas de alimentación consciente, para mejorar la relación con la comida, con un abordaje integral, para reducir el estrés, problemas nutricionales y psicológicos asociados',
  },
]

useServerHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'http://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            'image': 'https://ateneanutricion.com/logo.png',
            'url': 'https://ateneanutricion.com',
            'logo': 'https://ateneanutricion.com/logo.png',
            'name': 'Atenea Nutrición',
            'description': 'Atenea Nutrición brinda servicios de bienestar y salud, somos expertos en nutrición deportiva & clínica, creamos planes de alimentación individualizados, entrenamientos personalizados & test epigenéticos para una nutrición óptima. Nos encontramos en San Luis Potosí SLP. y Matehuala S.L.P',
            'email': 'contacto@ateneanutricion.com',
            'telephone': '+54-44-4315-9190',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Morelos 510',
              'addressLocality': 'San Luis Potosi',
              'addressCountry': 'MX',
              'addressRegion': 'Matehuala',
              'postalCode': '78700',
            },
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': '¿Necesito un plan nutricional?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'La nutrición tiene total influencia en nuestro bienestar & salud de nuestro cuerpo. Existe un sinfín de información sobre una alimentación saludable y cual es la mejor  manera de nutrirse, pero para lograr una salud optima la clave es que sea personalizada, una consulta de nutrición por un nutriólogo especialista te brinda las herramientas necesarias para saber cuales son tus necesidades específicas.',
                },
              },
              {
                '@type': 'Question',
                'name': '¿Cuál es el mejor plan de alimentación?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'El mejor plan de alimentación es el que nos permita realizar cambios dietéticos sostenibles a largo plazo, cada cuerpo es diferente por lo que necesita una nutrición especializada, no necesita protocolos de alimentación estandarizados con las mismas pautas y reglas de alimentación,  si lo que queremos es una nutrición óptima debemos darle un enfoque personalizado con cambios dietéticos y pautas nutricionales que nos brindan un bienestar único.',
                },
              },
            ],
          },
        ],
      }),
    },
  ],
})
useServerSeoMeta({
  title: 'Atenea Nutrición | Nutrición, deporte y genética',
  ogTitle: 'Atenea Nutrición | Nutrición, deporte y genética',
  ogType: 'website',
  ogUrl: 'https://ateneanutricion.com',

  description: 'Atenea Nutrición brinda servicios de bienestar y salud, somos expertos en nutrición deportiva & clínica, creamos planes de alimentación individualizados, entrenamientos personalizados & test epigenéticos para una nutrición óptima. Nos encontramos en San Luis Potosí SLP. y Matehuala S.L.P',
  ogDescription: 'Atenea Nutrición brinda servicios de bienestar y salud, somos expertos en nutrición deportiva & clínica, creamos planes de alimentación individualizados, entrenamientos personalizados & test epigenéticos para una nutrición óptima. Nos encontramos en San Luis Potosí SLP. y Matehuala S.L.P',

  ogImage: '/og-images/index.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://ateneanutricion.com/og-images/index.png',
})
</script>

<template>
  <LotusPage>
    <HeroHeader
      class="text-neutral-200"
      :titles="['Nutrición.', 'Deporte.', 'Salud.']"
    >
      <template #prepend>
        <p class="text-center font-light">
          Nutrición para un rendimiento optimo y
          <span class="text-white font-semibold">bienestar</span>
        </p>
      </template>

      <template #append>
        <div class="flex flex-col gap-10">
          <p class="text-center font-light">
            Sabemos que cada cuerpo es diferente y nos apasiona crear cada plan
            con un enfoque personalizado
          </p>

          <div class="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
            <LotusButton
              label="Saber más"
              to="#CTA"
              variant="link"
              size="lg"
            />

            <GlowCard>
              <LotusButton
                label="Contactanos"
                icon="i-ph:whatsapp-logo"
                size="lg"
                target="_blank"
                to="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20nutricional."
              />
            </GlowCard>
          </div>
        </div>
      </template>
    </HeroHeader>

    <span id="CTA" />
    <!-- Bento grid -->
    <HeroSection>
      <section
        class="grid gap-4 lg:grid-cols-10 md:grid-cols-6 lg:gap-2 lg:-mx-28"
      >
        <!-- NUTRICION -->
        <div class="lg:order-1 lg:row-span-3 md:col-span-2">
          <ShineCard
            group
            blob-color="bg-purple-400"
            class="relative aspect-7/4 overflow-hidden rounded-xl transition-300 md:aspect-7/6 hover:scale-98"
          >
            <NuxtImg
              src="/index/nutricion.jpeg"
              loading="lazy"
              preset="hero"
              fit="cover"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
              alt="Fotografía de verduras, vasos de agua, cinta para medir y pesas"
            />

            <div
              class="absolute bottom-0 left-0 right-0 from-neutral-800 bg-gradient-to-t p-2"
            >
              <p class="text-3xl text-neutral-200 font-bold md:text-2xl">
                Nutrición
              </p>
              <span class="text-sm text-neutral-300 font-light">
                Enfocada en tus objetivos
              </span>
            </div>
          </ShineCard>
        </div>

        <div class="col-span-6 hidden lg:order-2 lg:block">
          <div class="flex justify-center text-center">
            <div
              class="flex items-center gap-1 rounded-xl bg-black p-2 text-sm text-neutral-200 font-semibold"
            >
              <p>¡Comencemos!</p>
            </div>
          </div>
        </div>

        <!-- FRASE -->
        <div class="order-1 lg:order-6 md:order-none md:col-span-2">
          <div
            class="flex items-center justify-center whitespace-nowrap rounded-xl bg-black py-2 text-xl text-neutral-200 lg:aspect-0 md:aspect-7/6"
          >
            ¡Optimiza tu salud!
          </div>
        </div>

        <!-- EPIGENETICA -->
        <div class="lg:order-3 lg:row-span-3 md:col-span-2">
          <ShineCard
            group
            blob-color="bg-indigo-400"
            class="relative aspect-7/4 overflow-hidden rounded-xl transition-300 md:aspect-7/6 hover:scale-98"
          >
            <NuxtImg
              src="/index/epigenetica.jpg"
              loading="lazy"
              preset="hero"
              fit="cover"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
              alt="Fotografía de simulación de científicos revisando un estudio genético"
            />

            <div
              class="absolute left-0 right-0 top-0 from-neutral-800 bg-gradient-to-b p-2"
            >
              <p class="text-3xl text-neutral-200 font-bold md:text-2xl">
                Epigenética
              </p>
              <span class="text-sm text-neutral-300 font-light">
                Enfocada en tus objetivos
              </span>
            </div>
          </ShineCard>
        </div>

        <!-- PSICONUTRICION -->
        <div
          class="lg:order-4 lg:row-span-2 md:col-span-2 lg:col-start-3 md:col-start-2"
        >
          <GlowCard
            group
            disable-glow
            glow-gradient="from-indigo-500 to-purple-500"
            class="aspect-7/3 md:aspect-7/6"
          >
            <div class="grid h-full overflow-hidden bg-neutral-900 text-neutral-200">
              <div class="h-full flex items-center px-4">
                <p class="text-3xl text-neutral-200 font-bold md:text-2xl">
                  Psiconutrición
                </p>
              </div>

              <div
                class="inline-grid w-full content-center gap-2 px-4 text-sm text-neutral-200 font-light"
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
          class="lg:order-5 lg:row-span-2 md:col-span-2 lg:col-start-7 md:col-start-4"
        >
          <div
            group
            class="relative aspect-7/3 overflow-hidden rounded-xl md:aspect-7/6"
          >
            <NuxtImg
              src="/index/entrenamiento.jpeg"
              loading="lazy"
              preset="hero"
              fit="cover"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
              alt="Fotografía de discos de peso para gimnasio"
            />

            <div class="absolute inset-0 grid overflow-hidden text-neutral-200">
              <div class="h-full flex items-center px-4">
                <p class="text-3xl text-neutral-200 font-bold md:text-2xl">
                  Entrenamiento
                </p>
              </div>

              <div
                class="inline-grid grid-cols-2 w-full content-center gap-1 px-4 text-sm text-neutral-200 font-light"
              >
                <div
                  class="w-full inline-flex items-center justify-center rounded-xl bg-black/50 p-2 backdrop-blur"
                >
                  Fuerza
                </div>

                <div
                  class="w-full inline-flex items-center justify-center rounded-xl bg-black/50 p-2 backdrop-blur"
                >
                  Resistencia
                </div>

                <div
                  class="w-full inline-flex items-center justify-center rounded-xl bg-black/50 p-2 backdrop-blur"
                >
                  Fitness
                </div>

                <div
                  class="w-full inline-flex items-center justify-center rounded-xl bg-black/50 p-2 backdrop-blur"
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
        class="w-full flex flex-col content-start justify-center gap-8 md:col-span-2 md:flex-row"
      >
        <div class="w-full py-4 text-sm space-y-2">
          <article
            group
            class="relative aspect-1/1 h-full justify-self-end md:h-64"
          >
            <NuxtImg
              src="/nutricion/people/nutri_0.png"
              loading="lazy"
              preset="hero"
              class="h-full w-full object-contain transition-300 group-hover:scale-110"
              alt="Fotografía de la nutrióloga Yetlanetzi Portillo"
            />

            <div class="absolute bottom-2 left-2">
              <div
                class="flex items-center gap-2 rounded-full bg-black/70 py-2 pl-4 pr-12 backdrop-blur"
              >
                <div class="h-12 w-12 overflow-hidden rounded-full">
                  <NuxtImg
                    src="/nutricion/people/nutri_0.png"
                    loading="lazy"
                    preset="avatar"
                    width="60"
                    height="60"
                    class="w-full object-cover"
                    alt=""
                  />
                </div>

                <div>
                  <p class="text-xs text-neutral-200 font-bold">
                    Nutriologa
                  </p>
                  <p class="text-xs text-gray-400">
                    Yetlanetzi Portillo
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="flex flex-col justify-center gap-4 text-neutral-300">
          <p>
            Mi nombre es
            <span class="text-[rgb(177_191_146)] font-black">Yetlanetzi</span>
            y quiero ayudarte a superar tus metas, nuestro objetivo principal
            será optimizar tu salud, utilizando la mejor arma que es la
            Nutrición de excelencia y calidad.
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
              class="border-neutral-400 text-neutral-400"
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
        <div class="overflow-hidden text-center">
          <p class="text-4xl text-[rgb(177_191_146)] font-black md:text-5xl">
            Psiconutrición
          </p>

          <div class="overflow-x-scroll overflow-y-hidden p-4 scrollbar-hide">
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
                class="border-neutral-400 text-neutral-400"
              >
                {{ content }}
              </Badge>
            </div>
          </div>

          <span class="text-neutral-400">Áreas de abordaje</span>
        </div>

        <div class="flex flex-wrap justify-center">
          <div
            v-for="({ title, icon, content }, i) of psiconutricionAreas"
            :key="i"
            class="w-full py-3 md:w-1/3 md:px-3"
          >
            <AteneaAccordion>
              <template #title>
                {{ title }}
              </template>
              <template #icon>
                <UnoIcon
                  :class="icon"
                  class="h-6 w-6 bg-purple-500"
                />
              </template>

              <p class="text-neutral-400">
                {{ content }}
              </p>
            </AteneaAccordion>
          </div>
        </div>
      </div>
    </HeroSection>
  </LotusPage>
</template>
