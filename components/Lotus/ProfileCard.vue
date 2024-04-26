<script lang="ts" setup>
interface SocialAction {
  icon: string
  to: string
}
interface Props {
  imageSrc?: string
  name?: string
  position?: string
  description?: string
  socials?: SocialAction[]
}
defineProps<Props>()
</script>

<template>
  <LotusCard
    as="article"
    :ui="{ ring: '', shadow: '', body: { padding: '' }, footer: { padding: '' } }"
  >
    <NuxtImg
      v-if="imageSrc"
      :src="imageSrc"
      :alt="`Fotografía de la nutrióloga ${name}`"
      loading="lazy"
      preset="hero"
      class="w-full rounded-t-[3rem] bg-primary object-contain"
    />

    <template #footer>
      <div class="border-2 rounded-b-3xl px-4 py-4 text-center text-neutral-600 sm:px-6">
        <span class="block text-sm uppercase">{{ name }}</span>
        <span class="text-xs text-neutral-500 uppercase">{{ position }}</span>

        <div class="py-1">
          <LotusButton
            v-for="social in socials"
            :key="social.to"
            :to="social.to"
            :icon="social.icon"
            target="_blank"
            variant="ghost"
            square
          />
        </div>

        <details
          v-if="description"
          class="text-xs"
        >
          <summary class="cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
            <LotusButton
              label="ver mas..."
              variant="soft"
              size="xs"
              type="span"
              block
            />
          </summary>

          <div class="pt-2">
            {{ description }}
          </div>
        </details>
      </div>
    </template>
  </LotusCard>
</template>
