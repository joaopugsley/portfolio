<script setup lang="ts">
  const mainSkills = [
    {
      icon: "tabler:brand-typescript",
      title: "TypeScript",
    },
    {
      icon: "tabler:brand-nuxt",
      title: "Nuxt",
    },
    {
      icon: "tabler:brand-vue",
      title: "Vue",
    },
    {
      icon: "tabler:brand-nextjs",
      title: "Next.js",
    },
    {
      icon: "tabler:brand-react",
      title: "React",
    },
    {
      icon: "simple-icons:dotnet",
      title: ".NET",
    },
    {
      icon: "simple-icons:nestjs",
      title: "Nest.js",
    },
    {
      icon: "mdi:tailwind",
      title: "TailwindCSS",
    },
    {
      icon: "tabler:brand-rust",
      title: "Rust",
    },
    {
      icon: "simple-icons:express",
      title: "Express",
    },
    {
      icon: "akar-icons:postgresql-fill",
      title: "PostgreSQL",
    },
    {
      icon: "tabler:brand-mongodb",
      title: "MongoDB",
    },
    {
      icon: "tabler:brand-firebase",
      title: "Firebase",
    },
    {
      icon: "mdi:docker",
      title: "Docker",
    },
  ]
</script>

<template>
  <ul class="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1 rounded-xl overflow-hidden">
    <li
      v-for="skill in mainSkills"
      class="w-full bg-zinc-900 p-5 space-x-2 flex items-center first:rounded-tl-xl last:rounded-br-xl border border-transparent hover:border-zinc-800"
    >
      <Icon
        :name="skill.icon"
        class="text-4xl text-zinc-500"
      />
      <span>
        {{ skill.title }}
      </span>
    </li>
  </ul>
</template>