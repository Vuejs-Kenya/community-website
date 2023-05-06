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
        class="w-3/5 mx-auto flex flex-wrap min-h-[830px] gap-x-8 gap-y-8 pt-20 pb-10"
      >
        <Article
          v-for="(article, index) in list"
          :key="index"
          :article-info="article"
        />
      </div>
    </ContentList>
  </section>
</template>
