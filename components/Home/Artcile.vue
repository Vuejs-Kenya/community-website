<script setup lang="ts">
import { withDefaults } from 'vue'
import ArrowRight from '../icons/ArrowRight.vue'
import type { Article } from '~/utils/interfaces'

withDefaults(
  defineProps<{
    articleInfo: Article
  }>(),
  {},
)
</script>

<template>
  <article>
    <div
      class="w-[400px] flex items-center ml-2 antialiased transition duration-500 ease-in-out transform hover:scale-105"
    >
      <router-link :to="articleInfo._path">
        <img
          :src="articleInfo.imgurl"
          :alt="`Article image on ${articleInfo.subtitle}`"
          class="object-cover object-center w-[400px] h-[240px]"
          loading="eager"
          width="370"
          height="240"
        >

        <div>
          <div class="py-6 bg-white dark:bg-[#010D08] dark:text-[#E9FEF5]">
            <h4 class="py-2 text-xl font-bold leading-tight truncate">
              {{ articleInfo.subtitle }}
            </h4>
            <p class="py-3">
              {{ articleInfo.description.length > 50 ? `${articleInfo.description.slice(0, 50)}...` : articleInfo.description }}
            </p>
            <div class="flex items-center mt-2 leading-relaxed gap-x-2">
              <a href="http://" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-4 text-[18px]">Read Now <span class="inline"><ArrowRight class="text-green-500 animate-bounce" /> </span></a>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </article>
</template>
