<template>
  <div class="dark [--navbar-height:4rem] bg-black font-sans">
    <LotusNavbar />

    <main>
      <slot />
    </main>

    <LotusFooter />
  </div>
</template>
