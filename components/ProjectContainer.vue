<script setup lang="ts">
  import { projects } from "@/utils/constants";
</script>

<template>
  <ul class="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full">
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