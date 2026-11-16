<script setup lang="ts">
import { useUserSettingsStore } from '@/stores/userSettings.ts'
const userSettingsStore = useUserSettingsStore()
</script>

<template>
  <BButton
    :variant="userSettingsStore.isDarkMode ? 'outline-light' : 'outline-dark'"
    size="sm"
    @click="userSettingsStore.toggleTheme()"
  >
    {{ userSettingsStore.isDarkMode ? '🌝️ Light Mode' : '🌚 Dark Mode' }}
  </BButton>
</template>
