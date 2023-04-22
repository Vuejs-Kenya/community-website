<script setup lang="ts">
import Article from '../components/Home/Artcile.vue'
import ArrowRight from './icons/ArrowRight.vue';
</script>

<template>
  <div class="pt-6 w-3/5 mx-auto">
    <div class="">
      <h3 class="py-8 text-4xl font-semibold">
        Stay Updated
      </h3>
      <div class="text-base flex justify-between">
        <p>New Articles every week. Sharpen your skills. Deepen your understanding of Vue</p>
      <div class="">
        <a href="http://" target="_blank" rel="noopener noreferrer" class="px-6 py-3 gap-x-3 bg-green-400 hover:bg-green-500 rounded-lg">Read More <ArrowRight class="inline" /></a>
      </div>
      </div>
    </div>
    <ContentList v-slot="{ list }" path="/blogs">
      <div
        class=" flex flex-wrap  gap-x-10  pt-10"
      >
        <Article
          v-for="article in list"
          :key="article._path"
          :article-info="article"
          :path="article._path"
          :img="article.imgurl"
          :title="article.subtitle"
          :tags="article.tags"
          :date="article.createdAt"
          :authors-names="article.authorsNames"
          :authors-images="article.authorImages"
        />
      </div>
    </ContentList>
    <!-- TODO: setup the newsletter  for now we dont have an newsletter setup -->
  </div>
</template>
