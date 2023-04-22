<script lang="ts" setup>
import { speakers } from '@/utils/speakers'
</script>

<template>
  <div class="py-6">
    <p class="py-4 text-4xl font-semibold text-center">
      Previous Speakers
    </p>
    <div class="flex flex-wrap justify-center w-4/5 py-10 mx-auto gap-x-8">
      <div v-for="(speaker, index) in speakers" :key="index">
        <Speaker :speaker="speaker" />
      </div>
    </div>

    <div class="flex justify-center gap-x-4">
      <a
        href="mailto:vuejskenya@gmail.com?subject=Speaker%20Request"
        class="px-6 py-3 text-base bg-green-400 rounded-lg hover:bg-green-500"
      >Become a Speaker</a>

      <a
        href="https://www.meetup.com/vue-js-kenya/events/past/"
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 py-3 text-base bg-green-400 rounded rounded-lg hover:bg-green-500"
      >Past Speakers</a>
    </div>
  </div>
</template>
