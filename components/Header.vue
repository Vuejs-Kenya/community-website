<script setup lang="ts">
const router = useRoute()
</script>

<template>
  <header class="sticky top-0 z-50 bg-white">
    <div
      class="flex justify-around w-full h-16 mx-auto text-lg font-normal text-black bg-white lg:container"
    >
      <div>
        <nuxt-link to="/" class="flex gap-x-2">
          <img
            src="~/assets/vuejskenyalogo.png"
            alt="Vue.js Kenya"
            class="object-cover h-14 w-14"
          >
          <span class="hidden my-auto font-semibold sm:block">
            Vuejs Kenya
          </span>
        </nuxt-link>
      </div>
      <div class="flex py-2 gap-x-8">
        <nuxt-link
          to="/about"
          class="my-auto transition hover:underline hover:underline-offset-8 hover:font-semibold"
          :class="
            router.path === '/about'
              ? `font-bold underline underline-offset-8`
              : ` `
          "
        >
          About
        </nuxt-link>
        <nuxt-link
          to="/blogs"
          class="my-auto transition hover:underline hover:underline-offset-8 hover:font-semibold"
          :class="
            router.path === '/blogs'
              ? `font-semibold underline underline-offset-8`
              : ` `
          "
        >
          Blog
        </nuxt-link>
        <nuxt-link
          to="/contact"
          class="my-auto transition hover:underline hover:underline-offset-8 hover:font-semibold"
          :class="
            router.path === '/contact'
              ? `font-semibold underline underline-offset-8`
              : ` `
          "
        >
          Contact
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style></style>
