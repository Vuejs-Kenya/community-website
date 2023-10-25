<script setup lang="ts">
import Twitter from '@/components/icons/twitter.vue'
import Meetup from '@/components/icons/meetup.vue'
import YouTube from '@/components/icons/Yt.vue'
import Telegram from '@/components/icons/telegram.vue'
import GitHub from '@/components/icons/github.vue'
import Mail from '@/components/icons/mail.vue'
</script>

<template>
  <div class="pb-20 pt-5 sm:-mt-10 dark:bg-[#010D08] dark:text-[#E9FEF5]">
    <div class="joinuswrapper">
      <h3 class="py-16 text-4xl font-semibold text-center">
        Join the Community
      </h3>
      <div class="lg:w-1/3 sm:w-1/2 mx-auto flex gap-x-2 gap-y-4 flex-wrap items-center justify-center">
        <a href="https://www.twitter.com/kenyavue" target="_blank" class="w-28 h-20">

          <Twitter fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="https://www.meetup.com/vue-js-kenya/" target="_blank">

          <Meetup fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="https://www.youtube.com/@vuejskenya6612" target="_blank">

          <YouTube fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="https://t.me/+UrkVB6D63bnDom4l" target="_blank">

          <Telegram fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="https://github.com/Vuejs-Kenya" target="_blank">

          <GitHub fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="mailto:vuejskenya@gmail.com" target="_blank">

          <Mail fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
