<script setup lang="ts"></script>

<template>
  <header class="header px-3 md:px-5">
    <div
      class="header h-20 w-full flex justify-between bg-white text-black text-lg font-normal lg:container mx-auto"
    >
      <div >
        <nuxt-link to="/" class="flex h-full">
          <img src="~/assets/vuejskenyalogo.png" alt="Vue.js Kenya" class="h-full">
          <span class="hidden sm:block my-auto font-semibold">
            Vue.js Kenya
          </span>
        </nuxt-link>
      </div>
      <div class="py-2 flex gap-x-8">
        <nuxt-link to="/about" class="my-auto">
          About
        </nuxt-link>
        <nuxt-link to="/blogs" class="my-auto">
          Blog
        </nuxt-link>
        <nuxt-link to="/contact" class="my-auto">
          Contact
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style></style>
