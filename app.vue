<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="css">
  :root {
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    background: #09090b;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Hanken Grotesk', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: white;
    background: #09090b;
    min-width: 320px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #09090b;
  }

  ::-webkit-scrollbar-thumb {
    background: #27272a;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #18181b;
  }
</style>