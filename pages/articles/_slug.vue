<template>
  <article>
    <div>
      <div>
        <h1 class="text-4xl text-center font-bold py-8">
          {{ article.title }}
        </h1>
        <div
          class="header-details w-96 my-0 mx-auto flex items-center text-center"
        >
          <div
            class="published flex items-center justify-center pl-4 font-normal text-base font-semibold text-sm"
          >
            <p>{{ article.author }}</p>
            <p class="font-light px-4">{{ formatDate(article.createdAt) }}</p>
            <p class="pr-3">{{ article.readingStats.text }}</p>
          </div>
        </div>
        <!-- start of revamping here -->
        <div class="w-screen">
          <img
            :src="article.img"
            alt="postimage"
            srcset=""
            class="pt-8 mx-auto bg-no-repeat bg-center bg-auto bg-center bg-cover post-header"
          />
        </div>
        <!-- end revamping here -->
      </div>
    </div>
    <Scroll />
    <div class="article-section pt-12 text-lg font-medium">
      <nuxt-content :document="article" />
    </div>

    <div class="flex justify-center pt-6 pb-2">
      <h5
        v-if="prev"
        class="font-bold hover:underline text-teal-500 inline items-center mr-6"
      >
        <nuxt-link :to="prev.slug"> Previous </nuxt-link>
      </h5>
      <h5
        v-if="next"
        class="font-bold hover:underline text-teal-500 inline items-center"
      >
        <nuxt-link :to="next.slug"> Next </nuxt-link>
      </h5>
    </div>
  </article>
</template>
<script>
import Vue from 'vue'
import global from '@/utils/global'
import getSiteMeta from '@/utils/getSiteMeta'
import { formatDate } from '@/helpers/helpers'
export default Vue.extend({
  name: 'ArticlePage',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'published'])
      .sortBy('published', 'desc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next,
    }
  },
  head() {
    return {
      title: this.article.title,
    }
  },
})
</script>
<style scoped>
.article h1 {
  padding-top: 20px;
  padding-bottom: 6px;
}
.post-header {
  height: 600px;
  widows: 100%;
}
.published {
  padding-top: 6px;
  padding-bottom: 10px;
}
.article-section {
  width: 800px;
  margin: 0 auto;
  line-height: 2.5rem;
  letter-spacing: 0.05em;
}
.nuxt-content p {
  font-size: 1.25em;
  margin-bottom: 20px;
  line-height: 2rem;
}
h5 {
  font-size: 1.4rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
}
strong {
  font-size: 26px;
  align-items: center;
}
.article-section a {
  color: rgb(69, 180, 69);
}
.nuxt-content ul li {
  list-style-type: disc;
  padding: 8px 0;
  font-weight: 500;
  margin-left: 30px;
  font-size: 1.25em;
  line-height: 1.5rem;
}
.filename {
  font-weight: bold;
  font-size: 1.1rem;
}
@media (max-width: 800px) {
  img {
    width: 600px;
    height: 400px;
    object-fit: cover;
    margin: 0 auto;
  }
  .article-section {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 0 5px;
  }
}
</style>
