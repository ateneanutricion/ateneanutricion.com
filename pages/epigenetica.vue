<script lang="ts" setup>
useServerSeoMeta({
  title: 'Atenea Nutrición | Epigenética',
  ogTitle: 'Atenea Nutrición | Epigenética',
  ogType: 'website',
  ogUrl: 'https://ateneanutricion.com/epigenetica',

  description: 'Brindamos informes epigenéticos deportivos, wellnes y veganos, nuestros informes incluyen una asesoría para interpretar tus resultados con nuestros especialistas y una dieta basada en tu información celular. Evaluamos la expresión de tus genes para crear un plan basado en tu bioinformación.',
  ogDescription: 'OptiBrindamos informes epigenéticos deportivos, wellnes y veganos, nuestros informes incluyen una asesoría para interpretar tus resultados con nuestros especialistas y una dieta basada en tu información celular. Evaluamos la expresión de tus genes para crear un plan basado en tu bioinformación.',

  ogImage: '/og-images/epigenetica.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://ateneanutricion.com/og-images/epigenetica.png',
})
</script>

<template>
  <LotusPage>
    <HeroHeader
      :titles="['Ciencia.', 'Genes.', 'Bienestar.']"
      class="text-neutral-200"
    >
      <template #prepend>
        <p class="text-center font-light">
          Bienvenido a la nutrición inteligente
        </p>
      </template>

      <template #append>
        <div class="flex flex-col gap-10">
          <p class="text-center font-light">
            Optimiza tu salud logrando tus objetivos de salud, peso, aumentar tu
            energía durante el día y potenciar tu bienestar a través de las
            necesidades reales de tu organismo
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

    <!-- AREAS -->
    <section class="p-4 text-neutral-200 space-y-6">
      <header class="flex flex-col items-start gap-6 @container">
        <span class="text-[15cqw]/[1] font-extrabold sm:text-[9cqw]/[1]">
          Estudios
          <span class="text-purple-400">epigeneticos</span>
        </span>
        <Badge class="mx-auto mt-6 w-min text-neutral-200">
          ¿Qué conocerás?
        </Badge>
      </header>

      <div class="grid rounded-xl bg-neutral-800 p-4 md:grid-cols-2">
        <article class="inline-grid gap-4 px-6 py-4">
          <header class="flex flex-col">
            <div class="text-base font-medium text-neutral-200">
              Sensibilidades
            </div>
            <div class="text-2xl font-black text-orange-400">
              Alimentarias
            </div>
          </header>
          <p class="text-sm font-light text-neutral-400">
            Te ayudamos a identificar qué alimentos y aditivos pueden estar
            causando estrés digestivo en tu organismo, impidiendo la correcta
            absorción de nutrientes y favoreciendo la inflamación
          </p>
        </article>
        <article class="inline-grid gap-4 px-6 py-4">
          <header class="flex flex-col">
            <div class="text-base font-medium text-neutral-200">
              Necesidades
            </div>
            <div class="text-2xl font-black text-emerald-400">
              Nutricionales
            </div>
          </header>
          <p class="text-sm font-light text-neutral-400">
            Para ayudarte a lograr tus objetivos de salud, peso, aumentar tu
            energía durante el día y potenciar el bienestar a través de las
            necesidades reales de tu organismo
          </p>
        </article>
        <article class="inline-grid gap-4 px-6 py-4">
          <header class="flex flex-col">
            <div class="text-base font-medium text-neutral-200">
              Factores
            </div>
            <div class="text-2xl font-black text-sky-400">
              Externos
            </div>
          </header>
          <p class="text-sm font-light text-neutral-400">
            ¿Cómo te relacionas con el ambiente que te rodea y cómo te afectan
            los factores ambientales, la exposición tóxica y las cargas
            electromagnéticas de baja intensidad a nivel celular?
          </p>
        </article>
        <article class="inline-grid gap-4 px-6 py-4">
          <header class="flex flex-col">
            <div class="text-base font-medium text-neutral-200">
              Sistema
            </div>
            <div class="text-2xl font-black text-red-400">
              Metabólico
            </div>
          </header>
          <p class="text-sm font-light text-neutral-400">
            Información del estado actual de los principales sistemas
            metabólicos para recuperar su equilibrio y optimizar tus sistemas
            inmune, intestinal, cardiovascular, metabólico, sueño, emociones.
          </p>
        </article>
      </div>
    </section>

    <span id="CTA" />
    <!-- MARCADORES -->
    <section class="p-4 text-neutral-200 space-y-6">
      <header class="flex flex-col items-start gap-6 @container">
        <span class="text-[15cqw]/[1] font-extrabold sm:text-[9cqw]/[1]">
          ¿Qué indicadores
          <span class="text-purple-400">epigenéticos</span>
          conocerás?
        </span>
      </header>

      <div class="flex flex-wrap justify-center">
        <div
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
          class="w-full py-3 md:w-1/3 md:px-3"
        >
          <AteneaAccordion>
            <template #title>
              <div class="text-start tracking-tighter">
                <p>{{ title }}</p>
                <span class="text-xs text-gray-500">{{ subtitle }}</span>
              </div>
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
    </section>

    <section class="p-4 text-neutral-200 space-y-6">
      <header class="flex flex-col items-start gap-6 @container">
        <span class="text-[15cqw]/[1] font-extrabold sm:text-[9cqw]/[1]">
          Informes
          <span class="text-purple-400">epigenéticos</span>
        </span>
      </header>

      <section class="space-y-12">
        <!-- ALTO RENDIMIENTO -->
        <article class="grid gap-6 sm:grid-cols-2 sm:h-xs">
          <NuxtImg
            src="/epigenetica/high_performance.png"
            loading="lazy"
            preset="hero"
            class="mx-auto h-full w-full object-contain transition-300 sm:w-auto hover:scale-110"
            alt="Estudio epigenético para alto rendimiento"
          />

          <GlowCard
            class="z-0"
            glow-gradient="from-violet-500 to-purple-400"
          >
            <div class="inline-grid h-full gap-4 bg-neutral-900 px-6 py-4">
              <header class="flex flex-col">
                <div class="font-light">
                  Informe de optimización
                </div>
                <div class="text-2xl font-extrabold">
                  Alto Rendimiento
                </div>
              </header>

              <p class="text-sm font-light">
                El informe epigenético "Optimización de Alto Rendimiento" ha sido
                desarrollado por científicos expertos en epigenética para ayudar a
                identificar las influencias del entorno y su influencia en la
                expresión en genes relacionados al rendimiento del atleta. tiene
                como objetivo poder mejorar el rendimiento físico de los atletas a
                través de ajustes nutricionales y medio ambientales. De este modo
                podremos optimizar sus capacidades físicas, mentales y
                emocionales.
              </p>
            </div>
          </GlowCard>
        </article>

        <!-- WELLNESS -->
        <article class="grid gap-6 sm:grid-cols-2 sm:h-xs">
          <NuxtImg
            src="/epigenetica/wellness.png"
            loading="lazy"
            preset="hero"
            class="mx-auto h-full w-full object-contain transition-300 sm:order-last sm:w-auto hover:scale-110"
            alt="Estudio epigenético para alto rendimiento"
          />
          <GlowCard
            class="z-0"
            glow-gradient="from-violet-500 to-purple-400"
          >
            <div class="inline-grid h-full gap-4 bg-neutral-900 px-6 py-4">
              <header class="flex flex-col">
                <div class="font-light">
                  Informe de optimización
                </div>
                <div class="text-2xl font-extrabold">
                  Wellness
                </div>
              </header>

              <p class="text-sm font-light">
                El informe wellness está diseñado para ayudarnos a identificar influencias ambientales, que podrían estar afectando nuestra expresión genética y su influencia en las funciones metabólicas. En base a dichas influencias, nos proporciona un "Plan Nutricional de 90 Días" para equilibrar estos marcadores y así poder optimizarlos a través de ajustes nutricionales.
              </p>
            </div>
          </GlowCard>
        </article>

        <!-- VEGANO -->
        <article class="grid gap-6 sm:grid-cols-2 sm:h-xs">
          <NuxtImg
            src="/epigenetica/vegan.png"
            loading="lazy"
            preset="hero"
            class="mx-auto h-full w-full object-contain transition-300 sm:w-auto hover:scale-110"
            alt="Estudio epigenético para alto rendimiento"
          />
          <GlowCard
            class="z-0"
            glow-gradient="from-violet-500 to-purple-400"
          >
            <div class="inline-grid h-full gap-4 bg-neutral-900 px-6 py-4">
              <header class="flex flex-col">
                <div class="font-light">
                  Informe de optimización
                </div>
                <div class="text-2xl font-extrabold">
                  Vegano
                </div>
              </header>

              <p class="text-sm font-light">
                El informe optimización "vegano" está diseñado para ayudar a identificar influencias ambientales correlacionadas con la expresión de genes, enzimas y funciones metabólica. Además, de brindar un plan para abordar estos desequilibrios y optimizar la salud mediante programas dietéticos, nutricionales y suplementos.
              </p>
            </div>
          </GlowCard>
        </article>
      </section>
    </section>
  </LotusPage>
</template>
