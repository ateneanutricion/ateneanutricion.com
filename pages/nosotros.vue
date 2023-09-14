<template>
  <AteneaContainer>
    <div class="col-span-2 p-4 rounded-3xl grid-rows-2">
      <div class="grid auto-rows-[192px] grid-cols-4 gap-4">
        <!-- 1 -->
        <div class="row-span-2 col-span-2 rounded-xl bg-[rgb(75_167_139)] p-4">
          <div class="h-full flex flex-col justify-between">
            <h3 class="font-black text-6xl">App&Apps</h3>

            <div class="flex gap-6 items-end justify-start tracking-tighter">
              <h3
                class="font-black text-5xl"
                style="writing-mode: vertical-lr"
              >
                Happy Inc.
              </h3>
              <p class="font-medium text-base">
                En esta app podras manejar los sitios de acceso y aplicaciones
                Happy Inc.
              </p>
            </div>
          </div>
        </div>

        <!-- Nutricion -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl bg-[rgb(169_173_217)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon
              class="i-ph:hard-drives-duotone h-6 w-6 group-hover:animate-wobble"
            />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">AdSis</h3>
              <p class="text-xs">adsis.corporativomty</p>
            </div>

            <Badge class="bg-black text-white border-0!">Abrir</Badge>
          </div>
        </div>

        <div
          group
          class="row-span-1 col-span-1 rounded-xl bg-[rgb(200_233_94)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon
              class="i-ph:smiley-duotone h-6 w-6 group-hover:animate-wobble"
            />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">
                Portal Feliz
              </h3>
              <p class="text-xs">portal.prestamofeliz</p>
            </div>

            <Badge class="bg-black text-white border-0!">Abrir</Badge>
          </div>
        </div>

        <div
          group
          class="row-span-1 col-span-1 rounded-xl bg-[rgb(169_173_217)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon
              class="i-ph:desktop-duotone h-6 w-6 group-hover:animate-wobble"
            />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">
                Mesa de Control
              </h3>
              <p class="text-xs">AIO</p>
            </div>

            <Badge class="bg-black text-white border-0!">Abrir</Badge>
          </div>
        </div>

        <!-- CONTACTO -->
        <div
          class="row-span-2 col-span-1 rounded-xl bg-[rgb(33_50_216)] overflow-hidden"
        >
          <div class="relative h-full flex flex-col justify-end">
            <img
              src="@/assets/happy.jpg"
              class="h-full w-full object-cover transition transition-duration-300 hover:scale-110"
            />
          </div>
        </div>

        <!-- Hapy PDF -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl bg-[rgb(251_252_211)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon
              class="i-ph:file-pdf-duotone h-6 w-6 group-hover:animate-wobble"
            />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Hapy PDF</h3>
              <p class="text-xs">Abre PDFs de manera segura</p>
            </div>

            <Badge class="bg-black text-white border-0!">Abrir</Badge>
          </div>
        </div>

        <!-- Happy Phone -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-[rgb(252_235_211)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon
              class="i-ph:phone-call-duotone h-6 w-6 group-hover:animate-wobble"
            />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">
                Happy Phone
              </h3>
              <p class="text-xs">Llamadas VoIP de manera segura</p>
            </div>

            <Badge class="bg-black text-white border-0!">Abrir</Badge>
          </div>
        </div>

        <!-- NEW -->
        <div
          group
          class="row-span-1 col-span-1 rounded-xl border-2 border-slate-400/10 bg-[rgb(247_211_207)] p-4"
        >
          <div class="h-full flex flex-col justify-between">
            <UnoIcon
              class="i-ph:plus-circle-duotone h-10 w-10 group-hover:animate-wobble"
            />

            <div>
              <h3 class="font-extrabold text-xl tracking-tighter">Nuevo</h3>
              <p class="text-xs">Agregar un nuevo sitio...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AteneaContainer>
</template>
