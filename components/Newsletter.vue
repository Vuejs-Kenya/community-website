<script setup lang="ts">
import Article from '../components/Home/Artcile.vue'
import ArrowRight from './icons/ArrowRight.vue'
</script>

<template>
  <div class="dark:bg-[#010D08] dark:text-[#E9FEF5] ">
    <div class="w-3/5 mx-auto">
      <div>
        <h3 class="py-10 text-4xl font-semibold lg:text-left text-center">
          Stay Updated
        </h3>
        <div class="text-base flex lg:justify-between justify-center">
          <p>New Articles every week. Sharpen your skills. <br> Deepen your understanding of Vue</p>
          <div class="hidden lg:inline">
            <a href="http://" target="_blank" rel="noopener noreferrer" class="px-6 py-3 gap-x-3 bg-green-400 hover:bg-green-500 rounded-lg">Read More <ArrowRight class="inline" /></a>
          </div>
        </div>
      </div>
      <ContentList v-slot="{ list }" path="/blogs">
        <div
          class=" flex flex-wrap lg:justify-between justify-center gap-y-5  pt-20"
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
            :description="article.description"
            :authors-names="article.authorsNames"
            :authors-images="article.authorImages"
          />
        </div>
      </ContentList>
    </div>
    <div class="lg:w-3/5 mx-auto w-full pt-10">
      <!-- TODO: setup the newsletter  for now we dont have an newsletter setup -->
      <div class="bg-green-400 py-8 dark:text-black">
        <div>
          <h2 class="text-2xl font-bold pt-8 text-center">
            Be The First To Know
          </h2>
          <p class="text-center pt-8">
            Join Our Newsletter. 700 people subscribed already!
          </p>
          <form action="" method="post" class="pt-8 flex justify-center items-center">
            <div>
              <input type="email" name="email" placeholder="Email address" required class="py-3 px-6 shadow rounded-bl-lg rounded-tl-lg">
              <button type="submit" class="py-3 px-6 bg-black rounded-tr-lg shadow rounded-br-lg text-white border-tr border-br">
                Subscribe
              </button>
            </div>
          </form>
          <p class="py-8 text-center">
            No spam. Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
