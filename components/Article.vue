<script setup lang="ts">
defineProps({
  path: String,
  img: String,
  title: String,
  tags: Object,
  date: String,
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
      class="flex items-center ml-2 antialiased transition duration-500 ease-in-out transform hover:scale-105"
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
            <div class="flex items-baseline pb-2">
              <ul>
                <li
                  v-for="tag in tags"
                  :key="tag"
                  class="inline-block bg-gray-200 rounded-md text-xs px-2 py-0.5 mr-2 uppercase leading-relaxed"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>

            <h4 class="py-0 my-2 text-lg font-semibold leading-tight truncate">
              {{ title }}
            </h4>
            <div class="flex items-center mt-2 leading-relaxed">
              <div class="author-image">
                <img
                  class="w-10 h-10 bg-no-repeat bg-cover border-2 rounded-full border-slate-400"
                  :src="img"
                  :alt="`Author image of ${
                    authorsNames[authorsNames?.length - 1]
                  }`"
                  loading="eager"
                >
              </div>
              <div v-if="authorsNames?.length === 1">
                <span class="px-2 text-sm font-semibold">{{
                  authorsNames[authorsNames?.length - 1]
                }}</span>
              </div>
              <div v-else class="flex text-sm font-semibold gap-x-2">
                <span v-for="(author, index) in authorsNames" :key="author">
                  {{ author }}
                  <span
                    v-if="index < authorsNames.length - 1"
                    class="font-normal"
                  >&amp;</span>
                </span>
              </div>
              <p class="w-2 h-2 mx-2 bg-gray-700 rounded-full" />
              <span class="pl-2 text-sm">{{ convertDate(date ?? "") }} </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </article>
</template>
