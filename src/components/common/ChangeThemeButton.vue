<script setup lang="ts">
import { useUserSettingsStore } from '@/stores/userSettings.ts'
const userSettingsStore = useUserSettingsStore()
</script>

<template>
  <button @click="userSettingsStore.theme = 'dark'">Enable dark mode</button>
  <button @click="userSettingsStore.theme = 'light'">Enable light mode</button>
</template>
