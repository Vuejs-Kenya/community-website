<script setup lang="ts">
import { PropType } from 'vue'
import Close from '~/components/icons/Close.vue'

interface Props {
  show: boolean
  closable?: boolean
  message?: string
  autoClose?: boolean
  closeTimeout?: number
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  closable: true,
  autoClose: true,
  closeTimeout: 5000,
})

// emit close toast
const toastEmits = defineEmits<{
  (e: 'close'): void
}>()

// auto close toast
watch(
  () => props.show,
  (newValue) => {
    if (newValue && props.autoClose) {
      setTimeout(() => {
        toastEmits('close')
      }, props.closeTimeout)
    }
  },
)
</script>

<template>
  <Teleport v-if="show" to="body">
    <div class="fixed flex justify-center w-full top-20">
      <div
        id="toast-simple"
        class="mx-3 flex items-center px-4 py-5 w-full max-w-lg text-gray-400 bg-gray-800 rounded-lg shadow"
        role="alert"
      >
        <slot name="toastIcon" />
        <div class="pl-4 text-sm font-normal">
          {{ message }}
        </div>
        <button
          v-if="closable"
          type="button"
          class="ml-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          @click="$emit('close')"
        >
          <span class="sr-only">Close</span>
          <Close />
        </button>
      </div>
    </div>
  </Teleport>
</template>
