<script lang="ts" setup>
import type { speakerInfo } from "@/utils/interfaces";

const props = defineProps({
  speaker: {
    type: Object as () => speakerInfo,
    required: true,
  },
});
</script>

<template>
  <div class="w-[300px] items-center justify-center py-3">
    <img
      :src="
        speaker.image
          ? speaker.image
          : `https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=`
      "
      :alt="`Avatar image of ${speaker.name}`"
      srcset=""
      loading="eager"
      class="object-cover mx-auto w-[200px] h-[200px] rounded-full shadow border border-gray-300"
      decoding="async"
    />

    <h1
      class="pt-5 text-2xl font-semibold text-center text-gray-700 dark:text-white"
    >
      {{ speaker.name }}
    </h1>

    <p
      class="py-3 text-lg text-center text-gray-500 truncate whitespace-normal dark:text-gray-300"
    >
      {{ speaker.talk }}
    </p>

    <div class="flex justify-center mt-3 -mx-2">
      <a
        :href="speaker.socials.twitter"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-2 mt-1 text-gray-600 w-[20px] h-[20px] fill transition-colors duration-300 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
        aria-label="Twitter"
      >
        <svg
          viewBox="0 0 16 12"
          class="w-full h-auto fill-current"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z"
          />
        </svg>
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-2 w-[20px] h-[20px] fill text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
        aria-label="Facebook"
      >
        <svg
          class="w-full h-auto fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"
          />
        </svg>
      </a>

      <a
        :href="speaker.socials.github"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-2 text-gray-600 w-[20px] h-[20px] fill transition-colors duration-300 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
        aria-label="Github"
      >
        <svg
          class="w-full h-auto fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
