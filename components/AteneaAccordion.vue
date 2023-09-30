<template>
  <details>
    <summary
      group
      class="bg-neutral-800 p-2 rounded-xl shadow-xl transition-300 hover:scale-105 select-none cursor-pointer"
    >
      <div class="flex items-center gap-2">
        <div
          class="h-12 w-12 rounded-xl shadow-md border border-neutral-300 flex justify-center items-center"
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
