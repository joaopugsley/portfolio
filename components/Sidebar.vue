<script setup lang="ts">
  const sidebarOpened = useState('sidebarOpened', () => false);
  const toggleSidebar = () => {
    sidebarOpened.value = !sidebarOpened.value
  }

  const sidebarPages = [
    {
      href: "/",
      icon: "material-symbols:home-outline",
      title: "Início",
    },
    {
      href: "/about",
      icon: "material-symbols:account-circle",
      title: "Sobre",
    },
    {
      href: "/projects",
      icon: "material-symbols:work-outline",
      title: "Projetos",
    },
  ]

  const sidebarLinks = [
    {
      href: "https://github.com/joaopugsley",
      icon: "mdi:github",
      title: "Github",
    },
    {
      href: "https://www.linkedin.com/in/joaopugsley",
      icon: "mdi:linkedin",
      title: "LinkedIn",
    },
    {
      href: "mailto:joaopugsleyy@gmail.com",
      icon: "material-symbols:mail",
      title: "E-Mail",
    },
  ]

</script>

<template>

  <!-- mobile -->
  <button
    @click="toggleSidebar"
    class="flex fixed md:hidden z-40 items-center gap-2 text-white bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:brightness-125 transition-all bottom-4 left-4"
  >
    <Icon 
      name="ic:outline-keyboard-command-key"
      color="white"
    />
  </button>

  <!-- mobile -->
  <nav 
    class="flex flex-col space-y-2 fixed md:hidden h-screen w-4/5 p-4 bg-zinc-950 text-white text-xl transition-all ease-in-out duration-300 z-30 overflow-auto"
    :class="[sidebarOpened ? 'translate-x-0' : '-translate-x-full']"
  >
    <h1 class="text-xl">JoãoPugsley</h1>
    <ul class="flex flex-col space-y-2 mt-4 text-zinc-400">
      <h3 class="text-base">Navegação</h3>
      <SidebarMobileLink
        v-for="page in sidebarPages"
        :href="page.href"
        :icon="page.icon"
        :title="page.title"
      />
    </ul>
    <ul class="flex flex-col space-y-2 mt-4 text-zinc-400">
      <h3 class="text-base">Social</h3>
      <SidebarMobileSocialMediaLink
        v-for="link in sidebarLinks"
        :href="link.href"
        :icon="link.icon"
        :title="link.title"
      />
    </ul>
  </nav>

  <!-- desktop -->
  <nav
    class="hidden md:flex fixed h-screen bg-zinc-950 shadow-xl border-r border-zinc-900 text-white text-xl z-20 transition-all duration-300 p-4"
    :class="[sidebarOpened ? 'w-72' : 'w-24']"
  >
    <button
      @click="toggleSidebar"
      class="hidden md:flex absolute bg-zinc-900 border border-zinc-800 rounded-full -right-[15px] top-[calc(50vh-15px)] items-center justify-center p-1 transition-all duration-200 hover:brightness-150"
    >
      <Icon v-if="sidebarOpened" name="ic:round-keyboard-arrow-left" color="white"/>
      <Icon v-else="sidebarOpened" name="ic:round-keyboard-arrow-right" color="white"/>
    </button>

    <div class="flex flex-col space-y-2 mt-4 w-full text-zinc-400">
      <h3 v-if="sidebarOpened" class="text-base anim-fade">Navegação</h3>
      <ul class="flex flex-col space-y-2 justify-center items-center w-full">
        <SidebarDesktopLink
          v-for="page in sidebarPages"
          :href="page.href"
          :icon="page.icon"
          :title="page.title"
          :opened="sidebarOpened"
        />
      </ul>
      <h3 v-if="sidebarOpened" class="text-base anim-fade">Social</h3>
      <hr v-else class="w-full border-zinc-800">
      <ul class="flex flex-col space-y-2 justify-center items-center w-full">
        <SidebarDesktopSocialMediaLink
          v-for="link in sidebarLinks"
          :href="link.href"
          :icon="link.icon"
          :title="link.title"
          :opened="sidebarOpened"
        />
      </ul>
    </div>
  </nav>
</template>

<style lang="css">
  .anim-fade {
    animation: opacity-fade 300ms forwards linear;
  }

  @keyframes opacity-fade {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
</style>