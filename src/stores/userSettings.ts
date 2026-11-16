import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

export const useUserSettingsStore = defineStore('usersettings', () => {
  // get browsers set theme, else use lightmode
  const savedTheme = localStorage.getItem('theme') as Theme | null
  const theme = ref<Theme>(savedTheme ?? 'light')

  const isDarkMode = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // sync <html> attribute & localStorage
  watch(
    theme,
    (newTheme) => {
      document.documentElement.setAttribute('data-bs-theme', newTheme)
      localStorage.setItem('theme', newTheme)
    },
    { immediate: true }, // set attribute in App-mount
  )

  return {
    theme,
    isDarkMode,
    toggleTheme,
  }
})
