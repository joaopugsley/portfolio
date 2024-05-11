<script setup lang="ts">
  const sidebarOpened = useState('sidebarOpened', () => false);
  const toggleSidebar = () => {
    sidebarOpened.value = !sidebarOpened.value
  }
</script>

<template>

  <!-- mobile -->
  <button
    @click="toggleSidebar"
    class="flex fixed md:hidden z-30 items-center gap-2 text-white bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:brightness-125 transition-all bottom-4 left-4"
  >
    <Icon 
      name="ic:outline-keyboard-command-key"
      color="white"
    />
  </button>

  <!-- mobile -->
  <nav 
    class="flex flex-col space-y-2 fixed md:hidden h-screen w-4/5 p-4 bg-zinc-950 text-white text-xl transition-all ease-in-out duration-300 z-20 overflow-auto"
    :class="[sidebarOpened ? 'translate-x-0' : '-translate-x-full']"
  >
    <h1 class="text-xl">JoãoPugsley</h1>
    <ul class="flex flex-col space-y-2 mt-4 text-zinc-400">
      <h3 class="text-base">Navegação</h3>
      <SidebarMobileLink href="/">
        <Icon name="material-symbols:home-outline" color="white"/>
        <span class="text-base">Início</span>
      </SidebarMobileLink>
      <SidebarMobileLink href="/about">
        <Icon name="material-symbols:account-circle" color="white"/>
        <span class="text-base">Sobre</span>
      </SidebarMobileLink>
      <SidebarMobileLink href="/projects">
        <Icon name="material-symbols:work-outline" color="white"/>
        <span class="text-base">Projetos</span>
      </SidebarMobileLink>
    </ul>
    <ul class="flex flex-col space-y-2 mt-4 text-zinc-400">
      <h3 class="text-base">Social</h3>
      <a
        class="flex relative items-center space-x-2 w-full h-full inset-0 p-3"
        href="https://github.com/joaopugsley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="mdi:github" color="white"/>
        <p class="text-base text-zinc-400 flex items-center w-full justify-between">
          <span>
            Github
          </span>
          <Icon name="tabler:external-link" color="text-zinc-400"/>
        </p>
      </a>
      <a
        class="flex relative items-center space-x-2 w-full h-full inset-0 p-3"
        href="https://www.linkedin.com/in/joaopugsley"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="mdi:linkedin" color="white"/>
        <p class="text-base text-zinc-400 flex items-center w-full justify-between">
          <span>
            LinkedIn
          </span>
          <Icon name="tabler:external-link" color="text-zinc-400"/>
        </p>
      </a>
      <a
        class="flex relative items-center space-x-2 w-full h-full inset-0 p-3"
        href="mailto:joaopugsleyy@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="material-symbols:mail" color="white"/>
        <p class="text-base text-zinc-400 flex items-center w-full justify-between">
          <span>
            E-Mail
          </span>
          <Icon name="tabler:external-link" color="text-zinc-400"/>
        </p>
      </a>
    </ul>
  </nav>
</template>