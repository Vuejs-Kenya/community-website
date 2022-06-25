<template>
  <article>
    <h1>{{ blog.title }}</h1>
    <nuxt-content :document="blog" />
    <p>Post created on {{ formatDate(blog.createdAt) }}</p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Aboutslug',
  async asyncData({ $content, params }) {
    const blog = await $content('articles', params.slug).fetch()
    return {
      blog,
    }
  },
  methods: {
    formatDate(sourceDate: Date) {
      const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }
      return new Intl.DateTimeFormat('en-GB', options).format(
        new Date(sourceDate)
      )
    },
  },
})
</script>
<style scoped></style>
