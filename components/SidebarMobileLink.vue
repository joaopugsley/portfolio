<script setup lang="ts">
  const route = useRoute()

  export interface SidebarMobileLinkProps {
    href: string;
  }

  const { href } = defineProps<SidebarMobileLinkProps>();

  const isActive = computed(() => String(route.path) === href);
</script>

<template>
  <NuxtLink
    :to="href"
    class="flex relative items-center space-x-2 w-full h-full inset-0 p-3"
    :class="[isActive ? 'text-white bg-zinc-900 border border-zinc-800 rounded-xl' : '']"
  >
    <slot></slot>
  </NuxtLink>
</template>