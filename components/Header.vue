<template>
  <header class="header">
    <div
      class="header h-16 w-full flex justify-around bg-white text-black text-lg font-normal"
    >
      <div class="pt-4">
        <a href="/">Vue.js Kenya</a>
      </div>
      <div class="pt-4">
        <nuxt-link to="/about" class="pr-2">About</nuxt-link>
        <nuxt-link to="/blog" class="pr-2">Blog</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style></style>
