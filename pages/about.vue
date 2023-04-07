<script setup lang="ts">
import CheckIcon from '@/components/icons/Check.vue'
useHead({
  title: 'Blog | VuejsKenya',
  meta: [{ name: 'About-Us', content: 'Community Website' }],
})
</script>

<template>
  <section class="py-10 bg-gray-100">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <h2
        class="mb-6 text-3xl font-bold leading-tight text-center text-gray-900"
      >
        About Vuejs Kenya
      </h2>
      <p class="mb-4 text-lg leading-7 text-gray-500">
        VuejsKenya is a community group of Vue.js developers based in Kenya. We
        are passionate about building scalable, performant, and elegant web
        applications using Vue.js.
      </p>
      <p class="mb-4 text-lg leading-7 text-gray-500">
        Our community welcomes developers of all skill levels, from beginners to
        experts. We organize regular meetups, hackathons, and other events to
        share knowledge, network, and build great things together.
      </p>
      <p class="mb-4 text-lg leading-7 text-gray-500">
        Join our community to connect with other Vue.js developers in Kenya,
        learn new skills, and stay up-to-date with the latest trends and best
        practices in web development.
      </p>

      <div class="p-6">
        <h2 class="mb-4 text-2xl font-bold">
          Speaker Guidelines
        </h2>
        <ul class="list-inside">
          <li class="mb-4">
            <div class="flex gap-x-2">
              <CheckIcon />
              <h3 class="mb-2 text-lg font-bold">
                Be prepared
              </h3>
            </div>

            <p class="text-gray-600">
              Make sure you're familiar with the topic and have your
              presentation and any required materials ready.
            </p>
          </li>
          <li class="mb-4">
            <div class="flex gap-x-2">
              <CheckIcon />
              <h3 class="mb-2 text-lg font-bold">
                Respectful Behaviour
              </h3>
            </div>

            <p class="text-gray-600">
              The speaker should be respectful to the audience and fellow
              speakers. Harassment or discriminatory behavior will not be
              tolerated.
            </p>
          </li>
          <li class="mb-4">
            <div class="flex gap-x-2">
              <CheckIcon />
              <h3 class="mb-2 text-lg font-bold">
                Be inclusive
              </h3>
            </div>

            <p class="text-gray-600">
              Ensure that your content is accessible and inclusive to all
              attendees, regardless of their background or level of expertise.
            </p>
          </li>
          <li class="mb-4">
            <div class="flex gap-x-2">
              <CheckIcon />
              <h3 class="mb-2 text-lg font-bold">
                Be engaging
              </h3>
            </div>

            <p class="text-gray-600">
              Keep your presentation lively and engaging, using visuals and
              anecdotes to illustrate your points and maintain audience
              interest.
            </p>
          </li>
          <li>
            <div class="flex gap-x-2">
              <CheckIcon />
              <h3 class="mb-2 text-lg font-bold">
                Feedback
              </h3>
            </div>
            <p class="text-gray-600">
              The speaker should be open to receiving feedback and suggestions
              from the audience and event organizers.
            </p>
          </li>
          <li>
            <div class="flex gap-x-2">
              <CheckIcon />
              <h3 class="mb-2 text-lg font-bold">
                Recording and Streaming
              </h3>
            </div>
            <p class="text-gray-600">
              The event organizers may record or live stream the presentation.
              The speaker should be informed of this and provide consent
              beforehand.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
