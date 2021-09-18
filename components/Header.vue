<template>
  <header class="header">
    <div
      class="
        header
        h-16
        w-full
        flex
        justify-around
        bg-gray-300
        text-black text-lg
        font-normal
      "
    >
      <div class="pt-4">
        <a href="/">Vue.js Kenya</a>
      </div>
      <div class="pt-4">
        <a href="/about" class="pr-8">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>
