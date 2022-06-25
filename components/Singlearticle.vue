<template>
  <article class="pt-8 mx-auto pb-2">
    <div class="flex items-center antialiased ml-4 grow">
      <!-- start -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="blog.img" :alt="blog.img" />
        <div class="px-6 py-4">
          <nuxt-link :to="blog.path">
            <div class="font-bold text-xl mb-2">{{ blog.title }}</div>
          </nuxt-link>
          <p class="text-gray-700 text-base">
            {{ blog.description }}
          </p>
        </div>
        <div class="ml-6 mt-4 flex items-center">
          <div class="author-image">
            <img
              class="h-8 w-8 rounded-full bg-no-repeat bg-cover"
              :src="blog.img"
              :alt="blog.author"
            />
          </div>
          <span class="font-normal text-base font-semibold px-2"
            >{{ published }}
          </span>
          •
          <span class="pl-2 text-base">{{ blog.author }}</span>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ blog.tag }}</span
          >
        </div>
      </div>
      <!-- end  -->
    </div>
  </article>
</template>

<script>
export default {
  name: 'Singlearticle',
  props: {
    blog: {
      type: Object,
      required: true,
    },
    published: {
      type: String,
      required: true,
      default: '',
    },
    author: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
<style scoped></style>
