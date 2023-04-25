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
  fillClass: {
    type: String,
    required: true,
  },
  hover: {
    type: String,
    required: true,
  },
})

const isHovered = ref<boolean>(false)

function onMouseOver() {
  isHovered.value = true
}

function onMouseOut() {
  isHovered.value = false
}
</script>

<template>
  <div @mouseout="onMouseOut" @mouseover="onMouseOver">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 127 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full"
    >
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M126.943 24.0312C122.277 26.1124 117.249 27.4952 112 28.1118C117.378 24.9001 121.492 19.8102 123.455 13.7511C118.428 16.7152 112.841 18.89 106.921 20.0531C102.16 15.0101 95.3993 11.8755 87.9096 11.8755C73.528 11.8755 61.8847 23.4915 61.8847 37.8219C61.8847 39.8447 62.1096 41.8231 62.5501 43.7316C40.9107 42.6383 21.7266 32.3092 8.88391 16.5938C6.57546 20.5586 5.35988 25.0618 5.36051 29.6463C5.36051 38.6441 9.94268 46.6023 16.9333 51.2437C12.6673 51.1175 8.65442 49.9309 5.13082 48.0085V48.3332C5.13082 60.9164 14.101 71.416 26.0205 73.7892C23.8371 74.3801 21.532 74.7072 19.1566 74.7072C17.4746 74.7072 15.8534 74.5344 14.2416 74.2425C17.5704 84.548 27.1803 92.0602 38.5611 92.2797C29.6378 99.2499 18.4305 103.401 6.21299 103.401C4.10458 103.401 2.05013 103.272 -0.00195312 103.027C11.5475 110.415 25.2287 114.694 39.9269 114.694C87.8114 114.694 114.019 75.1277 114.019 40.8211C114.019 39.6811 113.993 38.5764 113.947 37.4598C119.032 33.8322 123.441 29.2539 126.932 24.0426L126.944 24.031L126.943 24.0312Z"
          :fill=" isHovered ? hover : fillClass"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="126.941" height="126.57" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>
