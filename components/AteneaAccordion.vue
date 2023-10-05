<template>
  <details>
    <summary
      group
      class="cursor-pointer select-none rounded-xl bg-neutral-800 p-2 shadow-xl transition-300 hover:scale-105"
    >
      <div class="flex items-center gap-2">
        <div
          class="h-12 w-12 flex items-center justify-center border border-neutral-300 rounded-xl shadow-md"
        >
          <span class="transition-300 group-hover:scale-110">
            <slot name="icon" />
          </span>
        </div>

        <div class="font-semibold text-neutral-300">
          <slot name="title" />
        </div>
      </div>
    </summary>

    <div class="p-4 pt-2">
      <slot />
    </div>
  </details>
</template>

<style scoped>
@keyframes sweep {
  0% {
    opacity: 0;
    margin-left: -10px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}
details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
