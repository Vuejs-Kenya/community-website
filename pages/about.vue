<script setup lang="ts">
import CheckIcon from '@/components/icons/Check.vue'
useHead({
  title: 'About | VuejsKenya',
  meta: [{ name: 'About-Us', content: 'Community Website' }],
})
</script>

<template>
  <section class="py-10">
    <div class="w-full px-4 mx-2 lg:w-3/5 lg:mx-auto sm:px-6 lg:px-8">
      <h2 class="ph2">
        About Vuejs Kenya
      </h2>
      <p class="ph1">
        Vuejs Kenya is a community group of Vue.js developers based in Kenya. We
        are passionate about building scalable, performant, and elegant web
        applications using Vue.js.
      </p>
      <p class="ph1">
        Our community welcomes developers of all skill levels, from beginners to
        experts. We organize regular meetups, hackathons, and other events to
        share knowledge, network, and build great things together.
      </p>
      <p class="ph1">
        Join our community to connect with other Vue.js developers in Kenya,
        learn new skills, and stay up-to-date with the latest trends and best
        practices in web development.
      </p>

      <div class="p-6">
        <h2 class="mb-4 text-2xl font-bold ph2">
          Speaker Guidelines
        </h2>
        <ul class="list-inside">
          <li>
            <div class="flex gap-x-4">
              <CheckIcon class="text-green-500" />
              <h3 class="bh">
                Be prepared
              </h3>
            </div>

            <p class="ph1">
              Make sure you're familiar with the topic and have your
              presentation and any required materials ready.
            </p>
          </li>
          <li>
            <div class="flex gap-x-4">
              <CheckIcon class="text-green-500" />
              <h3 class="bh">
                Respectful Behaviour
              </h3>
            </div>

            <p class="ph1">
              The speaker should be respectful to the audience and fellow
              speakers. Harassment or discriminatory behavior will not be
              tolerated.
            </p>
          </li>
          <li>
            <div class="flex gap-x-4">
              <CheckIcon class="text-green-500" />
              <h3 class="bh">
                Be inclusive
              </h3>
            </div>

            <p class="ph1">
              Ensure that your content is accessible and inclusive to all
              attendees, regardless of their background or level of expertise.
            </p>
          </li>
          <li>
            <div class="flex gap-x-4">
              <CheckIcon class="text-green-500" />
              <h3 class="bh">
                Be engaging
              </h3>
            </div>

            <p class="ph1">
              Keep your presentation lively and engaging, using visuals and
              anecdotes to illustrate your points and maintain audience
              interest.
            </p>
          </li>
          <li>
            <div class="flex gap-x-4">
              <CheckIcon class="text-green-500" />
              <h3 class="bh">
                Feedback
              </h3>
            </div>
            <p class="ph1">
              The speaker should be open to receiving feedback and suggestions
              from the audience and event organizers.
            </p>
          </li>
          <li>
            <div class="flex gap-x-4">
              <CheckIcon class="text-green-500" />
              <h3 class="bh">
                Recording and Streaming
              </h3>
            </div>
            <p class="ph1">
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
