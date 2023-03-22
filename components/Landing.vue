<script setup lang="ts"></script>

<template>
  <div>
    <div
      class="landing h-[40vh] w-full bg-center bg-no-repeat bg-cover object-cover flex justify-center items-center"
    >
      <div>
        <p
          class="text-3xl lg:text-5xl text-center tracking-wider font-medium text-white"
        >
          Where Vue.js Developers Connect, <br>
        </p>
        <p
          class="text-3xl lg:text-5xl text-center pt-3 tracking-wider font-medium text-white"
        >
          Collaborate & Learn Together
        </p>
        <div
          class="upcoming pt-10 text-center flex flex-wrap justify-center gap-x-6"
        >
          <a
            href="https://www.meetup.com/vue-js-kenya/"
            target="_blank"
            rel="noopener noreferrer"
            class="py-2.5 px-4 text-xl rounded-sm bg-white"
          >
            Join Us
          </a>
          <a
            href="https://www.meetup.com/vue-js-kenya/"
            target="_blank"
            rel="noopener noreferrer"
            class="py-2 px-4 ml-3 text-xl rounded-sm bg-green-500"
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
