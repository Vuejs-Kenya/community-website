<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 60,
  },
  width: {
    type: Number,
    default: 60,
  },
  strokeClass: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    :class="strokeClass"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="square"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
</template>
