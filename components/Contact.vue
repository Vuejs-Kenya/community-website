<script setup lang="ts">
import TwitterContactUs from '~/components/icons/contactme/twitter-contact-us.vue'
import FacebookContactUs from '~/components/icons/contactme/facebook-contact-us.vue'
import InstagramContactUs from '~/components/icons/contactme/instagram-contact-us.vue'
</script>

<template>
  <section class="text-gray-600 body-font relative dark:bg-[#010D08] dark:text-[#E9FEF5]">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-[#E9FEF5]">
          Contact Us
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          We are constantly growing our community, feel free to reach out.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input id="name" type="text" name="name" placeholder="Enter name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input id="email" type="email" name="email" placeholder="Enter email address" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" placeholder="Enter message here" class="w-full bg-gray-100 bg-opacity-50 dark:placeholder-text-white rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              Reach Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
