<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex justify-between">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img src="./assets/tailwindcss.svg" class="logo tailwindcss" alt="tailwindcss logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + tailwindcss" />
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.tailwindcss:hover {
  filter: drop-shadow(0 0 2em #38bdf8aa);
}
</style>
