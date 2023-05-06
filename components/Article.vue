<script setup lang="ts">
import { withDefaults } from 'vue'
import type { Article } from '~/utils/interfaces'

withDefaults(
  defineProps<{
    articleInfo: Article
  }>(),
  {},
)

function convertDate(date: string) {
  const da = new Date(date)
  return da.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article>
    <div
      class="flex border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg w-[400px]"
    >
      <router-link :to="articleInfo._path" class="w-full">
        <img
          :src="articleInfo.imgurl"
          :alt="`Article image on ${articleInfo.subtitle}`"
          class="object-cover object-center h-[240px] w-full"
          loading="eager"
        >

        <div>
          <div class="px-5 py-3 bg-white">
            <div class="flex items-baseline pb-2">
              <ul class="flex gap-x-3">
                <li v-for="(tag, index) in articleInfo.tags" :key="index" class="tag">
                  {{ tag }}
                </li>
              </ul>
            </div>

            <h4 class="py-2 text-xl font-semibold leading-tight truncate">
              {{ articleInfo.subtitle }}
            </h4>
            <div class="flex items-center py-3 leading-relaxed gap-x-1 md:gap-x-2">
              <img
                v-for="(author_image, index) in articleInfo.authorImages"
                :key="index"
                class="bg-no-repeat bg-cover object-cover rounded-full w-11 h-11 "
                :src="author_image"
                :alt="`Author image of ${
                  articleInfo.authorNames[index]
                }`"
                loading="eager"
              >
              <div class="flex font-semibold gap-x-2">
                <p v-for="(author, index) in articleInfo.authorNames" :key="index">
                  {{ author }}
                  <span
                    v-if="index < articleInfo.authorNames.length - 1"
                    class="font-normal"
                  >&amp;</span>
                </p>
              </div>
              <p class="w-1 h-1 mx-2 bg-gray-400 rounded-full" />
              <span class="pl-2 text-base">{{ convertDate(articleInfo.createdAt) }} </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </article>
</template>
