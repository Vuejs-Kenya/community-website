<template>
  <footer class="bg-gray-300 fixed bottom-0 w-full">
    <div class="text-center py-6 text-xl">
      <h4>Vue.js Kenya @2020 - {{ year }} MIT License</h4>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style>
footer {
  background-color: #ececec;
}
</style>
