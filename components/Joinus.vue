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
      <h3 class="py-8 text-4xl font-semibold text-center">
        Join Us
      </h3>
      <div class="social-links lg:w-1/3 sm:w-1/2 my-0 mx-auto flex flex-wrap">
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <Twitter :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <Meetup :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <YouTube :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <a href="" target="_blank" class="p-3">
          <div class="w-28 h-28">
            <Telegram  :fill-class="`rgb(74 222 128)`"/>
          </div>
        </a>
        <a href="" target="_blank"  class="p-2">
          <div class="w-28 h-28">
            <GitHub :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <LinkedIn  :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <Whatsapp :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <Mail :fill-class="`rgb(74 222 128)`"/>
          </div>
        </a>
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <Slack :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <a href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <Facebook :fill-class="`rgb(74 222 128)`" />
          </div>
        </a>
        <nuxt-link href="" target="_blank" class="p-2">
          <div class="w-28 h-28">
            <Signal :fill-class="`rgb(74 222 128)`"/>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
