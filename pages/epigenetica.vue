<script lang="ts" setup>
// definePageMeta({ layout: false })
</script>

<template>
  <div class="space-y-4">
    <header class="grid gap-4 p-4 sm:grid-cols-2">
      <GridCard class="grid content-center">
        <div class="relative rounded-xl">
          <svg
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            class="h-full fill-sky-300"
          >
            <path
              d="M369,331Q345,422,256.5,393.5Q168,365,123,302.5Q78,240,116,166Q154,92,247,79.5Q340,67,366.5,153.5Q393,240,369,331Z"
            />
          </svg>

          <div class="absolute top-0 pt-4 h-full w-full overflow-hidden">
            <img
              src="@/assets/images/epigenetica/dna.png"
              class="h-full w-10/12 mx-auto object-contain transition-300 group-hover:scale-110"
            />
          </div>

          <div class="absolute top-0 right-0">
            <span class="block h-12 w-12 p-2 bg-sky-300 rounded-full"></span>
          </div>
        </div>
      </GridCard>

      <GridCard class="sm:order-first grid gap-4 content-center">
        <div class="font-semibold">
          <span class="text-5xl">
            Nutrición basada en la expresión de tus
            <span class="text-6xl text-[#4FE0B6]">genes</span>
          </span>
        </div>

        <p>
          Con tan solo 5 hebras de tu cabello realizaremos un test epigenético y
          recibiras un plan alimenticio basado en tu bio-información
        </p>
      </GridCard>
    </header>

    <GridContainer class="min-h-xl p-6 parallax">
      <GridCard>
        <div class="flex flex-col justify-center gap-4">
          <h1
            class="p-4 text-5xl sm:text-7xl font-black tracking-tighter text-gray-200"
          >
            Nutrición basada en la expresión de tus genes
          </h1>

          <GridContainer
            :cols="{ sm: 2 }"
            class="p-6"
          >
            <p class="text-gray-200">
              Con tan solo 5 hebras de tu cabello realizaremos un test
              epigenético y recibiras un plan alimenticio basado en tu
              bio-información
            </p>
          </GridContainer>
        </div>
      </GridCard>

      <!-- <GridCard class="justify-center items-center">
            <GridContainer
              :cols="{ sm: 2 }"
              class="w-full"
            >
              <GridCard>
                <AteneaBlobCard>
                  <template #title>Titulo</template>
                  <template #icon>ICONO</template>

                  <p>Content</p>
                </AteneaBlobCard>
              </GridCard>

              <GridCard>
                <AteneaBlobCard> Hi </AteneaBlobCard>
              </GridCard>
            </GridContainer>
          </GridCard> -->
    </GridContainer>

    <GridContainer
      :cols="{
        sm: 2,
        md: 4,
      }"
      class="auto-rows-[192px]"
    >
      <GridCard
        class="p-1 bg-black rounded-2xl!"
        :col-span="{ md: 2 }"
        :row-span="{ base: 2 }"
      >
        <AteneaBlobCard blob-color="rgb(79, 128, 226)">
          <template #title>
            <div class="absolute flex flex-col lg:flex-row gap-2">
              <p
                class="tracking-tighter font-black text-4xl lg:text-6xl vertical-lr"
              >
                Estudios
              </p>
              <p
                class="tracking-tighter font-black text-4xl lg:text-6xl vertical-lr lg:order-first"
              >
                epigenéticos
              </p>
            </div>
          </template>

          <template #icon>
            <UnoIcon class="i-ph:dna-bold w-26 h-26" />
          </template>

          <div class="absolute bottom-4 right-4 w-8/12">
            <p>
              Este estudio evaluara tu bio-información, obteniendo datos sobre
              tus necesidades nutricionales, conocerás lo que realmente necesita
              tu organismo a nivel celular basado en la expresión de tus genes
            </p>
          </div>
        </AteneaBlobCard>
      </GridCard>

      <GridCard class="overflow-hidden">
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
      </GridCard>

      <GridCard
        class="relative overflow-hidden mix-blend-screen"
        :row-span="{ sm: 2 }"
      >
        <img
          src="@/assets/epigenetica/dna.jpeg"
          class="h-full w-full object-cover transition-300 hover:scale-110"
        />
        <div
          class="absolute bottom-2 left-2 tracking-tighter bg-white text-black mix-blend-screen w-full pl-1"
        >
          <h3 class="font-black text-2xl">CONTACTO</h3>
          <p class="text-xs">+52 444 123 456</p>
        </div>
      </GridCard>

      <GridCard class="overflow-hidden">
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
      </GridCard>

      <GridCard class="overflow-hidden">
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
      </GridCard>

      <GridCard class="overflow-hidden">
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
      </GridCard>

      <GridCard
        :col-span="{ sm: 2 }"
        class="overflow-hidden"
      >
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
      </GridCard>
    </GridContainer>

    <GridContainer>
      <GridCard
        :col-span="{ sm: 2, md: 4 }"
        class="text-center flex-col"
      >
        <p class="text-3xl font-semibold text-gray-800">
          ¿Qué indicadores epigenéticos conoceras?
        </p>

        <GridContainer
          :cols="{ sm: 2, md: 3 }"
          class="p-0! gap-6!"
        >
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
                icon: 'i-material-symbols:microbiology',
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
        </GridContainer>
      </GridCard>
    </GridContainer>

    <GridContainer :cols="{ sm: 3 }">
      <GridCard :col-span="{ sm: 3 }">
        <header class="w-full text-center text-3xl font-semibold text-gray-800">
          <p>Elige un plan según tu objetívo</p>
        </header>
      </GridCard>

      <GridCard
        v-for="(item, i) in [
          {
            image: '/epigenetica/high_performance.jpg',
          },
          {
            image: '/epigenetica/wellness.png',
          },
          {
            image: '/epigenetica/vegan.jpg',
          },
        ]"
        class="border-4 overflow-hidden max-h-sm aspect-3/4"
      >
        <img
          :src="item.image"
          class="h-full w-full object-cover transition-300 hover:scale-110"
        />
      </GridCard>
    </GridContainer>
  </div>
</template>

<style>
.parallax {
  background-image: url('/epigenetica/dna.jpeg');
  background-attachment: fixed;
}
</style>
