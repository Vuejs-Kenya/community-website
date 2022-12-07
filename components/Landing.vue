<script setup lang="ts"></script>

<template>
  <div>
    <div class="landing w-full bg-center bg-no-repeat bg-cover object-cover">
      <p class="text-3xl lg:text-5xl text-center pt-16 md:pt-28 tracking-wider font-medium text-white">
        Where Vue.js Developers connect, <br />
      </p>
      <p class="text-3xl lg:text-5xl text-center pt-3 tracking-wider font-medium text-white">
        Collaborate & Learn Together
      </p>
      <div class="upcoming pt-20 text-center flex flex-wrap justify-center gap-y-3">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          class="
            py-2.5
            px-4
            text-xl
            rounded-md
            bg-black
            text-white
            hover:bg-white hover:text-black
          "
        >
          Upcoming Events
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          class="
            py-2
            px-4
            ml-3
            text-xl
            rounded-md
            border-2 border-gray-900 text-white
            hover:text-white hover:border-white
          "
        >
          Join Our Telegram
        </a>
      </div>
    </div>
    <div
      class="
        subscription-form
        mx-auto
        lg:w-1/2
        md:w-3/4
        sm:w-3/4
        min-h-52
        flex
        justify-center
        items-center
        relative
        sm:-top-20
        mt-8 sm:mt-0
      "
    >
      <!-- be the first to know section -->
      <div class="text-center text-black bg-white rounded p-3 w-full lg:py-5 shadow-2xl">
        <h2 class="text-2xl font-bold tracking-wider leading-10">
          Be The First To Know
        </h2>
        <p class="tracking-wid text-xl leading-10 px-4">
          Join our newsletter. 700 people already subscribed !
        </p>
        <form method="post" @submit.prevent="" class="mt-2">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            class="py-2.5 px-4 shadow-lg mr-0 rounded-sm focus-none w-full sm:w-3/5 border border-gray-300"
          />
          <button
            type="submit"
            class="py-2.5 px-4 bg-black text-white ml-0 shadow-xl text-xl rounded mt-4 sm:mt-0"
          >
            Subscribe
          </button>
          <p class="text-gray-400 py-3">
            No spam. Unsubscribe anytime
          </p>
        </form>
      </div>
      <!-- end of be the first to know section -->
    </div>
  </div>
</template>

<style scoped>
.landing {
  background-image: url("../assets/img/vuejskenyahero.jpg");
  box-shadow: inset 0 0 0 1000px rgba(9, 184, 104, 0.82);
  height: 65vh;
}
</style>
