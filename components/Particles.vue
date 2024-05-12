<script setup lang="ts">
  const options = {
    particles: {
      number: {
        value: 230,
      },
      move: {
        enable: true,
        random: true,
        speed: 0.3,
        straight: false,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
        value: { min: 0.1, max: 0.6 },
      },
      size: {
        value: { min: 0.2, max: 2 },
      },
    },
  };
</script>

<template>
  <NuxtParticles
    id="tsparticles"
    :options="options"
    class="-z-10"
  ></NuxtParticles>
</template>