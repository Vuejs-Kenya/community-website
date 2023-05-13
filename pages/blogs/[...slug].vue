<script setup>
import { computed } from 'vue'
import readingTime from '@/helpers/helpers'
import Twitter from '@/components/icons/twitter.vue'
import Linkedin from '@/components/icons/linkedin.vue'
import Telegram from '@/components/icons/telegram.vue'
import Share from '@/components/icons/Share.vue'
import Reddit from '@/components/icons/Reddit.vue'
import Whatsapp from '@/components/icons/whatsapp.vue'
import Mail from '@/components/icons/mail.vue'
import Toast from '@/components/Toast.vue'

const { path, ...route } = useRoute()

const { data } = await useAsyncData(`content-${path}`, async () => {
  const article = queryContent().where({ _path: path }).findOne()

  const surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(path)

  return {
    article: await article,
    surround: await surround,
  }
})
const [prev, next] = data.value.surround

useHead({
  title: data.value.article.title,
})

// copy to clipboard toast
const openToast = ref(false)

// blog full url
const blogUrl = computed(() =>
  process.client ? `${window.location.origin}${window.location.pathname}` : '',
)

// share to twitter url
const twitterShareLink = computed(() => {
  const twitterUrl = 'https://twitter.com/intent/tweet'
  const params = {
    text: data.value.article.title,
    url: blogUrl.value,
    hashtags: 'vuejskenya',
    via: 'KenyaVue',
  }
  const urlSearchParams = new URLSearchParams(params)
  return `${twitterUrl}?${urlSearchParams.toString()}`
})

// share to telegram url
const telegramShareLink = computed(() => {
  return `https://telegram.me/share/url?text=${data.value.article.title}&url=${blogUrl.value}`
})

// share to linkedin
const linkedinShareLink = computed(() => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl.value}`
})

// share to reddit
const redditShareLink = computed(() => {
  return `https://reddit.com/submit?url=${blogUrl.value}&title=${data.value.article.title}`
})

// share to whatsapp
const whatsappShareLink = computed(() => {
  return `https://wa.me/?text=${encodeURIComponent(
    `${data.value.article.title}\n\n${blogUrl.value}`,
  )}`
})

// share to email
const emailShareLink = computed(() => {
  return `mailto:?subject=${data.value.article.title}&body=${blogUrl.value}`
})

const copyToClipboard = async () => {
  try {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(blogUrl.value)
      setToastOpen(true)
    }
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="dark:bg-black dark:text-[#E9FEF5]">
    <main id="main" class="article-main">
      <Toast
        :show="openToast"
        message="Link copied to clipboard."
        @close="openToast = false"
      >
        <template #toastIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="w-5 h-5 stroke-blue-600 pt-30"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </template>
      </Toast>
      <header v-if="data.article" class="article-header">
        <div class="flex items-center md:flex-row flex-col justify-between py-6">
          <div class="flex items-center gap-x-4 pb-8 md:pb-0">
            <p
              v-for="(author, index) in data.article.authorNames"
              :key="index"
              class="text-lg font-bold"
            >
              {{ author }}
            </p>
            <p class="w-2 h-2 bg-gray-400 rounded-full" />
            <span>
              <span class="font-bold">{{ readingTime(data.article) }}</span>
              min read
            </span>
          </div>
          <div class="flex items-center gap-x-7 h-6">
            <a :href="twitterShareLink" class="text-gray-400 w-6" target="_blank">
              <Twitter fill-class="rgb(156 163 175)" hover="rgb(107 114 128)" />
            </a>
            <a :href="linkedinShareLink" target="_blank" class="text-gray-400 w-6">
              <Linkedin fill-class="rgb(156 163 175)" hover="rgb(107 114 128)" />
            </a>
            <a :href="telegramShareLink" target="_blank" class="text-gray-400 w-6">
              <Telegram fill-class="rgb(156 163 175)" hover="rgb(107 114 128)" />
            </a>
            <a :href="redditShareLink" target="_blank" class="text-gray-400 w-6">
              <Reddit fill-class="rgb(156 163 175)" hover="rgb(107 114 128)" />
            </a>
            <a :href="whatsappShareLink" target="_blank" class="text-gray-400 w-6">
              <Whatsapp fill-class="rgb(156 163 175)" hover="rgb(107 114 128)" />
            </a>
            <a :href="emailShareLink" target="_blank" class="text-gray-400 w-6">
              <Mail fill-class="rgb(156 163 175)" hover="rgb(107 114 128)" />
            </a>
            <a href="#" class="text-gray-400 w-6" @click.prevent="copyToClipboard">
              <Share fill-class="rgb(156 163 175)" hover="rgb(107 114 128)" class="w-full" />
            </a>
          </div>
        </div>
        <h1 class="pt-3 heading">
          {{ data.article.title }}
        </h1>
        <div class="my-4 supporting">
          <span>
            {{ data.article.description }}
          </span>
        </div>

        <div class="img-cont h-[300px] lg:h-[600px] my-4">
          <img
            :src="`${data.article.imgurl}`"
            :alt="data.article.title"
            class="rounded-lg"
          >
        </div>
        <a
          :href="`${data.article.imgurl}`"
          target="_blank"
          rel="noopener noreferrer"
          class="flex justify-center my-2 text-base no-underline hover:underline hover:underline-offset-8"
        >
          {{ data.article.attribution }}
        </a>
        <ul class="flex gap-x-4 pb-4">
          <li v-for="(tag, i) in data.article.tags" :key="i" class="tag">
            {{ tag }}
          </li>
        </ul>
      </header>
      <hr>
      <section class="mb-2 article-section">
        <article class="article dark:text-white">
          <ContentRenderer :value="data.article">
            <ContentRendererMarkdown :value="data.article" />
          </ContentRenderer>
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl m-auto dark:text-[#E9FEF5];
}
.article a{
  @apply dark:text-[#E9FEF5];
}

.article-header .heading {
  @apply font-extrabold text-5xl dark:text-[#E9FEF5];
}

.article-header .supporting {
  @apply font-medium text-lg dark:text-[#E9FEF5];
}

.article-section {
  @apply grid grid-cols-8 dark:text-[#E9FEF5];
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14 dark:text-[#E9FEF5];
}

.aside .toc {
  @apply sticky top-20;
}

.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto dark:text-[#E9FEF5];
}
</style>
