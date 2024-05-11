<script setup lang="ts">
  export interface SidebarMobileSocialMediaLinkProps {
    href: string;
    icon: string;
    title: string;
  }

  const { href, icon, title } = defineProps<SidebarMobileSocialMediaLinkProps>();
</script>

<template>
  <a
    class="flex relative items-center space-x-2 w-full h-full inset-0 p-3"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon :name="icon" color="white"/>
    <p class="text-base text-zinc-400 flex items-center w-full justify-between">
      <span>
        {{ title }}
      </span>
      <Icon name="tabler:external-link" color="text-zinc-400"/>
    </p>
  </a>
</template>