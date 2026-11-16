<!-- src/pages/HomePage.vue -->
<script setup lang="ts">
import { useUserSettingsStore } from '@/stores/userSettings'

const userSettingsStore = useUserSettingsStore()
</script>

<template>
  <div class="home-container">
    <h1>Dashboard / Home</h1>
    <h2>current mode: {{ userSettingsStore.isDarkMode ? 'Dark Mode' : 'Light Mode' }}</h2>

    <section class="section"></section>
  </div>
</template>
