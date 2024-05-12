<template>
  <div class="w-full flex flex-col p-8 md:p-28 xl:p-36 2xl:p-48">
    <section class="w-full sm:w-2/3 z-10">
      <h1 class="text-2xl lg:text-3xl text-zinc-400"><span class="text-white">Olá!</span> Me chamo <span class="text-white">João Vitor</span>. Eu sou um desenvolvedor <span class="text-white">full-stack</span>.</h1>
      <div class="flex flex-row mt-4 space-x-3">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 rounded-lg bg-white text-zinc-950 text-xl border border-zinc-800 hover:bg-transparent hover:text-white transition-all duration-500 space-x-2 flex items-center"
        >
          <Icon name="mdi:file-code"/>
          <span class="font-semibold text-base">
            Currículo
          </span>
          <Icon name="ic:round-keyboard-arrow-right"/>
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 rounded-lg bg-zinc-900 text-white text-xl border border-zinc-800 hover:brightness-150 transition-all duration-200 space-x-2 flex items-center"
        >
          <Icon name="mdi:file-code"/>
          <span class="font-semibold text-base">
            E-Mail
          </span>
          <Icon name="ic:round-keyboard-arrow-right"/>
        </a>
      </div>
    </section>
    <section class="w-full z-10 mt-12">
      <h2 class="text-2xl">Projetos em destaque</h2>
      <HighlightedProjects/>
    </section>
  </div>
</template>