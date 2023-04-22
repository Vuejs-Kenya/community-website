<script setup lang="ts">
import Twitter from '@/components/icons/twitter.vue'
import Meetup from '@/components/icons/meetup.vue'
import YouTube from '@/components/icons/Yt.vue'
import Telegram from '@/components/icons/telegram.vue'
import GitHub from '@/components/icons/github.vue'
import LinkedIn from '@/components/icons/linkedin.vue'
import Whatsapp from '@/components/icons/whatsapp.vue'
import Mail from '@/components/icons/mail.vue'
import Slack from '@/components/icons/slack.vue'
import Facebook from '@/components/icons/fb.vue'
import Signal from '@/components/icons/signal.vue'
</script>

<template>
  <div class="pb-20 pt-5 sm:-mt-10">
    <div class="joinuswrapper pt-16">
      <h3 class="py-14 text-4xl font-semibold text-center">
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
        <a class="w-28 h-20" href="" target="_blank">

          <Telegram fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="https://github.com/Vuejs-Kenya" target="_blank">

          <GitHub fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="" target="_blank">

          <LinkedIn fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="" target="_blank">

          <Whatsapp fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="" target="_blank">

          <Slack fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a class="w-28 h-20" href="mailto:vuejskenya@gmail.com" target="_blank">

          <Mail fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>

        <a class="w-28 h-20" href="" target="_blank">

          <Facebook fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
        <a ref="" class="w-28 h-20" target="_blank">

          <Signal fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />

        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
