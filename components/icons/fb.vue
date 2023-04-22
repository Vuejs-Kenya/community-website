<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 127,
  },
  width: {
    type: Number,
    default: 127,
  },
  fillClass: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 128 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full"
    >
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M76.1916 23.7321H96.0247V0H76.1916C60.8821 0 48.426 12.4197 48.426 27.6844V39.5504H32.5566V63.285H48.4213V126.57H72.2253V63.285H92.0586L96.0247 39.5506H72.2253V27.6844C72.2253 25.54 74.0409 23.7299 76.1914 23.7299V23.7323L76.1916 23.7321Z"   
          :fill="fillClass"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="126.941"
            height="126.57"
            fill="white"
            transform="translate(0.820312)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>
