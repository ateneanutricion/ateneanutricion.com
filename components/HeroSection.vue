<template>
  <section class="px-6">
    <div
      class="h-full flex flex-col items-center justify-center container max-w-[80ch] mx-auto"
    >
      <slot name="preppend" />

      <div class="h-full w-full">
        <slot />
      </div>
      <slot name="append" />
    </div>
  </section>
</template>
