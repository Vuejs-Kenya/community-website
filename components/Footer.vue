<template>
  <footer class="bg-gray-300 h-14">
    <div class="text-center pt-3.5 text-xl">
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