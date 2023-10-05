<script lang="ts" setup>
useServerSeoMeta({
  title: 'Atenea Nutrición | Nosotros',
  ogTitle: 'Atenea Nutrición | Nosotros',
  ogType: 'website',
  ogUrl: 'https://ateneanutricion.com/nosotros',

  description:
    'Sabemos que para alcanzar una salud física y mental para un óptimo bienestar, debemos tener un enfoque integral, nuestro objetivo es brindar las herramientas que impulsen un cambio de hábitos para alcanzar objetivos individuales, enfocados en una Nutrición de calidad, actividad física y bienestar emocional',
  ogDescription:
    'Sabemos que para alcanzar una salud física y mental para un óptimo bienestar, debemos tener un enfoque integral, nuestro objetivo es brindar las herramientas que impulsen un cambio de hábitos para alcanzar objetivos individuales, enfocados en una Nutrición de calidad, actividad física y bienestar emocional',

  ogImage: '/og-images/nosotros.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="space-y-16">
    <HeroHeader :titles="['Conoce', 'quienes', 'Somos.']">
      <template #append>
        <div class="flex flex-col gap-4 md:text-xl">
          <NuxtImg
            src="/atenea_logo.png"
            loading="lazy"
            preset="avatar"
            width="100"
            height="100"
            class="self-center"
            alt="Atenea Logo"
          />
          <p class="font-light text-neutral-400 text-center mb-16">
            Sabemos que para alcanzar una salud física y mental para un óptimo
            bienestar, debemos tener un enfoque integral, nuestro objetivo es
            brindar las herramientas que impulsen un cambio de hábitos para
            alcanzar objetivos individuales, enfocados en una Nutrición de
            calidad, actividad física y bienestar emocional
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
                class="rounded-xl font-medium h-12 w-full px-4 text-neutral-200 flex gap-2 justify-center items-center"
              >
                <UnoIcon class="i-ph:whatsapp-logo w-5 h-5" />
                Contactanos
              </a>
            </GlowCard>
          </div>
        </div>
      </template>
    </HeroHeader>

    <span id="CTA" />
    <!-- FAQs -->
    <HeroSection>
      <header class="p-4 text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-black text-neutral-200">
          Preguntas <span class="text-purple-400">frecuentes</span>
        </h2>
      </header>

      <div class="bg-neutral-800 p-4 rounded-xl grid md:grid-cols-2">
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">
              ¿Necesito un
            </div>
            <div class="font-black text-2xl text-orange-400">
              plan nutricional?
            </div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            La nutrición tiene total influencia en nuestro bienestar & salud de
            nuestro cuerpo. Existe un sinfín de información sobre una
            alimentación saludable y cual es la mejor manera de nutrirse, pero
            para lograr una salud optima la clave es que sea personalizada, una
            consulta de nutrición por un nutriólogo especialista te brinda las
            herramientas necesarias para saber cuales son tus necesidades
            específicas.
          </p>
        </article>

        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">
              ¿Cuál es el mejor
            </div>
            <div class="font-black text-2xl text-emerald-400">
              plan de alimentación?
            </div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            El mejor plan de alimentación es el que nos permita realizar cambios
            dietéticos sostenibles a largo plazo, cada cuerpo es diferente por
            lo que necesita una nutrición especializada, no necesita protocolos
            de alimentación estandarizados con las mismas pautas y reglas de
            alimentación, si lo que queremos es una nutrición óptima debemos
            darle un enfoque personalizado con cambios dietéticos y pautas
            nutricionales que nos brindan un bienestar único.
          </p>
        </article>

        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">
              ¿Qué es un estudio
            </div>
            <div class="font-black text-2xl text-sky-400">
              epigenético nutricional?
            </div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            Es un test que analiza biomarcadores celulares, que nos brinda
            información sobre cómo la influencia del medio ambiente, entorno y
            estilo de vida, puede afectar la expresión de nuestros genes. Nos
            ayuda a saber qué alimentos debemos comer o reducir para cubrir
            nuestras necesidades nutricionales de una manera más específica y
            personalizada.
          </p>
        </article>

        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">
              ¿Qué hace un
            </div>
            <div class="font-black text-2xl text-red-400">
              nutriologo deportivo?
            </div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            Un nutriólogo deportivo brinda las herramientas adecuadas para
            impulsar a un atleta de alto rendimiento, amateur o recreativo para
            que alcance su rendimiento máximo, de una manera segura y efectiva.
            creando un plan de nutrición personalizado
          </p>
        </article>
      </div>
    </HeroSection>
  </div>
</template>
