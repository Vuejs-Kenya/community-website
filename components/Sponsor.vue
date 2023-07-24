<script setup lang="ts">
import { metrics } from "~~/utils/metrics";
</script>

<template>
  <div class="dark:bg-[#010D08] dark:text-[#E9FEF5] py-10">
    <div class="w-full mx-auto lg:w-3/5">
      <h1
        class="text-4xl font-semibold text-center lg:text-left dark:text-white"
      >
        Sponsor Vue Kenya
      </h1>
      <div
        class="flex flex-wrap justify-center py-8 gap-x-10 lg:justify-between"
      >
        <div
          v-for="(metric, index) in metrics"
          :key="index"
          :metric="metric"
          class="py-4 w-[200px] lg:w-[300px]"
        >
          <h4 class="text-2xl font-semibold dark:text-white">
            {{ `${metric.metric.toLocaleString()}+` }}
          </h4>
          <p class="pt-3 text-xl text-gray-400">
            {{ metric.item }}
          </p>
        </div>
      </div>
      <div class="flex justify-center lg:justify-between">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          class="px-24 py-3 bg-green-400 rounded-lg lg:px-6 hover:bg-green-500"
          >Sponsor us</a
        >
      </div>
    </div>
  </div>
</template>
