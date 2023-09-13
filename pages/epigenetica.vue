<template>
  <div class="space-y-12 px-4">
    <header class="grid gap-4 md:grid-cols-2">
      <BlobCard fill-class="fill-sky-300">
        <div class="h-full flex items-center px-4">
          <PokerCard
            class="h-5/10 w-full aspect-3/4 -rotate-z-10 translate-y-2"
          >
            <img
              src="@/assets/images/epigenetica/card_back.jpg"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
            />
          </PokerCard>

          <PokerCard class="h-5/10 w-full aspect-3/4">
            <img
              src="@/assets/images/epigenetica/card_center.png"
              class="h-full w-full object-cover transition-300 group-hover:scale-110"
            />
          </PokerCard>

          <PokerCard class="h-5/10 w-full aspect-3/4 rotate-z-10 translate-y-2">
            <img
              src="@/assets/images/epigenetica/card_front.jpg"
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

    <section
      class="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-[160px]"
    >
      <article class="lg:col-span-2 row-span-2">
        <ShineCard
          blob-color="bg-purple"
          class="h-full w-full"
        >
          <div class="h-full w-full p-4 flex gap-2 text-neutral-200">
            <p class="text-5xl font-light vertical-rl">
              Estudios
              <span class="text-sky-400">epigenéticos</span>
            </p>

            <div class="flex flex-col justify-between">
              <p>
                Este estudio evaluara tu bio-información, obteniendo datos sobre
                tus necesidades nutricionales, conocerás lo que realmente
                necesita tu organismo a nivel celular basado en la expresión de
                tus genes
              </p>
              <UnoIcon class="i-ph:dna-bold w-20 h-20 self-end" />
            </div>
          </div>
        </ShineCard>
      </article>

      <article class="overflow-hidden">
        <FlipCard>
          <template #front>
            <div
              class="h-full p-4 bg-[rgb(100_152_255)] flex flex-col justify-between items-center rounded-xl"
            >
              <UnoIcon
                class="i-ph:flower-lotus-duotone h-12 w-12 group-hover:animate-wobble"
              />

              <div class="text-center text-3xl md:text-2xl lg:text-3xl">
                <p class="font-extrabold tracking-tighter">
                  Necesidades nutricionales
                </p>
              </div>
            </div>
          </template>

          <template #back>
            <div
              class="h-full p-4 bg-[#1a1a1a] text-gray-200 grid content-center rounded-xl"
            >
              <p class="text-center tracking-tighter md:text-sm">
                Para ayudarte a lograr tus objetivos de salud, peso, aumentar tu
                energía durante el día y potenciar el bienestar a través de las
                necesidades reales de tu organismo
              </p>
            </div>
          </template>
        </FlipCard>
      </article>

      <article class="relative md:row-span-2 rounded-xl overflow-hidden">
        <img
          src="@/assets/images/epigenetica/dna.jpeg"
          class="h-full w-full object-cover transition-300 hover:scale-110"
        />
        <div
          class="absolute bottom-2 left-2 tracking-tighter bg-white text-black mix-blend-screen w-full pl-1"
        >
          <h3 class="font-black text-2xl">CONTACTO</h3>
          <p class="text-xs">+52 444 123 456</p>
        </div>
      </article>

      <article class="overflow-hidden">
        <FlipCard>
          <template #front>
            <div
              class="h-full p-4 bg-[rgb(200_233_94)] flex flex-col justify-between items-center rounded-xl"
            >
              <UnoIcon
                class="i-ph:warning-circle-duotone h-12 w-12 group-hover:animate-wobble"
              />

              <div class="text-center text-3xl md:text-2xl lg:text-3xl">
                <p class="font-extrabold tracking-tighter">
                  Sensibilidades alimentarias
                </p>
              </div>
            </div>
          </template>

          <template #back>
            <div
              class="h-full p-4 bg-[#1a1a1a] text-gray-200 grid content-center rounded-xl"
            >
              <p class="text-center tracking-tighter md:max-lg:text-xs">
                Te ayudamos a identificar qué alimentos y aditivos pueden estar
                causando estrés digestivo en tu organismo, impidiendo la
                correcta absorción de nutrientes y favoreciendo la inflamación
              </p>
            </div>
          </template>
        </FlipCard>
      </article>

      <article class="overflow-hidden">
        <FlipCard>
          <template #front>
            <div
              class="h-full p-4 bg-[rgb(169_173_217)] flex flex-col justify-between items-center rounded-xl"
            >
              <UnoIcon
                class="i-ph:heartbeat-duotone h-12 w-12 group-hover:animate-wobble"
              />

              <div class="text-center text-3xl md:text-2xl lg:text-3xl">
                <p class="font-extrabold tracking-tighter">
                  Estado de sistemas metabólicos
                </p>
              </div>
            </div>
          </template>

          <template #back>
            <div
              class="h-full p-4 bg-[#1a1a1a] text-gray-200 grid content-center rounded-xl"
            >
              <p class="text-center tracking-tighter md:max-lg:text-xs">
                Información del estado actual de los principales sistemas
                metabólicos para recuperar su equilibrio y optimizar tus
                sistemas inmune, intestinal, cardiovascular, metabólico, sueño,
                emociones…
              </p>
            </div>
          </template>
        </FlipCard>
      </article>

      <article class="overflow-hidden">
        <FlipCard>
          <template #front>
            <div
              class="h-full p-4 bg-[rgb(169_173_217)] flex flex-col justify-between items-center rounded-xl"
            >
              <UnoIcon
                class="i-ph:spiral-fill h-12 w-12 group-hover:animate-wobble"
              />

              <div class="text-center text-3xl md:text-2xl lg:text-3xl">
                <p class="font-extrabold tracking-tighter">Factores externos</p>
              </div>
            </div>
          </template>

          <template #back>
            <div
              class="h-full p-4 bg-[#1a1a1a] text-gray-200 grid content-center rounded-xl"
            >
              <p class="text-center tracking-tighter md:max-lg:text-xs">
                ¿Cómo te relacionas con el ambiente que te rodea y cómo te
                afectan los factores ambientales, la exposición tóxica y las
                cargas electromagnéticas de baja intensidad a nivel celular?
              </p>
            </div>
          </template>
        </FlipCard>
      </article>

      <article class="md:col-span-2 overflow-hidden">
        <FlipCard>
          <template #front>
            <div
              class="h-full p-4 bg-[rgb(247_211_207)] flex flex-col justify-between items-center rounded-xl"
            >
              <UnoIcon
                class="i-ph:quotes-duotone h-12 w-12 group-hover:animate-wobble"
              />

              <div class="text-center text-3xl md:text-2xl lg:text-3xl">
                <p class="font-extrabold tracking-tighter">
                  ¿Qué es la epigenética?
                </p>
              </div>
            </div>
          </template>

          <template #back>
            <div
              class="h-full p-4 bg-[#1a1a1a] text-gray-200 grid content-center rounded-xl"
            >
              <p class="text-center tracking-tighter">
                Es una rama de la genética que estudia la influencia del medio
                ambiente y las condiciones externas, sobre los genes. Las
                influencias del medio ambiente, incluyendo la nutrición, el
                estrés y las emociones, pueden modificar los genes, sin cambiar
                la secuencia básica del ADN
              </p>
            </div>
          </template>
        </FlipCard>
      </article>
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
          <img
            src="@/assets/images/epigenetica/high_performance.jpg"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>

        <PokerCard
          class="h-full w-9/12 aspect-3/4"
          is-vertical
        >
          <img
            src="@/assets/images/epigenetica/vegan.jpg"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>

        <PokerCard
          class="h-full w-9/12 aspect-3/4"
          is-vertical
        >
          <img
            src="@/assets/images/epigenetica/wellness.png"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>

        <PokerCard
          class="h-full w-9/12 aspect-3/4"
          is-vertical
        >
          <img
            src="@/assets/images/epigenetica/card_front.jpg"
            class="h-full w-full object-cover transition-300 group-hover:scale-110"
          />
        </PokerCard>
      </div>
    </section>
  </div>
</template>
