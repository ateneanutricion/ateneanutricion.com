<script lang="ts" setup>
useServerSeoMeta({
  title: 'Atenea Nutrición | Nutrición',
  ogTitle: 'Atenea Nutrición | Nutrición',
  ogType: 'website',
  ogUrl: 'https://ateneanutricion.com/nutricion',

  description:
    'Asesoramiento nutricional personalizado para alcanzar tus objetivos de rendimiento deportivo, salud y composición corporal',
  ogDescription:
    'Asesoramiento nutricional personalizado para alcanzar tus objetivos de rendimiento deportivo, salud y composición corporal',

  ogImage: '/og-images/nutricion.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="space-y-16">
    <HeroHeader :titles="['Tu', 'Mejor', 'Versión.']">
      <template #prepend>
        <p class="font-light text-neutral-400 text-center md:text-xl">
          Haz de la nutrición tu ventaja
          <span class="text-white font-semibold">competitiva</span>
        </p>
      </template>

      <template #append>
        <div class="flex flex-col gap-4 md:text-xl">
          <p class="font-light text-neutral-400 text-center mb-10">
            Asesoramiento nutricional personalizado para alcanzar tus objetivos
            de rendimiento deportivo, salud y composición corporal
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

    <!-- Images grid -->
    <HeroSection>
      <div class="grid gap-4 md:grid-cols-3 md:h-64 justify-items-center">
        <article
          group
          class="aspect-7/5 md:aspect-1/1 h-full relative rounded-xl overflow-hidden transition-300 hover:scale-98 md:justify-self-end"
        >
          <NuxtImg
            src="/nutricion/fitness.jpeg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="object-cover w-full transition-300 group-hover:scale-110"
            alt="Fotografía pesa y botella de agua sobre una banca de ejercicio dentro de un gimnasio"
          />

          <div class="absolute top-0 right-0 p-2">
            <div class="bg-[#4F80E2] rounded-xl p-2 text-neutral-200">
              <UnoIcon class="i-mdi:arm-flex-outline" />
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-neutral-800"
          >
            <p class="text-3xl md:text-2xl font-bold text-neutral-200">
              Composición corporal & fitness
            </p>
          </div>
        </article>

        <article
          group
          class="aspect-7/5 md:aspect-1/1 h-full relative rounded-xl overflow-hidden transition-300 hover:scale-98"
        >
          <NuxtImg
            src="/nutricion/rendimiento.jpeg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="object-cover w-full transition-300 group-hover:scale-110"
            alt="Fotografía de corredores en la linea de salida"
          />

          <div class="absolute top-0 right-0 p-2">
            <div class="bg-[#4F80E2] rounded-xl p-2 text-neutral-200">
              <UnoIcon class="i-mdi:weight-lifter" />
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-neutral-800"
          >
            <p class="text-3xl md:text-2xl font-bold text-neutral-200">
              Alto rendimiento & deporte
            </p>
          </div>
        </article>

        <article
          group
          class="aspect-7/5 md:aspect-1/1 h-full relative rounded-xl overflow-hidden transition-300 hover:scale-98 md:justify-self-start"
        >
          <NuxtImg
            src="/nutricion/clinica.jpg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="object-cover w-full transition-300 group-hover:scale-110"
            alt="Fotografía de diversos grupos alimenticios y una mano sosteniendo una manzana"
          />

          <div class="absolute top-0 right-0 p-2">
            <div class="bg-[#4F80E2] rounded-xl p-2 text-neutral-200">
              <UnoIcon class="i-mdi:fruit-cherries" />
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-neutral-800"
          >
            <p class="text-3xl md:text-2xl font-bold text-neutral-200">
              Clínica & metabólica
            </p>
          </div>
        </article>
      </div>
    </HeroSection>

    <!-- Alto rendimiento & deporte -->
    <HeroSection>
      <h2 class="text-4xl md:text-5xl font-black text-neutral-200">
        Alto
        <span class="text-[#4F80E2]">rendimiento</span>
        &
        <span class="text-[#4F80E2]">deporte</span>
      </h2>

      <div
        class="mt-4 w-full inline-flex flex-col md:flex-row justify-center gap-8 content-start md:col-span-2 text-neutral-200"
      >
        <div
          class="w-full space-y-2 text-sm text-neutral-400 py-4 md:order-last"
        >
          <p>
            Entendemos la importancia de la nutrición en el rendimiento
            deportivo, cada atleta y deporte es único y requiere un programa
            personalizado adaptado sus necesidades.
          </p>
          <p>
            Desde deportistas amateur hasta atletas profesionales, creamos un
            programa y periodización nutricional para alcanzar tus metas de
            composición corporal y rendimiento deportivo.
          </p>

          <p class="text-[#4F80E2] font-semibold">
            Haz de la nutrición tu ventaja competitiva.
          </p>

          <p>
            En general, el objetivo de un nutricionista atleta es ayudar a los
            atletas a maximizar su potencial a través de una nutrición adecuada
            y ayudarlos a alcanzar sus objetivos de rendimiento de una manera
            segura y saludable.
          </p>
        </div>

        <GlowCard disable-glow>
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex flex-col">
              <div class="font-light">
                Consulta
              </div>
              <div class="font-extrabold text-2xl">
                Nutricional
              </div>
            </header>

            <ul class="font-light text-sm list-disc list-inside">
              <li>Periodización nutricional</li>
              <li>Pre, durante & post competencia</li>
              <li>Perfil antropométrico somatocarta</li>
              <li>Análisis de composición corporal</li>
              <li>Plan de hidratación & recuperación</li>
              <li>Plan de suplementación</li>
            </ul>
          </article>
        </GlowCard>
      </div>
    </HeroSection>

    <!-- Clínica & metabólica -->
    <HeroSection>
      <h2 class="text-4xl md:text-5xl font-black text-neutral-200">
        <span class="text-[#4F80E2]">Clínica</span>
        &
        <span class="text-[#4F80E2]">metabólica</span>
      </h2>

      <div
        class="mt-4 w-full inline-flex flex-col md:flex-row justify-center gap-8 content-start md:col-span-2 text-neutral-200"
      >
        <div class="w-full space-y-2 text-sm text-neutral-400 py-4">
          <p>
            Eres único. Tu Nutrición también debería serlo. Áreas especializadas
            de nutrición y manejo de enfermedades en las que se enfocan nuestros
            dietistas.
          </p>

          <ul class="list-disc list-inside">
            <li>Diabetes</li>
            <li>SOAP</li>
            <li>Obesidad & control de peso</li>
            <li>Problemas gastrointestinales</li>
            <li>Embarazo & lactancia</li>
            <li>Trastornos conducta alimentaria</li>
            <li>Problemas cardiovasculares</li>
            <li>Recuperación cirugías bariátricas</li>
          </ul>
        </div>

        <GlowCard disable-glow>
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex flex-col">
              <div class="font-light">
                Consulta
              </div>
              <div class="font-extrabold text-2xl">
                Nutricional
              </div>
            </header>

            <ul class="font-light text-sm list-disc list-inside">
              <li>Plan y guía de alimentación</li>
              <li>Lista de super</li>
              <li>Análisis de composición corporal</li>
              <li>Antropométria</li>
              <li>Lista de equivalentes</li>
            </ul>
          </article>
        </GlowCard>
      </div>
    </HeroSection>

    <span id="CTA" />
    <!-- Composición Corporal & fitness -->
    <HeroSection>
      <h2 class="text-4xl md:text-5xl font-black text-neutral-200">
        Composición
        <span class="text-[#4F80E2]">corporal</span>
        &
        <span class="text-[#4F80E2]">fitness</span>
      </h2>

      <p class="text-sm text-neutral-400 py-4">
        Sabemos que cada cuerpo es diferente y nos apasiona personalizar cada
        plan con un enfoque personalizado. Así como perder grasa corporal, ganar
        masa muscular, mejorar su salud u optimizar su rendimiento, creamos un
        plan de nutrición de acuerdo con sus objetivos.
      </p>

      <div
        class="mt-8 w-full inline-flex flex-col md:flex-row justify-center gap-8 content-start md:col-span-2 text-neutral-200"
      >
        <GlowCard disable-glow>
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex flex-col">
              <div class="font-light">
                Consulta
              </div>
              <div class="font-extrabold text-2xl">
                Nutricional
              </div>
            </header>

            <ul class="font-light text-sm list-disc list-inside">
              <li>Plan y guía de alimentación</li>
              <li>Lista de super</li>
              <li>Análisis de composición corporal</li>
              <li>Antropométria</li>
              <li>Lista de equivalentes</li>
            </ul>
          </article>
        </GlowCard>

        <GlowCard disable-glow>
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex flex-col">
              <div class="font-light">
                Consulta
              </div>
              <div class="font-extrabold text-2xl">
                + Entrenamiento
              </div>
            </header>

            <ul class="font-light text-sm list-disc list-inside">
              <li>Plan nutricional individualizado</li>
              <li>Programación de entrenamiento físico</li>
              <li>Suplementación deportiva</li>
            </ul>
          </article>
        </GlowCard>
      </div>
    </HeroSection>

    <!-- Entrenamiento Personalizado -->
    <HeroSection>
      <h2 class="text-4xl md:text-5xl font-black text-neutral-200">
        Entrenamiento
        <span class="text-[#4F80E2]">Personalizado</span>
      </h2>
      <span class="text-sm text-neutral-400">
        El movimiento es
        <span class="text-neutral-200 font-semibold"> fortaleza. </span>
      </span>

      <div
        class="mt-8 inline-grid md:grid-cols-3 gap-8 content-start md:col-span-2 text-neutral-200"
      >
        <GlowCard>
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex items-center gap-2">
              <UnoIcon class="i-mdi:weight-lifter w-10 h-10" />
              <div class="flex flex-col">
                <div class="font-light">
                  Valoración
                </div>
                <div class="font-extrabold text-2xl">
                  Física
                </div>
              </div>
            </header>

            <p class="font-light text-sm">
              Mediante una valoración inicial identificaremos la intensidad, los
              ejercicios y el nivel de aptitud física actual. Para una
              programación personalizada de acuerdo a tus capacidades.
            </p>
          </article>
        </GlowCard>

        <GlowCard>
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex items-center gap-2">
              <UnoIcon class="i-ph:target-duotone w-10 h-10" />
              <div class="flex flex-col">
                <div class="font-light">
                  Metas y
                </div>
                <div class="font-extrabold text-2xl">
                  Objetivos
                </div>
              </div>
            </header>

            <p class="font-light text-sm">
              Ganar fuerza, aumentar músculo, disminuir grasa o ser funcional.
              Establecer nuestra meta nos ayudará a mantener el enfoque y
              diseñar un programa de entrenamiento que se alinee con tus
              objetivos individuales.
            </p>
          </article>
        </GlowCard>

        <GlowCard>
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex items-center gap-2">
              <UnoIcon class="i-ph:arrow-line-up-right-bold w-10 h-10" />
              <div class="flex flex-col">
                <div class="font-light">
                  Sobrecarga
                </div>
                <div class="font-extrabold text-2xl">
                  Progresiva
                </div>
              </div>
            </header>

            <p class="font-light text-sm">
              Es importante progresar y desafiarte a ti mismo. Aumentando la
              intensidad de tus entrenamientos mientras tu condición física va
              mejorando. La progresión nos ayudará a evitar lesiones y a seguir
              viendo resultados a largo plazo.
            </p>
          </article>
        </GlowCard>
      </div>
    </HeroSection>

    <!-- People -->
    <HeroSection>
      <Badge class="w-min mx-auto text-neutral-200">
        Conocenos
      </Badge>

      <div class="grid gap-4 md:grid-cols-3 md:h-64 justify-items-center">
        <article
          group
          class="aspect-1/1 h-full md:h-64 relative md:justify-self-end"
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
              class="flex items-center gap-2 py-2 pl-2 pr-12 bg-black/70 backdrop-blur rounded-full"
            >
              <div class="h-12 w-12 rounded-full overflow-hidden">
                <NuxtImg
                  src="/nutricion/people/nutri_0.png"
                  loading="lazy"
                  preset="avatar"
                  width="60"
                  height="60"
                  class="object-cover w-full"
                  alt=""
                />
              </div>

              <div>
                <p class="text-xs font-bold text-neutral-200">
                  Nutriologa
                </p>
                <p class="text-xs text-gray-400">
                  Yetlanetzi Portillo
                </p>
              </div>
            </div>
          </div>
        </article>

        <article
          group
          class="aspect-1/1 h-full md:h-64 relative"
        >
          <NuxtImg
            src="/nutricion/people/nutri_1.png"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-contain transition-300 group-hover:scale-110"
            alt="Fotografía de la nutrióloga Daniela Cuevas"
          />

          <div class="absolute bottom-2 left-2">
            <div
              class="flex items-center gap-2 py-2 pl-2 pr-12 bg-black/70 backdrop-blur rounded-full"
            >
              <div class="h-12 w-12 rounded-full overflow-hidden">
                <NuxtImg
                  src="/nutricion/people/nutri_1.png"
                  loading="lazy"
                  preset="avatar"
                  width="60"
                  height="60"
                  class="object-cover w-full"
                  alt=""
                />
              </div>

              <div>
                <p class="text-xs font-bold text-neutral-200">
                  Nutriologa
                </p>
                <p class="text-xs text-gray-400">
                  Daniela Cuevas
                </p>
              </div>
            </div>
          </div>
        </article>

        <article
          group
          class="aspect-1/1 h-full md:h-64 relative md:justify-self-start"
        >
          <NuxtImg
            src="/nutricion/people/nutri_2.png"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-contain transition-300 group-hover:scale-110"
            alt="Fotografía de la nutrióloga Ninfa Jonguitud"
          />

          <div class="absolute bottom-2 left-2">
            <div
              class="flex items-center gap-2 py-2 pl-2 pr-12 bg-black/70 backdrop-blur rounded-full"
            >
              <div class="h-12 w-12 rounded-full overflow-hidden">
                <NuxtImg
                  src="/nutricion/people/nutri_2.png"
                  loading="lazy"
                  preset="avatar"
                  width="60"
                  height="60"
                  class="object-cover w-full"
                  alt=""
                />
              </div>

              <div>
                <p class="text-xs font-bold text-neutral-200">
                  Nutriologa
                </p>
                <p class="text-xs text-gray-400">
                  Ninfa Jonguitud
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </HeroSection>
  </div>
</template>
