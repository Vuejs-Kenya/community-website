<template>
  <footer class="bg-gray-300">
    <div class="text-center p-3 text-sm">
      <h4>Vue.js Kenya @2020 - {{ year }} MIT License</h4>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>
