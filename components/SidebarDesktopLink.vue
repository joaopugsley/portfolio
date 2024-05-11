<script setup lang="ts">
  const route = useRoute()

  interface SidebarDesktopLinkProps {
    href: string;
    icon: string;
    title: string;
    opened: boolean;
  }

  const { href, icon, title, opened } = defineProps<SidebarDesktopLinkProps>();

  const isActive = computed(() => String(route.path) === href);
</script>

<template>
  <NuxtLink
    :to="href"
    class="h-12 rounded-xl flex flex-row items-center drop-shadow-xl hover:brightness-150"
    :class="[opened ? 'w-full px-3 space-x-2' : 'justify-center w-12', isActive ? 'bg-zinc-900 border border-zinc-800 text-white': 'text-zinc-400']"
  >
    <Icon :name="icon" :color="[isActive ? 'white' : '']" class="text-2xl"/>
    <span v-if="opened" class="text-base">{{ title }}</span>
  </NuxtLink>
</template>