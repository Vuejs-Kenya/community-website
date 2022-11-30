<script setup lang="ts">
useHead({
  title: 'Community - Blog',
  meta: [
    {
      name: 'description',
      content:
        'Listicle of all the articles from Vuejs Kenya community members and contributors',
    },
  ],
})
</script>

<template>
  <section>
    <Blogheader />
    <ContentList v-slot="{ list }" path="/blogs">
      <div class="w-4/5 my-4 mx-auto flex flex-wrap min-h-[830px]">
        <Article
          v-for="article in list"
          :key="article._path"
          :path="article._path"
          :img="article.imgurl"
          :title="article.subtitle"
          :tags="article.tags"
          :date="article.createdAt"
          :author="article.author"
        />
      </div>
    </ContentList>
  </section>
</template>
