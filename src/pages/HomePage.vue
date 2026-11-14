<!-- src/pages/HomePage.vue -->
<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <h1>Dashboard / Home</h1>

    <section class="section"></section>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  background: #111;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}
</style>
