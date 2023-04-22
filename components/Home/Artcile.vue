<script setup lang="ts">
import ArrowRight from '../icons/ArrowRight.vue'
defineProps({
  path: String,
  img: String,
  title: String,
  tags: Object,
  date: String,
  description: String,
  authorsNames: Array<string>,
  authorsImages: Array<string>,
})

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
      class="w-[400px] flex items-center ml-2 antialiased transition duration-500 ease-in-out transform hover:scale-105"
    >
      <router-link :to="path ?? ''">
        <img
          :src="img"
          :alt="title"
          class="object-cover object-center w-[400px] h-[240px]"
          loading="eager"
          width="370"
          height="240"
        >

        <div>
          <div class="py-6 bg-white">
            <h4 class="py-2 text-xl font-bold leading-tight truncate">
              {{ title }}
            </h4>
            <p>{{ description?.length > 50 ? `${description.slice(0, 50)}...` : description }}</p>
            <div class="flex items-center mt-2 leading-relaxed gap-x-2">
              <a href="http://" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-4 text-[18px]">Read Now <span class="inline"><ArrowRight class="text-green-500 animate-bounce" /> </span></a>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </article>
</template>
