<template>
  <article>
    <Blogheader />
    <div>
      <div
        class="blogs w-full flex flex-wrap py-4"
        v-for="blog in blogs"
        :key="blog"
      >
        <Singlearticle
          :key="blog.slug"
          :author="blog.author"
          :blog="blog"
          :published="formatDate(blog.createdAt)"
        />
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import Vue from 'vue'
const Blogheader = () =>
  import(/*webpackChunkName: "Blogheader"*/ '@/components/Blogheader.vue')
export default Vue.extend({
  name: 'Blog',
  components: {
    Blogheader,
  },
  async asyncData({ $content, params }) {
    const blogs = await $content('articles', params.slug)
      .sortBy('createdAt', 'desc')
      .fetch()
    return { blogs }
  },
  head: {
    title: 'Vuejs Kenya Community - Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Blog',
        name: 'Blog - Vuejs Kenya Community',
        content: 'Vuejs Kenya Community - Blog',
      },
    ],
  },
  methods: {
    formatDate(date: Date) {
      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }
      return new Intl.DateTimeFormat('en-GB', options).format(new Date(date))
    },
  },
})
</script>
<style scoped>
.blogs {
  max-width: 900px;
  margin: 0 auto;
}
</style>
