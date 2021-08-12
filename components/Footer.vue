<template>
  <footer>
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
footer{
  background-color: var(--gray-100);
}
</style>
