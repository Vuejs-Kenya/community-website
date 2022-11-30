<script setup lang="ts">
import Twitter from '@/components/icons/twitter.vue'
import Meetup from '@/components/icons/meetup.vue'
import Yt from '@/components/icons/Yt.vue'
import Telegram from '@/components/icons/telegram.vue'
import Github from '@/components/icons/github.vue'
import Linkedin from '@/components/icons/linkedin.vue'
import Whatsapp from '@/components/icons/whatsapp.vue'
import Mail from '@/components/icons/mail.vue'
import Slack from '@/components/icons/slack.vue'
import Fb from '@/components/icons/fb.vue'
import Signal from '@/components/icons/signal.vue'
</script>

<template>
  <div class="py-36 sm:pt-40 md:pt-20 lg:pt-36">
    <div class="joinuswrapper pt-20">
      <h3 class="text-4xl text-center pb-6">
        Join Us
      </h3>
      <div class="social-links lg:w-1/3 sm:w-1/2 my-0 mx-auto flex flex-wrap">
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Twitter />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Meetup />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Yt />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Telegram />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Github />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Linkedin />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Whatsapp />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Mail />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Slack />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Fb />
          </div>
        </nuxt-link>
        <nuxt-link to="" class="py-2 px-2">
          <div class="w-28 h-28">
            <Signal />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
