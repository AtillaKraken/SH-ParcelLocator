<script setup lang="ts">
import ChangeThemeButton from '@/components/common/ChangeThemeButton.vue'
import { useUserSettingsStore } from '@/stores/userSettings.ts'

const userSettingsStore = useUserSettingsStore()
</script>

<template>
  <header class="navbar">
    <div class="brand">Meine App</div>
    <ChangeThemeButton></ChangeThemeButton>
    <nav class="nav-links">
      <RouterLink to="/" :class="userSettingsStore.theme">Home</RouterLink>
    </nav>
  </header>
</template>

<style scoped></style>
