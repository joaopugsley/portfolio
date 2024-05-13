<script setup lang="ts">
  const projects = [
    {
      image: "/images/projects/portfolio.png",
      title: "JOAOPUGSLEY - PORTFÓLIO",
      description: "Esse portfólio é open-source! Considere deixar uma estrela ⭐ no GitHub.",
      live_url: "https://joaopugsley.dev",
      source_code: "https://github.com/joaopugsley/portfolio",
    },
    {
      image: "/images/projects/howtocs2.png",
      title: "HOWTOCS2 - Blog",
      description: "Portal de informações sobre o Counter Strike brasileiro.",
      live_url: "https://howtocs2.com",
      source_code: "https://github.com/joaopugsley/howtocs2",
    },
    {
      image: "/images/projects/twitchroulette.png",
      title: "TwitchRoulette",
      description: "Realização de sorteios na twitch.tv de maneira fácil, prática e eficaz.",
      live_url: "https://twitchroulette.live",
      source_code: "https://github.com/joaopugsley/twitchroulette",
    },
    {
      image: "/images/projects/steam-tools.png",
      title: "SteamTools",
      description: "Ferramentas que podem ser úteis na utilização da Steam.",
      live_url: "https://steam-tools-eta.vercel.app/",
      source_code: "https://github.com/joaopugsley/steam-tools",
    },
    {
      image: "/images/projects/cs-wrapper.png",
      title: "CS-WRAPPER",
      description: "Visualização de inventários de forma simplificada.",
      source_code: "https://github.com/joaopugsley/cs-wrapper",
    },
  ]
</script>

<template>
  <ul class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
    <Project
      v-for="project in projects"
      :image="project.image"
      :title="project.title"
      :description="project.description"
      :live_url="project.live_url"
      :source_code="project.source_code"
    />
  </ul>
</template>