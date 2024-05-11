<script setup lang="ts">
  interface SidebarDesktopSocialMediaLinkProps {
    href: string;
    icon: string;
    title: string;
    opened: boolean;
  }

  const { href, icon, title, opened } = defineProps<SidebarDesktopSocialMediaLinkProps>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="h-12 rounded-xl flex flex-row items-center drop-shadow-xl hover:brightness-150"
    :class="[opened ? 'w-full px-3 space-x-2' : 'justify-center w-12']"
  >
    <Icon :name="icon" class="text-2xl"/>
    <span v-if="opened" class="text-base">{{ title }}</span>
  </a>
</template>