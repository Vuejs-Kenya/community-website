<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-300 w-full">
    <div class="text-center py-6 text-xl">
      <p>Vue.js Kenya @2020 - {{ year }} MIT License</p>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #ececec;
}
</style>
