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

const setToastOpen = open => openToast.value = open

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
  return `https://wa.me/?text=${encodeURIComponent(`${data.value.article.title}\n\n${blogUrl.value}`)}`
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
  <main id="main" class="article-main">
    <Toast :show="openToast" message="Link copied to clipboard." @close="setToastOpen(false)">
      <template #toastIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="w-5 h-5 stroke-blue-600"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path
            d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
          />
        </svg>
      </template>
    </Toast>
    <header v-if="data.article" class="article-header">
      <div class="mb-5 sm:flex items-center">
        <p class="text-sm font-bold">
          {{ data.article.author }}
          <span class="mx-1"> . </span>
          <span>
            {{ readingTime(data.article) }}
            Min read
          </span>
        </p>
        <div class="sharing ml-auto flex gap-x-3 my-5 sm:my-0 items-center">
          <a :href="twitterShareLink" class="h-6 w-6" target="_blank">
            <Twitter :height="24" :width="24" fill-class="fill-gray-400" />
          </a>
          <a :href="linkedinShareLink" class="h-6 w-6" target="_blank">
            <Linkedin :height="24" :width="24" fill-class="fill-gray-400" />
          </a>
          <a :href="telegramShareLink" class="h-6 w-6" target="_blank">
            <Telegram :height="24" :width="24" fill-class="fill-gray-400" />
          </a>
          <a :href="redditShareLink" class="h-6 w-6" target="_blank">
            <Reddit class="fill-gray-400" />
          </a>
          <a :href="whatsappShareLink" class="h-6 w-6" target="_blank">
            <Whatsapp :height="24" :width="24" fill-class="fill-gray-400" />
          </a>
          <a :href="emailShareLink" class="h-6 w-6" target="_blank">
            <Mail :height="24" :width="24" fill-class="fill-gray-400" />
          </a>
          <a href="#" class="h-6 w-6" @click.prevent="copyToClipboard">
            <Share :height="24" :width="24" stroke-class="stroke-gray-400" />
          </a>
        </div>
      </div>
      <h1 class="heading">
        {{ data.article.title }}
      </h1>
      <div class="supporting my-3">
        <span>
          {{ data.article.description }}
        </span>
      </div>

      <div class="img-cont h-[300] my-4">
        <img
          :src="`${data.article.imgurl}`"
          :alt="data.article.title"
          class="rounded"
        >
      </div>
      <a
        :href="`${data.article.imgurl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-sm my-2 flex justify-center"
      >
        {{ data.article.attribution }}
      </a>
      <ul class="article-tags">
        <li v-for="(tag, i) in data.article.tags" :key="i" class="tag">
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr>
    <section class="article-section mb-2">
      <article class="article">
        <ContentRenderer :value="data.article">
          <ContentRendererMarkdown :value="data.article" />
        </ContentRenderer>
      </article>
    </section>
  </main>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl m-auto;
}

.article-header {
  @apply p-4 py-6;
}

.article-header .heading {
  @apply font-extrabold text-5xl;
}

.article-header .supporting {
  @apply font-medium text-lg;
}

.article-section {
  @apply grid grid-cols-8;
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
}

.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}
.article[data-v-2c96bb26] :where(ul > li):not(:where([class~="not-prose"] *)) {
  @apply text-base;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)) {
  @apply no-underline text-2xl;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)):hover {
  @apply underline;
}
</style>
