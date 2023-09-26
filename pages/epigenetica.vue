<template>
  <div class="space-y-12 px-4">
    <header class="grid gap-4 md:grid-cols-2">
      <BlobCard fill-class="fill-sky-300">
        <div class="h-full flex items-center px-4">
          <PokerCard
            class="h-5/10 w-full aspect-3/4 -rotate-z-10 translate-y-2"
          >
            <NuxtImg
              src="/epigenetica/card_back.jpg"
              loading="lazy"
              preset="hero"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
            />
          </PokerCard>

          <PokerCard class="h-5/10 w-full aspect-3/4">
            <NuxtImg
              src="/epigenetica/card_center.png"
              loading="lazy"
              preset="hero"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
            />
          </PokerCard>

          <PokerCard class="h-5/10 w-full aspect-3/4 rotate-z-10 translate-y-2">
            <NuxtImg
              src="/epigenetica/card_front.jpg"
              loading="lazy"
              preset="hero"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
            />
          </PokerCard>
        </div>
      </BlobCard>

      <article class="md:order-first grid content-center gap-4">
        <div class="font-semibold">
          <span class="text-5xl">
            Nutrición basada en la expresión de tus
            <span class="text-6xl text-sky-400">genes</span>
          </span>
        </div>

        <p>
          Con tan solo 5 hebras de tu cabello realizaremos un test epigenético y
          recibiras un plan alimenticio basado en tu bio-información
        </p>
      </article>
    </header>

    <section class="bg-neutral-100 p-4 rounded-xl grid md:grid-cols-5">
      <header class="md:col-span-2 inline-grid content-center gap-4 p-4">
        <h2 class="text-4xl font-semibold">
          Estudios <span class="text-[#4F80E2]">Epigeneticos</span>
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
            Este estudio evaluara tu bio-información, obteniendo datos sobre tus
            necesidades nutricionales, conocerás lo que realmente necesita tu
            organismo a nivel celular basado en la expresión de tus genes
          </p>
        </details>
      </header>

      <div class="inline-grid md:col-span-3 divide-y">
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">
              Sensibilidades
            </div>
            <div class="font-black text-2xl text-neutral-800">Alimentarias</div>
          </header>
          <p class="font-light text-sm text-neutral-600">
            Te ayudamos a identificar qué alimentos y aditivos pueden estar
            causando estrés digestivo en tu organismo, impidiendo la correcta
            absorción de nutrientes y favoreciendo la inflamación
          </p>
        </article>
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">
              Necesidades
            </div>
            <div class="font-black text-2xl text-neutral-800">
              Nutricionales
            </div>
          </header>
          <p class="font-light text-sm text-neutral-600">
            Para ayudarte a lograr tus objetivos de salud, peso, aumentar tu
            energía durante el día y potenciar el bienestar a través de las
            necesidades reales de tu organismo
          </p>
        </article>
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">Factores</div>
            <div class="font-black text-2xl text-neutral-800">Externos</div>
          </header>
          <p class="font-light text-sm text-neutral-600">
            ¿Cómo te relacionas con el ambiente que te rodea y cómo te afectan
            los factores ambientales, la exposición tóxica y las cargas
            electromagnéticas de baja intensidad a nivel celular?
          </p>
        </article>
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-800">Sistema</div>
            <div class="font-black text-2xl text-neutral-800">Metabolico</div>
          </header>
          <p class="font-light text-sm text-neutral-600">
            Información del estado actual de los principales sistemas
            metabólicos para recuperar su equilibrio y optimizar tus sistemas
            inmune, intestinal, cardiovascular, metabólico, sueño, emociones.
          </p>
        </article>
      </div>
    </section>

    <section class="p-4 space-y-6">
      <header class="text-center">
        <p class="text-3xl font-semibold">
          ¿Qué indicadores epigenéticos conoceras?
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-3">
        <AteneaAccordion
          v-for="({ title, subtitle, icon, content }, i) of [
            {
              title: 'Vitaminas',
              subtitle: '16 Indicadores',
              icon: 'i-mdi:fruit-watermelon',
              content:
                'Biotina, Inositol, Vitamina A, Vitamina Bl, Vitamina B12, Vitamina B2, Vitamina B3, Vitamina B5, Vitamina B6, Vitamina B9, Vitamina C, Vitamina D3, Vitamina E, Vitamina K, Vitamina K2',
            },
            {
              title: 'Minerales',
              subtitle: '15 Indicadores',
              icon: 'i-ph:diamonds-four-duotone',
              content:
                'Azufre, Boro, Calcio, Cobre, Cromo, Hierro, Litio, Magnesio, Manganeso, Molibdeno, Potasio, Selenio, Silicio, Sodio, Yodo',
            },
            {
              title: 'Antioxidantes',
              icon: 'i-mdi:fruit-citrus',
              subtitle: '12 Indicadores',
              content:
                'AntocianinaS, Carotenoides, Co Enzima Q10, Flavonoides,  Fitoestrógenos, Polifenoles, Selenio, Sulforafano, Superoxide dismutase (sod), Vitamina C, Vitamina E, Zinc',
            },
            {
              title: 'Ácidos Grasos',
              icon: 'i-ph:drop-duotone',
              subtitle: '7 Indicadores',
              content:
                'Alfa linolelco 3 (ALA),  Ácido araquidónico 6 (AA), Acido docosahexaenoico 3 (DHA), Ácido eicosapentanoico 3 (EPA),  Ácido linolénico gamma 6 (GLA), Ácido linoleico 6, Ácido oleico 9',
            },
            {
              title: 'Aminoácidos',
              icon: 'i-mdi:molecule',
              subtitle: '20 Indicadores',
              content:
                'Tirosina, Histidina, Isoleucina, Leucina, Lisina, Metionina, Fenilalanina, Treonina, Triptófano, Valina, Alanina, Arginina, Asparagina, Ácido aspártico, Cisteína, Ácido glutamico, Glutamina, Glicina, Prolina, Serina',
            },
            {
              title: 'Microbioma',
              icon: 'i-mdi:bacteria',
              subtitle: '6 Indicadores',
              content:
                'Hongo, Moldes/Esporas, Parasitos, Bacteria, Señal Viral, Señal Post vira',
            },

            {
              title: 'Interferencias',
              icon: 'i-ph:seal-warning-duotone',
              subtitle: '14 Indicadores',
              content:
                '50 Hz Corriente de Entrada Campo Alternante Electromagnético, Campo Electrostático, Campo Magnético Constante, Corriente de Tracción 16 2/3 Hz, ELF (Frecuencia Extremadamente Baja), Electrosmog, Horno Microondas, Pantalla de Ordenador, Pantalla de Televisión, RBF (Radiación de Baja Frecuencia), RF (Radiofrecuencia), Teléfono Móvil, GSM (0,9 GHz), Teléfono Móvil, GSM (1,8 GHz)',
            },
          ]"
          :key="i"
        >
          <template #title>
            <div class="tracking-tighter text-start">
              <p>{{ title }}</p>
              <span class="text-xs text-gray-500">{{ subtitle }}</span>
            </div>
          </template>
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

    <section class="p-4 space-y-6">
      <header>
        <header class="w-full text-center text-3xl font-semibold text-gray-800">
          <p>Elige un plan según tu objetívo</p>
        </header>
      </header>

      <div class="h-full w-full flex flex-col sm:flex-row items-center px-4">
        <PokerCard
          class="h-full w-9/12 aspect-3/4"
          is-vertical
        >
          <NuxtImg
            src="/epigenetica/vegan.jpg"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>

        <PokerCard
          class="h-full w-9/12 aspect-3/4"
          is-vertical
        >
          <NuxtImg
            src="/epigenetica/high_performance.jpg"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>

        <PokerCard
          class="h-full w-9/12 aspect-3/4"
          is-vertical
        >
          <NuxtImg
            src="/epigenetica/wellness.png"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>

        <PokerCard
          class="h-full w-9/12 aspect-3/4"
          is-vertical
        >
          <NuxtImg
            src="/epigenetica/card_front.jpg"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>
      </div>
    </section>
  </div>
</template>
