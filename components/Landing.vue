<script setup lang="ts"></script>

<template>
  <div>
    <div
      class="landing h-[50vh] w-full bg-center bg-no-repeat bg-cover object-cover flex justify-center items-center"
    >
      <div>
        <p
          class="text-3xl font-medium tracking-wider text-center text-white lg:text-5xl"
        >
          Where Vue.js Developers Connect, <br>
        </p>
        <p
          class="pt-3 text-3xl font-medium tracking-wider text-center text-white lg:text-5xl"
        >
          Collaborate & Learn Together
        </p>
        <div
          class="flex flex-wrap justify-center pt-10 text-center upcoming gap-x-6"
        >
          <a
            href="https://www.meetup.com/vue-js-kenya/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2.5 text-xl bg-white rounded-lg"
          >
            Join Us
          </a>
          <a
            href="https://www.meetup.com/vue-js-kenya/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2.5 text-xl bg-green-500 rounded-lg"
          >
            Upcoming Events
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing {
  background-image: url("../assets/img/vuejskenyahero.jpg");
  box-shadow: inset 0 0 0 1000px rgba(1, 13, 8, 0.6);
}
</style>
