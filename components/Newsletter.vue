<script setup lang="ts">
import Article from "../components/Home/Artcile.vue";
import ArrowRight from "./icons/ArrowRight.vue";
</script>

<template>
  <div class="dark:bg-[#010D08] dark:text-[#E9FEF5]">
    <div class="w-3/5 mx-auto">
      <div>
        <h3
          class="py-10 text-4xl font-semibold text-center lg:text-left dark:text-white"
        >
          Stay Updated
        </h3>
        <div class="flex justify-center text-base lg:justify-between">
          <p>
            New Articles every week. Sharpen your skills. <br />
            Deepen your understanding of Vue
          </p>
          <div class="hidden lg:inline">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-green-400 rounded-lg gap-x-3 hover:bg-green-500"
              >Read More <ArrowRight class="inline"
            /></a>
          </div>
        </div>
      </div>
      <ContentList v-slot="{ list }" path="/blogs">
        <div class="flex flex-wrap pt-20 gap-x-8 gap-y-5">
          <Article
            v-for="(article, index) in list"
            :key="index"
            :article-info="article"
          />
        </div>
      </ContentList>
    </div>
    <div class="w-full py-10 mx-auto lg:w-3/5">
      <!-- TODO: setup the newsletter  for now we dont have an newsletter setup -->
      <div class="py-8 bg-green-400 dark:text-black">
        <div>
          <h2 class="pt-8 text-2xl font-bold text-center">
            Be The First To Know
          </h2>
          <p class="pt-8 text-center">
            Join Our Newsletter. 700 people subscribed already!
          </p>
          <form
            action=""
            method="post"
            class="flex items-center justify-center pt-8"
          >
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                class="px-6 py-3 rounded-tl-lg rounded-bl-lg shadow"
              />
              <button
                type="submit"
                class="px-6 py-3 text-white bg-black rounded-tr-lg rounded-br-lg shadow border-tr border-br"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p class="py-8 text-center">No spam. Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  </div>
</template>
