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
    background: rgb(24, 24, 27);
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
    background: rgb(24, 24, 27);
    min-width: 320px;
  }
</style>