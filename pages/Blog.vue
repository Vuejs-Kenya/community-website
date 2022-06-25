<template>
  <article>
    <Blogheader />
    <div>
      <div class="blogs w-full flex flex-wrap py-4">
        <Singlearticle
          v-for="blog in blogs"
          :author="blog.author"
          :key="blog.slug"
          :path="blog.path"
          :title="blog.title"
          :excerpt="blog.description"
          :published="formatDate(blog.createdAt)"
          :img="blog.img"
          :tag="blog.tag"
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
    formatDate(date: any) {
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
