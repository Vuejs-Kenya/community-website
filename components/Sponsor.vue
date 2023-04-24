<script setup lang="ts">
import { metrics } from '~~/utils/metrics'
</script>

<template>
  <div class="dark:bg-[#010D08] dark:text-[#E9FEF5] py-10">
    <div class="w-3/5 mx-auto">
    <h1 class="text-4xl font-semibold">
      Sponsor Vue Kenya
    </h1>
    <div class="py-8 flex flex-wrap gap-x-10">
      <div v-for="(metric, index) in metrics" :key="index" :metric="metric" class="py-4 w-[300px]">
        <h4 class="text-2xl font-semibold">
          {{ `${metric.metric.toLocaleString()}+` }}
        </h4>
        <p class="pt-3 text-xl text-gray-400">
          {{ metric.item }}
        </p>
      </div>
    </div>
    <a href="http://" target="_blank" rel="noopener noreferrer" class="py-3 px-6 bg-green-400 hover:bg-green-500 rounded-lg">Sponsor us</a>
  </div>

  </div>

</template>
