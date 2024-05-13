<script setup lang="ts">
  interface ProjectProps {
    image: string;
    title: string;
    description: string;
    live_url?: string;
    source_code?: string;
  }
  const { image, title, description, live_url, source_code } = defineProps<ProjectProps>();
</script>

<template>
  <li class="flex flex-col rounded-xl items-center justify-center border border-zinc-800 bg-zinc-950 transition-all duration-300 group overflow-hidden min-h-[405px] sm:min-h-0">
    <img :src="image" alt="Foto do projeto" class="w-full h-full aspect-video md:group-hover:blur-sm md:group-hover:opacity-60 transition-all duration-300">

    <!-- mobile -->
    <div class="flex md:hidden flex-col p-4 w-full">
      <div class="flex flex-col w-full">
        <h2 class="text-base sm:text-lg xl:text-xl">{{ title }}</h2>
        <p class="text-sm sm:text-base text-zinc-400">{{ description }}</p>
      </div>
      <div v-if="source_code || live_url" class="flex flex-col gap-2 w-full mt-2">
        <a
          v-if="source_code"
          :href="source_code"
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 rounded-lg bg-zinc-900 text-white text-xl border border-zinc-800 hover:brightness-150 transition-all duration-200 space-x-2 flex items-center"
        >
          <Icon name="mdi:github"/>
          <p class="text-base flex w-full items-center justify-between">
            <span>
              GitHub
            </span>
            <Icon name="tabler:external-link" color="text-zinc-400"/>
          </p>
        </a>
        <a
          v-if="live_url"
          :href="live_url"
          target="_blank"
          rel="noopener noreferrer"
          class="px-3 py-2 rounded-lg bg-zinc-900 text-white text-xl border border-zinc-800 hover:brightness-150 transition-all duration-200 space-x-2 flex items-center"
        >
          <Icon name="fluent:live-20-filled"/>
          <p class="text-base flex w-full items-center justify-between">
            <span>
              Visite o site
            </span>
            <Icon name="tabler:external-link" color="text-zinc-400"/>
          </p>
        </a>
      </div>
    </div>

    <!-- desktop -->
    <div class="hidden md:flex flex-col w-full bg-zinc-950 duration-300 group-hover:-translate-y-[30%] border-t border-zinc-800 text-white">
      <div class="w-full p-6 h-28">
        <div class="flex flex-col w-full">
          <h2 class="text-base xl:text-xl">
            {{ title }}
          </h2>
          <p class="text-xs lg:text-base text-zinc-400">
            {{ description }}
          </p>
        </div>
        <div v-if="source_code || live_url" class="flex flex-row space-x-2 w-full mt-2">
          <a
            v-if="source_code"
            :href="source_code"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 w-1/2 rounded-lg bg-zinc-900 text-white text-xl border border-zinc-800 hover:brightness-150 transition-all duration-200 scale-0 group-hover:scale-100 flex items-center space-x-2"
          >
            <Icon name="mdi:github"/>
            <p class="text-base flex w-full items-center justify-between">
              <span>
                GitHub
              </span>
              <Icon name="tabler:external-link" color="text-zinc-400"/>
            </p>
          </a>
          <a
            v-if="live_url"
            :href="live_url"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-2 w-1/2 rounded-lg bg-zinc-900 text-white text-xl border border-zinc-800 hover:brightness-150 transition-all duration-200 scale-0 group-hover:scale-100 flex items-center space-x-2"
          >
            <Icon name="fluent:live-20-filled"/>
            <p class="text-base flex w-full items-center justify-between">
              <span>
                Visite o site
              </span>
              <Icon name="tabler:external-link" color="text-zinc-400"/>
            </p>
          </a>
        </div>
      </div>
    </div>
  </li>
</template>