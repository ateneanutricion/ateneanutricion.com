<template>
  <div class="space-y-12 px-4">
    <header class="grid gap-4 md:grid-cols-2">
      <BlobCard fill-class="fill-[#4F80E2]">
        <NuxtImg
          src="/nutricion/header.png"
          loading="lazy"
          preset="hero"
          class="h-full w-full object-contain transition-300 group-hover:scale-110"
        />
      </BlobCard>

      <article class="md:order-first grid content-center gap-4">
        <div class="font-semibold">
          <span class="text-4xl">
            ¿Quieres llevar tu
            <span class="text-5xl text-[#4F80E2]">desempeño</span>
            al siguiente
            <span class="text-5xl text-[#4F80E2]">nivel?</span>
          </span>
        </div>

        <p>Haz de la nutrición tu ventaja competitiva.</p>

        <div class="flex flex-wrap gap-2">
          <AteneaTag
            v-for="(content, i) of [
              'Nutrición Deportiva',
              'Metabolismo',
              'Energía',
              'Bienestar',
              'Competencia',
              'Nutrientes',
            ]"
            :key="i"
          >
            {{ content }}
          </AteneaTag>
        </div>
      </article>
    </header>

    <section class="grid gap-4 md:grid-cols-3 auto-rows-48">
      <article
        group
        class="relative rounded-xl overflow-hidden"
      >
        <NuxtImg
          src="/nutricion/fitness.jpeg"
          loading="lazy"
          preset="hero"
          fit="cover"
          class="object-cover transition-300 group-hover:scale-110"
        />

        <div class="absolute h-full w-full top-0 grid content-center">
          <div
            class="px-4 py-2 w-full text-center text-3xl md:text-lg text-neutral-200 bg-white/30 backdrop-blur"
          >
            <p class="font-medium tracking-tighter">
              Composición corporal & fitness
            </p>
          </div>
        </div>
      </article>

      <article
        group
        class="relative rounded-xl overflow-hidden"
      >
        <NuxtImg
          src="/nutricion/rendimiento.jpeg"
          loading="lazy"
          preset="hero"
          fit="cover"
          class="object-cover transition-300 group-hover:scale-110"
        />

        <div class="absolute h-full w-full top-0 grid content-center">
          <div
            class="px-4 py-2 w-full text-center text-3xl md:text-lg text-neutral-200 bg-white/30 backdrop-blur"
          >
            <p class="font-medium tracking-tighter">
              Alto rendimiento & deporte
            </p>
          </div>
        </div>
      </article>

      <article
        group
        class="relative rounded-xl overflow-hidden"
      >
        <NuxtImg
          src="/nutricion/clinica.jpg"
          loading="lazy"
          preset="hero"
          fit="cover"
          class="object-cover transition-300 group-hover:scale-110"
        />

        <div class="absolute h-full w-full top-0 grid content-center">
          <div
            class="px-4 py-2 w-full text-center text-3xl md:text-lg text-neutral-200 bg-white/30 backdrop-blur"
          >
            <p class="font-medium tracking-tighter">Clínica & metabólica</p>
          </div>
        </div>
      </article>
    </section>

    <section class="space-y-8 bg-neutral-100 p-4">
      <article class="grid md:grid-cols-2">
        <div class="font-semibold h-full grid content-center p-4">
          <span class="text-4xl">
            Composición
            <span class="text-[#4F80E2]">corporal</span>
            &
            <span class="text-[#4F80E2]">fitness</span>
          </span>
        </div>
        <div class="p-4 md:pl-0 grid content-center">
          <p>
            Sabemos que cada cuerpo es diferente y nos apasiona personalizar
            cada plan con un enfoque personalizado. Así como perder grasa
            corporal, ganar masa muscular, mejorar su salud u optimizar su
            rendimiento, creamos un plan de nutrición de acuerdo con sus
            objetivos.
          </p>
        </div>
      </article>

      <article class="grid md:grid-cols-2">
        <div class="font-semibold h-full grid content-center p-4 md:order-last">
          <span class="text-4xl">
            Alto
            <span class="text-[#4F80E2]">rendimiento</span>
            &
            <span class="text-[#4F80E2]">deporte</span>
          </span>
        </div>
        <div class="p-4 md:pl-0 grid content-center">
          <div class="space-y-4">
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

            <p class="text-[#4F80E2] font-semibold text-lg">
              Haz de la nutrición tu ventaja competitiva.
            </p>

            <p>
              En general, el objetivo de un nutricionista atleta es ayudar a los
              atletas a maximizar su potencial a través de una nutrición
              adecuada y ayudarlos a alcanzar sus objetivos de rendimiento de
              una manera segura y saludable.
            </p>
          </div>
        </div>
      </article>

      <article class="grid md:grid-cols-2">
        <div class="font-semibold h-full grid content-center p-4">
          <span class="text-4xl">
            <span class="text-[#4F80E2]">Clínica</span>
            &
            <span class="text-[#4F80E2]">metabólica</span>
          </span>
        </div>
        <div class="p-4 md:pl-0 grid content-center">
          <div class="space-y-4">
            <p>
              Eres único. Tu Nutrición también debería serlo. Áreas
              especializadas de nutrición y manejo de enfermedades en las que se
              enfocan nuestros dietistas.
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
        </div>
      </article>
    </section>
  </div>
</template>
