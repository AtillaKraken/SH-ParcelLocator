import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserSettingsStore = defineStore('usersettings', () => {
  const theme = ref('light')
  return { theme }
})
