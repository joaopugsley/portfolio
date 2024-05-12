<script setup lang="ts">
  useSeoMeta({
    title: "JoãoPugsley | Web Developer",
    ogTitle: "JoãoPugsley | Web Developer",
    description: "Explore o portfólio de desenvolvimento web de João Pugsley, que exibe uma ampla variedade de sites criativos e responsivos.",
    ogDescription: "Explore o portfólio de desenvolvimento web de João Pugsley, que exibe uma ampla variedade de sites criativos e responsivos.",
    keywords: "desenvolvimento web, web design, portfolio, João Vitor Pugsley, João Pugsley, desenvolvimento front-end, desenvolvimento back-end, design responsivo",
    viewport: "width=device-width, initial-scale=1",
    ogType: "website",
    ogUrl: "https://joaopugsley.dev",
    ogSiteName: "JoãoPugsley | Web Developer"
  })
</script>

<template>
  <Sidebar/>
  <main class="p-2 md:pl-[104px]">
    <slot></slot>
  </main>
  <Footer/>
  <Particles class="-z-10"/>
</template>