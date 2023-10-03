<script lang="ts" setup>
useServerSeoMeta({
  title: 'Atenea Nutrición | Epigenética',
  ogTitle: 'Atenea Nutrición | Epigenética',
  ogType: 'website',
  ogUrl: 'https://ateneanutricion.com/epigenetica',

  description:
    'Haz de la nutrición tu ventaja competitiva | Sabemos que cada cuerpo es diferente y nos apasiona crear cada plan con un enfoque personalizado.',
  ogDescription:
    'Haz de la nutrición tu ventaja competitiva | Sabemos que cada cuerpo es diferente y nos apasiona crear cada plan con un enfoque personalizado.',

  ogImage: '/og-images/epigenetica.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="space-y-16">
    <HeroHeader :titles="['Ciencia.', 'Genes.', 'Bienestar.']">
      <template #prepend>
        <p class="font-light text-neutral-400 text-center text-xl">
          Haz de la nutrición tu ventaja
          <span class="text-white font-semibold">competitiva</span>
        </p>
      </template>

      <template #append>
        <div class="flex flex-col gap-4 text-xl">
          <p class="font-light text-neutral-400 text-center mb-16">
            Evaluaremos tu bio-información, obteniendo datos sobre tus
            necesidades nutricionales, conocerás lo que realmente necesita tu
            organismo a nivel celular basado en la expresión de tus genes
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
                href="https://api.whatsapp.com/send?phone=5214443159190&text=Hola%2C%20me%20gustaría%20tener%20mí%20estudio%20epigenetico."
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

    <!-- AREAS -->
    <HeroSection>
      <header class="p-4 text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-black text-neutral-200">
          Estudios <span class="text-purple-400">epigeneticos</span>
        </h2>
        <Badge class="w-min mx-auto text-neutral-200"> ¿Qué conocerás? </Badge>
      </header>

      <div class="bg-neutral-800 p-4 rounded-xl grid md:grid-cols-2">
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">
              Sensibilidades
            </div>
            <div class="font-black text-2xl text-orange-400">Alimentarias</div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            Te ayudamos a identificar qué alimentos y aditivos pueden estar
            causando estrés digestivo en tu organismo, impidiendo la correcta
            absorción de nutrientes y favoreciendo la inflamación
          </p>
        </article>
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">
              Necesidades
            </div>
            <div class="font-black text-2xl text-emerald-400">
              Nutricionales
            </div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            Para ayudarte a lograr tus objetivos de salud, peso, aumentar tu
            energía durante el día y potenciar el bienestar a través de las
            necesidades reales de tu organismo
          </p>
        </article>
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">Factores</div>
            <div class="font-black text-2xl text-sky-400">Externos</div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            ¿Cómo te relacionas con el ambiente que te rodea y cómo te afectan
            los factores ambientales, la exposición tóxica y las cargas
            electromagnéticas de baja intensidad a nivel celular?
          </p>
        </article>
        <article class="inline-grid gap-4 py-4 px-6">
          <header class="flex flex-col">
            <div class="font-medium text-base text-neutral-200">Sistema</div>
            <div class="font-black text-2xl text-red-400">Metabólico</div>
          </header>
          <p class="font-light text-sm text-neutral-400">
            Información del estado actual de los principales sistemas
            metabólicos para recuperar su equilibrio y optimizar tus sistemas
            inmune, intestinal, cardiovascular, metabólico, sueño, emociones.
          </p>
        </article>
      </div>
    </HeroSection>

    <span id="CTA"></span>
    <!-- MARCADORES -->
    <HeroSection class="space-y-6">
      <header class="p-4 text-center">
        <p class="text-4xl md:text-5xl font-black text-neutral-200">
          ¿Qué indicadores
          <span class="text-purple-400">epigenéticos</span>
          conocerás?
        </p>
      </header>

      <div class="flex flex-wrap justify-center">
        <div
          class="w-full md:w-1/3 py-3 md:px-3"
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
                'Alfa linolelco 3 (ALA),  Ácido araquidónico 6 (AA), Ácido docosahexaenoico 3 (DHA), Ácido eicosapentanoico 3 (EPA),  Ácido linolénico gamma 6 (GLA), Ácido linoleico 6, Ácido oleico 9',
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
                'Hongo, Moldes/Esporas, Parásitos, Bacteria, Señal Viral, Señal Post vira',
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
          <AteneaAccordion>
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

            <p class="text-neutral-400">{{ content }}</p>
          </AteneaAccordion>
        </div>
      </div>
    </HeroSection>

    <HeroSection>
      <h2 class="text-4xl md:text-5xl font-black text-neutral-200">
        Informes
        <span class="text-purple-400">epigenéticos</span>
      </h2>

      <!-- ALTO RENDIMIENTO -->
      <div
        class="mt-16 w-full inline-flex flex-col md:flex-row justify-center gap-8 content-start md:col-span-2 text-neutral-200 md:h-82"
      >
        <div class="w-full space-y-2 text-sm text-neutral-400">
          <NuxtImg
            src="/epigenetica/high_performance.png"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-contain transition-300 hover:scale-110"
          />
        </div>

        <GlowCard
          disable-glow
          glow-gradient=" from-violet-500 to-purple-400"
        >
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex flex-col">
              <div class="font-light">Informe de optimización</div>
              <div class="font-extrabold text-2xl">Alto Rendimiento</div>
            </header>

            <p class="font-light text-sm">
              El informe epigenético "Optimización de Alto Rendimiento" ha sido
              desarrollado por científicos expertos en epigenética para ayudar a
              identificar las influencias del entorno y su influencia en la
              expresión en genes relacionados al rendimiento del atleta. tiene
              como objetivo poder mejorar el rendimiento físico de los atletas a
              través de ajustes nutricionales y medio ambientales. De este modo
              podremos optimizar sus capacidades físicas, mentales y
              emocionales.
            </p>
          </article>
        </GlowCard>
      </div>

      <!-- WELLNESS -->
      <div
        class="mt-16 w-full inline-flex flex-col md:flex-row justify-center gap-8 content-start md:col-span-2 text-neutral-200 md:h-82"
      >
        <div class="w-full space-y-2 text-sm text-neutral-400 md:order-last">
          <NuxtImg
            src="/epigenetica/wellness.png"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-contain transition-300 hover:scale-110"
          />
        </div>

        <GlowCard
          disable-glow
          glow-gradient=" from-violet-500 to-purple-400"
        >
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex flex-col">
              <div class="font-light">Informe de optimización</div>
              <div class="font-extrabold text-2xl">Wellness</div>
            </header>

            <p class="font-light text-sm">
              El informe wellness está diseñado para ayudarnos a identificar
              influencias ambientales, que podrían estar afectando nuestra
              expresión genética y su influencia en las funciones metabólicas.
              En base a dichas influencias, nos proporciona un "Plan Nutricional
              de 90 Días" para equilibrar estos marcadores y así poder
              optimizarlos a través de ajustes nutricionales.
            </p>
          </article>
        </GlowCard>
      </div>

      <!-- VEGANO -->
      <div
        class="mt-16 w-full inline-flex flex-col md:flex-row justify-center gap-8 content-start md:col-span-2 text-neutral-200 md:h-82"
      >
        <div class="w-full space-y-2 text-sm text-neutral-400">
          <NuxtImg
            src="/epigenetica/vegan.png"
            loading="lazy"
            preset="hero"
            class="h-full w-full object-contain transition-300 hover:scale-110"
          />
        </div>

        <GlowCard
          disable-glow
          glow-gradient=" from-violet-500 to-purple-400"
        >
          <article class="inline-grid gap-4 py-4 px-6">
            <header class="flex flex-col">
              <div class="font-light">Informe de optimización</div>
              <div class="font-extrabold text-2xl">Vegano</div>
            </header>

            <p class="font-light text-sm">
              El informe optimización "vegano" está diseñado para ayudar a
              identificar influencias ambientales correlacionadas con la
              expresión de genes, enzimas y funciones metabólica. Además, de
              brindar un plan para abordar estos desequilibrios y optimizar la
              salud mediante programas dietéticos, nutricionales y suplementos.
            </p>
          </article>
        </GlowCard>
      </div>
    </HeroSection>
  </div>
</template>
