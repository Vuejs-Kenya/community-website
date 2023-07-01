<script setup lang="ts">
import MoonIcon from '@/components/icons/MoonIcon.vue'
import SunIcon from '@/components/icons/SunIcon.vue'

const router = useRoute()
const colorMode = useColorMode()

function setMode() {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
    return
  }
  colorMode.preference = 'dark'
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-[#010D08]">
    <div
      class="flex justify-around w-full h-16 mx-auto text-lg font-normal text-black dark:text-[#E9FEF5] lg:container"
    >
      <nuxt-link to="/">
        <div class="flex flex-row items-center gap-x-2 py-2">
          <div class="logo-cover">
            <img
              src="~/assets/vuejskenyalogo.svg"
              alt="Vue.js Kenya"
              class="object-cover"
            />
          </div>
          <span class="hidden my-auto font-semibold sm:block">
            Vuejs Kenya
          </span>
        </div>
      </nuxt-link>
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
        <button class="w-10 h-10 rounded-full border border-gray-300 items-center flex justify-center my-auto" @click="setMode">
          <MoonIcon v-if="$colorMode.value === 'light'" />
          <SunIcon v-else />
        </button>
      </div>
    </div>
  </header>
</template>

<style>
.logo-cover img {
  height: 3rem;
  width: 3rem;
}
</style>
