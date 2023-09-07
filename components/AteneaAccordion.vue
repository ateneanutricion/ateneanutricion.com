<template>
  <details>
    <summary
      group
      class="bg-gray-100 p-2 rounded-full shadow-xl transition-300 hover:scale-105 select-none"
    >
      <div class="flex items-center gap-2">
        <div class="h-12 w-12 rounded-full shadow-md border border-white flex justify-center items-center">
          <span class="transition-300 group-hover:scale-110">
            <slot name="icon" />
          </span>
        </div>

        <div class="font-semibold text-gray-800">
          <slot name="title" />
        </div>
      </div>
    </summary>

    <div class="p-4 pt-2 text-gray-500">
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
