<script setup lang="ts">
import Twitter from "@/components/icons/twitter.vue";
import Meetup from "@/components/icons/meetup.vue";
import YouTube from "@/components/icons/Yt.vue";
import Telegram from "@/components/icons/telegram.vue";
import GitHub from "@/components/icons/github.vue";
import LinkedIn from "@/components/icons/linkedin.vue";
import Whatsapp from "@/components/icons/whatsapp.vue";
import Mail from "@/components/icons/mail.vue";
import Slack from "@/components/icons/slack.vue";
import Facebook from "@/components/icons/fb.vue";
import Signal from "@/components/icons/signal.vue";
</script>

<template>
  <div class="pb-20 pt-5 sm:-mt-10 dark:bg-[#010D08] dark:text-[#E9FEF5]">
    <div class="joinuswrapper">
      <h3 class="py-16 text-4xl font-semibold text-center dark:text-white">
        Join the Community
      </h3>
      <div class="flex flex-wrap items-center justify-center mx-auto lg:w-full">
        <a
          href="https://www.twitter.com/kenyavue"
          target="_blank"
          class="h-20 w-28"
        >
          <Twitter fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a
          class="h-20 w-28"
          href="https://www.meetup.com/vue-js-kenya/"
          target="_blank"
        >
          <Meetup fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a
          class="h-20 w-28"
          href="https://www.youtube.com/@vuejskenya6612"
          target="_blank"
        >
          <YouTube fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a class="h-20 w-28" href="" target="_blank">
          <Telegram fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a
          class="h-20 w-28"
          href="https://github.com/Vuejs-Kenya"
          target="_blank"
        >
          <GitHub fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a class="h-20 w-28" href="" target="_blank">
          <LinkedIn fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a class="h-20 w-28" href="" target="_blank">
          <Whatsapp fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a class="h-20 w-28" href="" target="_blank">
          <Slack fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a class="h-20 w-28" href="mailto:vuejskenya@gmail.com" target="_blank">
          <Mail fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>

        <a class="h-20 w-28" href="" target="_blank">
          <Facebook fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
        <a ref="" class="h-20 w-28" target="_blank">
          <Signal fill-class="rgb(74, 222, 128)" hover="rgb(34, 197, 94)" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
