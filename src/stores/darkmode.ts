import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkmode', () => {
  const isDarkModeActive = ref(false)

  return { isDarkModeActive }
})
