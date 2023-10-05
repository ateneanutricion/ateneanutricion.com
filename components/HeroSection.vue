<template>
  <section class="px-6">
    <div
      class="mx-auto h-full max-w-[80ch] flex flex-col items-center justify-center container"
    >
      <slot name="preppend" />

      <div class="h-full w-full">
        <slot />
      </div>
      <slot name="append" />
    </div>
  </section>
</template>
