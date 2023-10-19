<script lang="ts" setup>
import ProfileCard from '~/components/Lotus/ProfileCard.vue'

definePageMeta({ layout: 'clear' })

useServerSeoMeta({
  title: 'Atenea Nutrición | Nosotros',
  ogTitle: 'Atenea Nutrición | Nosotros',
  ogType: 'website',
  ogUrl: 'https://ateneanutricion.com/nosotros',

  description: 'Nuestro objetivo es brindar las herramientas para alcanzar una salud física & mental para un óptimo bienestar, a través de una nutrición de calidad, actividad física & bienestar emocional. Nuestros nutricionistas son especialistas en el área deportiva & clínica de la nutrición.',
  ogDescription: 'Nuestro objetivo es brindar las herramientas para alcanzar una salud física & mental para un óptimo bienestar, a través de una nutrición de calidad, actividad física & bienestar emocional. Nuestros nutricionistas son especialistas en el área deportiva & clínica de la nutrición.',

  ogImage: '/og-images/nosotros.png',
  twitterCard: 'summary_large_image',
})

interface SocialAction {
  icon: string
  to: string
}
interface TeamMember {
  name?: string
  position?: string
  description?: string
  imageSrc?: string
  socials?: SocialAction[]
}
const teamMembers: TeamMember[] = [
  {
    name: 'Yetlanetzi Portillo',
    position: 'nutriologa',
    description: 'Mereces una relación pacífica y evolutiva con la comida y tu cuerpo. Soy Yet Villafaña mi objetivo como nutrióloga es ayudarte a alcanzar tus objetivos nutricionales y deportivos, mientras mejoras tu salud y aprendes la importancia de una buena nutrición.  Mi área de especialidad es el deporte & alto rendimiento, tengo una maestría en nutrición deportiva y soy entrenadora certificada.',
    imageSrc: '/nutricion/people/nutri_0.png',
    socials: [
      {
        icon: 'i-ph:linkedin-logo-duotone',
        to: 'https://www.linkedin.com/in/mitzivillafaña',
      },
      {
        icon: 'i-ph:facebook-logo-duotone',
        to: 'https://www.facebook.com/YetlanetziPortillo',
      },
      {
        icon: 'i-ph:instagram-logo-duotone',
        to: 'https://www.instagram.com/ateneanutricion',
      },
    ],
  },
  {
    name: 'Daniela Cuevas',
    position: 'nutriologa',
    description: 'Me considero una persona responsable, dinámica, dedicada con mis pacientes y siempre en constante actualización.Diplomado en nutrición clínica (2020-2021). Experiencia en consulta privada desde 2018, tratando ámbitos como: control de peso, control de enfermedades metabólicas, Síndrome de Ovario Poliquístico, embarazo y lactancia.',
    imageSrc: '/nutricion/people/nutri_1.png',
    socials: [
      {
        icon: 'i-ph:instagram-logo-duotone',
        to: 'https://instagram.com/nutri.dann.cb',
      },
      {
        icon: 'i-ph:linkedin-logo-duotone',
        to: 'https://www.linkedin.com/in/daniela-cuevas-bravo-ab8ab3172',
      },
    ],
  },
  {
    name: 'Ninfa Jongitud',
    position: 'nutriologa',
    description: `Enfocada en el area clínica desde el 2019. 
    Tengo experiencia en consulta externa en pacientes que buscan un control de peso, tratamiento de enfermedades metabólicas y cambiar hábitos de alimentación.
    Me gusta llevar de la mano a mis pacientes desde una experiencia propia y científica para ayudarlos a cumplir sus objetivos.`,
    imageSrc: '/nutricion/people/nutri_2.png',
    socials: [
      {
        icon: 'i-ph-envelope-duotone',
        to: 'mailto:nportillajonguitud@gmail.com',
      },
      {
        icon: 'i-ph:linkedin-logo-duotone',
        to: 'https://www.linkedin.com/in/ninfa-andrea-portilla-jonguitud-18404a180',
      },
    ],
  },
]
</script>

<template>
  <LotusPage>
    <LotusHero
      title="Conoce quienes somos."
      image="/nutricion/clinica.jpg"
      append="Nuestro objetivo es brindar las herramientas que impulsen un cambio de hábitos para alcanzar objetivos individuales, enfocados en una Nutrición de calidad, actividad física y bienestar emocional"
    >
      <template #actions>
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
      </template>
    </LotusHero>

    <span id="CTA" />
    <section class="p-4 space-y-6">
      <header class="flex flex-col items-start gap-6 @container">
        <span class="text-[20cqw]/[1] font-extrabold sm:text-[9cqw]/[1]">
          Nuestro
          <span class="text-primary-400">Equipo.</span>
        </span>

        <span class="text-xs">
          Especialistas con amplia experiencia en areas clinica, deportiva y de alto rendimiento
        </span>
      </header>

      <div class="grid gap-6 px-6 sm:grid-cols-3">
        <LotusProfileCard
          v-for="member in teamMembers"
          :key="member.name"
          v-bind="member"
        />
      </div>
    </section>

    <!-- FAQs -->
    <section class="p-4 space-y-6">
      <header class="flex flex-col items-start gap-6 @container">
        <span class="text-[20cqw]/[1] font-extrabold sm:text-[9cqw]/[1]">
          Preguntas
          <span class="text-primary-400">frecuentes.</span>
        </span>
      </header>

      <LotusCard>
        <div class="grid sm:grid-cols-2">
          <article class="inline-grid gap-4 p-4">
            <header>
              <div>
                ¿Necesito un
              </div>
              <div class="text-2xl font-black text-primary-400">
                plan nutricional?
              </div>
            </header>

            <p class="text-sm font-light">
              La nutrición tiene total influencia en nuestro bienestar & salud de
              nuestro cuerpo. Existe un sinfín de información sobre una
              alimentación saludable y cual es la mejor manera de nutrirse, pero
              para lograr una salud optima la clave es que sea personalizada, una
              consulta de nutrición por un nutriólogo especialista te brinda las
              herramientas necesarias para saber cuales son tus necesidades
              específicas.
            </p>
          </article>

          <article class="inline-grid gap-4 p-4">
            <header>
              <div>
                ¿Cuál es el mejor
              </div>
              <div class="text-2xl font-black text-primary-400">
                plan de alimentación?
              </div>
            </header>

            <p class="text-sm font-light">
              El mejor plan de alimentación es el que nos permita realizar cambios
              dietéticos sostenibles a largo plazo, cada cuerpo es diferente por
              lo que necesita una nutrición especializada, no necesita protocolos
              de alimentación estandarizados con las mismas pautas y reglas de
              alimentación, si lo que queremos es una nutrición óptima debemos
              darle un enfoque personalizado con cambios dietéticos y pautas
              nutricionales que nos brindan un bienestar único.
            </p>
          </article>

          <article class="inline-grid gap-4 p-4">
            <header>
              <div>
                ¿Qué es un estudio
              </div>
              <div class="text-2xl font-black text-primary-400">
                epigenético nutricional?
              </div>
            </header>

            <p class="text-sm font-light">
              Es un test que analiza biomarcadores celulares, que nos brinda
              información sobre cómo la influencia del medio ambiente, entorno y
              estilo de vida, puede afectar la expresión de nuestros genes. Nos
              ayuda a saber qué alimentos debemos comer o reducir para cubrir
              nuestras necesidades nutricionales de una manera más específica y
              personalizada.
            </p>
          </article>

          <article class="inline-grid gap-4 p-4">
            <header>
              <div>
                ¿Qué hace un
              </div>
              <div class="text-2xl font-black text-primary-400">
                nutriologo deportivo?
              </div>
            </header>

            <p class="text-sm font-light">
              Un nutriólogo deportivo brinda las herramientas adecuadas para
              impulsar a un atleta de alto rendimiento, amateur o recreativo para
              que alcance su rendimiento máximo, de una manera segura y efectiva.
              creando un plan de nutrición personalizado
            </p>
          </article>
        </div>
      </LotusCard>
    </section>
  </LotusPage>
</template>
