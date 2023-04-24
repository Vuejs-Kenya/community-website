<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#E9FEF5] w-full dark:bg-[#022817] dark:text-[#E9FEF5]">
    <div class="w-3/5 mx-auto border-b-2 border-[rgba(233, 254, 245, 0.5)] py-6">
      <h2 class="text-2xl py-3 font-semibold">
        Vuejs Kenya
      </h2>
      <p>Where Vue Developers Connect, Collaborate & Learn Together</p>
      <div class="flex justify-between pt-8">
        <div class="w-[300px] flex flex-col gap-y-3">
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Blog</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Careers</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Newsletter</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Sponsor us</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Past Speakers</a>
        </div>
        <div class="w-[300px] flex flex-col gap-y-3">
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Upcoming Events</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Past Events</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Code of Conduct</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Open Source</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Report A Bug</a>
        </div>
      </div>
      <div class="flex justify-between border-t-2 border-[rgba(233, 254, 245, 0.5)] py-6 mt-5">
        <div class="w-[300px] flex flex-col gap-y-3">
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Email us</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Meetup</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Facebook</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">LinkedIn</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Twitter</a>
        </div>
        <div class="w-[300px] flex flex-col gap-y-3">
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Telegram</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Slack</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">GitHub</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Whatsapp</a>
          <a href="http://" target="_blank" rel="noopener noreferrer" class="hover:underline hover:underline-offset-8 hover:font-semibold text-base">Youtube</a>
        </div>
      </div>
    </div>
    <div class="text-center py-6 text-xl">
      <p>Vue.js Kenya @2020 - {{ year }} MIT License</p>
    </div>
  </footer>
</template>
