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
          :published="blog.createdAt"
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
  data() {
    return {}
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
})
</script>
<style scoped>
.blogs {
  max-width: 900px;
  margin: 0 auto;
}
</style>
