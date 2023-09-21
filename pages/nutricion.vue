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
          <Badge
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
          </Badge>
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

    <section class="grid gap-4 md:grid-cols-3 w-8/12 md:w-full mx-auto">
      <BlobCard fill-class="fill-[#4F80E2]">
        <NuxtImg
          src="/nutricion/people/nutri_0.png"
          loading="lazy"
          preset="hero"
          class="h-full w-full object-contain transition-300 group-hover:scale-110"
        />

        <template #footer>
          <div
            class="flex items-center gap-2 py-1 pl-2 pr-4 bg-gray-100/70 backdrop-blur rounded-full shadow-xl border"
          >
            <div
              class="h-8 w-8 rounded-full overflow-hidden shadow-md border border-white"
            >
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
              <p class="text-xs font-medium">Nutriologa</p>
              <p class="text-xs text-gray-500">Yetlanetzi Portillo</p>
            </div>
          </div>
        </template>
      </BlobCard>

      <BlobCard fill-class="fill-[#4F80E2]">
        <NuxtImg
          src="/nutricion/people/nutri_1.png"
          loading="lazy"
          preset="hero"
          class="h-full w-full object-contain transition-300 group-hover:scale-110"
        />

        <template #footer>
          <div
            class="flex items-center gap-2 py-1 pl-2 pr-4 bg-gray-100/70 backdrop-blur rounded-full shadow-xl border"
          >
            <div
              class="h-8 w-8 rounded-full overflow-hidden shadow-md border border-white"
            >
              <NuxtImg
                src="/nutricion/people/nutri_1.png"
                loading="lazy"
                preset="avatar"
                width="50"
                height="60"
                class="object-cover w-full"
              />
            </div>

            <div>
              <p class="text-xs font-medium">Nutriologa</p>
              <p class="text-xs text-gray-500">Daniela Cuevas</p>
            </div>
          </div>
        </template>
      </BlobCard>

      <BlobCard fill-class="fill-[#4F80E2]">
        <NuxtImg
          src="/nutricion/people/nutri_2.png"
          loading="lazy"
          preset="hero"
          class="h-full w-full object-contain transition-300 group-hover:scale-110"
        />

        <template #footer>
          <div
            class="flex items-center gap-2 py-1 pl-2 pr-4 bg-gray-100/70 backdrop-blur rounded-full shadow-xl border"
          >
            <div
              class="h-8 w-8 rounded-full overflow-hidden shadow-md border border-white"
            >
              <NuxtImg
                src="/nutricion/people/nutri_2.png"
                loading="lazy"
                preset="avatar"
                width="50"
                height="60"
                class="object-cover w-full"
              />
            </div>

            <div>
              <p class="text-xs font-medium">Nutriologa</p>
              <p class="text-xs text-gray-500">Ninfa Jonguitud</p>
            </div>
          </div>
        </template>
      </BlobCard>
    </section>

    <section class="bg-neutral-100 p-4 rounded-xl grid md:grid-cols-5">
      <header class="md:col-span-2 inline-grid content-center gap-4 px-4">
        <h2 class="text-4xl font-semibold">
          Composición
          <span class="text-[#4F80E2]">corporal</span>
          &
          <span class="text-[#4F80E2]">fitness</span>
        </h2>
        <details>
          <summary
            class="list-none [&::-webkit-details-marker]:display-none cursor-pointer"
          >
            <div
              class="text-gray-600 text-xs rounded-full py-1 px-4 border-2 transition-300 hover:scale-110"
            >
              <div class="flex justify-center items-center">
                <span class="font-medium whitespace-nowrap">Ver Mas +</span>
              </div>
            </div>
          </summary>

          <p class="font-light text-sm text-neutral-600 py-4">
            Sabemos que cada cuerpo es diferente y nos apasiona personalizar
            cada plan con un enfoque personalizado. Así como perder grasa
            corporal, ganar masa muscular, mejorar su salud u optimizar su
            rendimiento, creamos un plan de nutrición de acuerdo con sus
            objetivos.
          </p>
        </details>
      </header>

      <div class="inline-grid md:col-span-3 divide-y">
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">Consulta</div>
            <div class="font-black text-2xl text-neutral-800">Nutricional</div>
          </header>

          <ul class="font-light text-sm text-neutral-600 list-disc list-inside">
            <li>Plan y guía de alimentación</li>
            <li>Lista de super</li>
            <li>Análisis de composición corporal</li>
            <li>Antropométria</li>
            <li>Lista de equivalentes</li>
          </ul>
        </article>

        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">Consulta</div>
            <div class="font-black text-2xl text-neutral-800">
              + Entrenamiento
            </div>
          </header>

          <ul class="font-light text-sm text-neutral-600 list-disc list-inside">
            <li>Plan nutricional inidividualizado</li>
            <li>Programación de entrenamiento físico</li>
            <li>Suplementación deportiva</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="bg-neutral-100 p-4 rounded-xl grid md:grid-cols-5">
      <header
        class="md:col-span-2 inline-grid content-center gap-4 px-4 md:order-last"
      >
        <h2 class="text-4xl font-semibold">
          Alto
          <span class="text-[#4F80E2]">rendimiento</span>
          &
          <span class="text-[#4F80E2]">deporte</span>
        </h2>
        <details>
          <summary
            class="list-none [&::-webkit-details-marker]:display-none cursor-pointer"
          >
            <div
              class="text-gray-600 text-xs rounded-full py-1 px-4 border-2 transition-300 hover:scale-110"
            >
              <div class="flex justify-center items-center">
                <span class="font-medium whitespace-nowrap">Ver Mas +</span>
              </div>
            </div>
          </summary>
          <div class="space-y-4 font-light text-sm text-neutral-600 py-4">
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
              atletas a maximizar su potencial a través de una nutrición
              adecuada y ayudarlos a alcanzar sus objetivos de rendimiento de
              una manera segura y saludable.
            </p>
          </div>
        </details>
      </header>

      <div class="inline-grid md:col-span-3 divide-y h-min">
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">Plan</div>
            <div class="font-black text-2xl text-neutral-800">Nutricional</div>
          </header>

          <ul class="font-light text-sm text-neutral-600 list-disc list-inside">
            <li>Periodización nutricional</li>
            <li>Pre, durante & post competencia</li>
            <li>Perfil antropométrico somatocarta</li>
            <li>Análisis de composición corporal</li>
            <li>Plan de hidratación & recuperación</li>
            <li>Plan de suplementación</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="bg-neutral-100 p-4 rounded-xl grid md:grid-cols-5">
      <header class="md:col-span-2 inline-grid content-center gap-4 px-4">
        <h2 class="text-4xl font-semibold">
          <span class="text-[#4F80E2]">Clínica</span>
          &
          <span class="text-[#4F80E2]">metabólica</span>
        </h2>
        <details>
          <summary
            class="list-none [&::-webkit-details-marker]:display-none cursor-pointer"
          >
            <div
              class="text-gray-600 text-xs rounded-full py-1 px-4 border-2 transition-300 hover:scale-110"
            >
              <div class="flex justify-center items-center">
                <span class="font-medium whitespace-nowrap">Ver Mas +</span>
              </div>
            </div>
          </summary>
          <div class="space-y-4 font-light text-sm text-neutral-600 py-4">
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
        </details>
      </header>

      <div class="inline-grid md:col-span-3 divide-y h-min">
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">Consulta</div>
            <div class="font-black text-2xl text-neutral-800">Nutricional</div>
          </header>

          <ul class="font-light text-sm text-neutral-600 list-disc list-inside">
            <li>Plan y guía de alimentación</li>
            <li>Lista de super</li>
            <li>Análisis de composición corporal</li>
            <li>Antropométria</li>
            <li>Lista de equivalentes</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
