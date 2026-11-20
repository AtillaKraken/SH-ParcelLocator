<script setup lang="ts">
import HeaderNavbar from '@/components/common/HeaderNavbar.vue'
import FooterBar from '@/components/common/FooterBar.vue'
</script>

<template>
  <HeaderNavbar
    class="d-flex justify-content-between align-items-center p-3 border-bottom"
  ></HeaderNavbar>
  <RouterView
  ></RouterView>
  <FooterBar
    class="d-flex justify-content-between align-items-center p-3"
  ></FooterBar>
</template>

<style scoped></style>
