<script lang="ts" setup>
definePageMeta({ layout: 'clear' })
useServerSeoMeta({
  title: 'Atenea Nutrición | Nutrición',
  ogTitle: 'Atenea Nutrición | Nutrición',
  ogType: 'website',
  ogUrl: 'https://ateneanutricion.com/nutricion',

  description: 'Somos expertos en nutrición deportiva & clínica, creamos planes de alimentación diseñados para aumentar el rendimiento deportivo, salud y bienestar, de una manera integral. Nuestras consultas Incluye: evaluación, diagnóstico, tratamiento y seguimiento nutricional.',
  ogDescription: 'Somos expertos en nutrición deportiva & clínica, creamos planes de alimentación diseñados para aumentar el rendimiento deportivo, salud y bienestar, de una manera integral. Nuestras consultas Incluye: evaluación, diagnóstico, tratamiento y seguimiento nutricional.',

  ogImage: '/og-images/nutricion.png',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-images/nutricion.png',
})
</script>

<template>
  <LotusPage>
    <HeroHeader :titles="['Tu', 'Mejor', 'Versión.']">
      <template #prepend>
        <p class="text-center font-light">
          Haz de la nutrición tu ventaja competitiva
        </p>
      </template>

      <template #append>
        <div class="flex flex-col gap-10">
          <p class="text-center font-light">
            Asesoramiento nutricional personalizado para alcanzar tus objetivos de rendimiento deportivo, salud y composición corporal
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
                color="black"
                to="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20agendar%20una%20cita%20nutricional."
              />
            </GlowCard>
          </div>
        </div>
      </template>
    </HeroHeader>

    <!-- Images grid -->
    <section>
      <div class="grid justify-items-center gap-4 md:grid-cols-3 md:h-64">
        <article
          group
          class="relative aspect-7/5 h-full overflow-hidden rounded-xl transition-300 md:aspect-1/1 hover:scale-98 md:justify-self-end"
        >
          <NuxtImg
            src="/nutricion/fitness.jpeg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="w-full object-cover transition-300 group-hover:scale-110"
            alt="Fotografía pesa y botella de agua sobre una banca de ejercicio dentro de un gimnasio"
          />

          <div class="absolute right-0 top-0 p-2">
            <div class="rounded-xl bg-[#4F80E2] p-2 text-neutral-200">
              <UnoIcon class="i-mdi:arm-flex-outline" />
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 from-neutral-800 bg-gradient-to-t p-2"
          >
            <p class="text-3xl font-bold text-neutral-200 md:text-2xl">
              Composición corporal & fitness
            </p>
          </div>
        </article>

        <article
          group
          class="relative aspect-7/5 h-full overflow-hidden rounded-xl transition-300 md:aspect-1/1 hover:scale-98"
        >
          <NuxtImg
            src="/nutricion/rendimiento.jpeg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="w-full object-cover transition-300 group-hover:scale-110"
            alt="Fotografía de corredores en la linea de salida"
          />

          <div class="absolute right-0 top-0 p-2">
            <div class="rounded-xl bg-[#4F80E2] p-2 text-neutral-200">
              <UnoIcon class="i-mdi:weight-lifter" />
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 from-neutral-800 bg-gradient-to-t p-2"
          >
            <p class="text-3xl font-bold text-neutral-200 md:text-2xl">
              Alto rendimiento & deporte
            </p>
          </div>
        </article>

        <article
          group
          class="relative aspect-7/5 h-full overflow-hidden rounded-xl transition-300 md:aspect-1/1 hover:scale-98 md:justify-self-start"
        >
          <NuxtImg
            src="/nutricion/clinica.jpg"
            loading="lazy"
            preset="hero"
            fit="cover"
            class="w-full object-cover transition-300 group-hover:scale-110"
            alt="Fotografía de diversos grupos alimenticios y una mano sosteniendo una manzana"
          />

          <div class="absolute right-0 top-0 p-2">
            <div class="rounded-xl bg-[#4F80E2] p-2 text-neutral-200">
              <UnoIcon class="i-mdi:fruit-cherries" />
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 from-neutral-800 bg-gradient-to-t p-2"
          >
            <p class="text-3xl font-bold text-neutral-200 md:text-2xl">
              Clínica & metabólica
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- Alto rendimiento & deporte -->
    <section class="p-4 @container space-y-6">
      <header class="text-[18cqw]/[1] font-extrabold sm:text-[7cqw]/[1]">
        <h2>
          Alto
          <span class="text-[#4F80E2]">rendimiento</span>
          &
          <span class="text-[#4F80E2]">deporte</span>
        </h2>
      </header>

      <div
        class="inline-grid w-full content-start justify-center gap-8 sm:grid-cols-2"
      >
        <div class="text-sm md:order-last space-y-2">
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

          <p class="font-semibold text-[#4F80E2]">
            Haz de la nutrición tu ventaja competitiva.
          </p>

          <p>
            En general, el objetivo de un nutricionista atleta es ayudar a los
            atletas a maximizar su potencial a través de una nutrición adecuada
            y ayudarlos a alcanzar sus objetivos de rendimiento de una manera
            segura y saludable.
          </p>
        </div>

        <LotusCard
          :ui="{
            divide: '',
            background: 'bg-[#4F80E2]',
            header: { padding: 'p-6 pb-2' },
            body: { padding: 'p-6 pt-2' },
          }"
          class="text-neutral-100"
        >
          <template #header>
            <div class="font-light">
              Consulta
            </div>
            <div class="text-2xl font-extrabold">
              Nutricional
            </div>
          </template>

          <ul class="list-disc list-inside text-sm font-light">
            <li>Periodización nutricional</li>
            <li>Pre, durante & post competencia</li>
            <li>Perfil antropométrico somatocarta</li>
            <li>Análisis de composición corporal</li>
            <li>Plan de hidratación & recuperación</li>
            <li>Plan de suplementación</li>
          </ul>
        </LotusCard>
      </div>
    </section>

    <!-- Clínica & metabólica -->
    <section class="p-4 @container space-y-6">
      <header class="text-[18cqw]/[1] font-extrabold sm:text-[7cqw]/[1]">
        <h2>
          <span class="text-[#4F80E2]">Clínica</span>
          &
          <span class="text-[#4F80E2]">metabólica</span>
        </h2>
      </header>

      <div
        class="inline-grid w-full content-start justify-center gap-8 sm:grid-cols-2"
      >
        <div class="text-sm space-y-2">
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

        <LotusCard
          :ui="{
            divide: '',
            background: 'bg-[#4F80E2]',
            header: { padding: 'p-6 pb-2' },
            body: { padding: 'p-6 pt-2' },
          }"
          class="text-neutral-100"
        >
          <template #header>
            <div class="font-light">
              Consulta
            </div>
            <div class="text-2xl font-extrabold">
              Nutricional
            </div>
          </template>

          <ul class="list-disc list-inside text-sm font-light">
            <li>Plan y guía de alimentación</li>
            <li>Lista de super</li>
            <li>Análisis de composición corporal</li>
            <li>Antropométria</li>
            <li>Lista de equivalentes</li>
          </ul>
        </LotusCard>
      </div>
    </section>

    <span id="CTA" />
    <!-- Composición Corporal & fitness -->
    <section class="p-4 @container space-y-6">
      <header class="text-[15cqw]/[1] font-extrabold sm:text-[7cqw]/[1]">
        <h2>
          Composición
          <span class="text-[#4F80E2]">corporal</span>
          &
          <span class="text-[#4F80E2]">fitness</span>
        </h2>
      </header>

      <p class="py-4 text-sm">
        Sabemos que cada cuerpo es diferente y nos apasiona personalizar cada
        plan con un enfoque personalizado. Así como perder grasa corporal, ganar
        masa muscular, mejorar su salud u optimizar su rendimiento, creamos un
        plan de nutrición de acuerdo con sus objetivos.
      </p>

      <div
        class="inline-grid w-full content-start justify-center gap-8 sm:grid-cols-2"
      >
        <LotusCard
          :ui="{
            divide: '',
            background: 'bg-[#4F80E2]',
            header: { padding: 'p-6 pb-2' },
            body: { padding: 'p-6 pt-2' },
          }"
          class="text-neutral-100"
        >
          <template #header>
            <div class="font-light">
              Consulta
            </div>
            <div class="text-2xl font-extrabold">
              Nutricional
            </div>
          </template>

          <ul class="list-disc list-inside text-sm font-light">
            <li>Plan y guía de alimentación</li>
            <li>Lista de super</li>
            <li>Análisis de composición corporal</li>
            <li>Antropométria</li>
            <li>Lista de equivalentes</li>
          </ul>
        </LotusCard>

        <LotusCard
          :ui="{
            divide: '',
            background: 'bg-[#4F80E2]',
            header: { padding: 'p-6 pb-2' },
            body: { padding: 'p-6 pt-2' },
          }"
          class="text-neutral-100"
        >
          <template #header>
            <div class="font-light">
              Consulta
            </div>
            <div class="text-2xl font-extrabold">
              + Entrenamiento
            </div>
          </template>

          <ul class="list-disc list-inside text-sm font-light">
            <li>Plan nutricional individualizado</li>
            <li>Programación de entrenamiento físico</li>
            <li>Suplementación deportiva</li>
          </ul>
        </LotusCard>
      </div>
    </section>

    <!-- Entrenamiento Personalizado -->
    <section class="dark rounded-3xl bg-gray-900 p-6 @container space-y-6">
      <header class="text-[14cqw]/[1] font-extrabold text-neutral-200 sm:text-[7cqw]/[1]">
        <h2>
          Entrenamiento
          <span class="text-[#4F80E2]">Personalizado</span>
        </h2>
      </header>

      <span class="text-sm text-neutral-400">
        El movimiento es fortaleza.
      </span>

      <div
        class="inline-grid mt-8 content-start gap-8 text-neutral-200 md:col-span-2 md:grid-cols-3"
      >
        <GlowCard>
          <LotusCard
            :ui="{
              divide: '',
              header: { padding: 'p-4 pb-2' },
              body: { padding: 'p-4 pt-2' },
            }"
          >
            <template #header>
              <div class="flex items-center gap-2">
                <UnoIcon class="i-mdi:weight-lifter h-10 w-10" />
                <div>
                  <div class="font-light">
                    Valoración
                  </div>
                  <div class="text-2xl font-extrabold">
                    Física
                  </div>
                </div>
              </div>
            </template>

            <p class="text-sm font-light">
              Mediante una valoración inicial identificaremos la intensidad, los
              ejercicios y el nivel de aptitud física actual. Para una
              programación personalizada de acuerdo a tus capacidades.
            </p>
          </LotusCard>
        </GlowCard>

        <GlowCard>
          <LotusCard
            :ui="{
              divide: '',
              header: { padding: 'p-4 pb-2' },
              body: { padding: 'p-4 pt-2' },
            }"
          >
            <template #header>
              <div class="flex items-center gap-2">
                <UnoIcon class="i-ph:target-duotone h-10 w-10" />
                <div>
                  <div class="font-light">
                    Metas y
                  </div>
                  <div class="text-2xl font-extrabold">
                    Objetivos
                  </div>
                </div>
              </div>
            </template>

            <p class="text-sm font-light">
              Ganar fuerza, aumentar músculo, disminuir grasa o ser funcional.
              Establecer nuestra meta nos ayudará a mantener el enfoque y
              diseñar un programa de entrenamiento que se alinee con tus
              objetivos individuales.
            </p>
          </LotusCard>
        </GlowCard>

        <GlowCard>
          <LotusCard
            :ui="{
              divide: '',
              header: { padding: 'p-4 pb-2' },
              body: { padding: 'p-4 pt-2' },
            }"
          >
            <template #header>
              <div class="flex items-center gap-2">
                <UnoIcon class="i-ph:arrow-line-up-right-bold h-10 w-10" />
                <div>
                  <div class="font-light">
                    Sobrecarga
                  </div>
                  <div class="text-2xl font-extrabold">
                    Progresiva
                  </div>
                </div>
              </div>
            </template>

            <p class="text-sm font-light">
              Es importante progresar y desafiarte a ti mismo. Aumentando la
              intensidad de tus entrenamientos mientras tu condición física va
              mejorando. La progresión nos ayudará a evitar lesiones y a seguir
              viendo resultados a largo plazo.
            </p>
          </LotusCard>
        </GlowCard>
      </div>
    </section>
  </LotusPage>
</template>
