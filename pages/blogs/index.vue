<script setup lang="ts">
useHead({
  title: 'Blog',
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
      <div
        class="w-4/5 mx-auto flex flex-wrap min-h-[830px] gap-x-6 gap-y-8 py-16"
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
  </section>
</template>
