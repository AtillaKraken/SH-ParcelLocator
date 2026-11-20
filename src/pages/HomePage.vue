<!-- src/pages/HomePage.vue -->
<script setup lang="ts">
import { useUserSettingsStore } from '@/stores/userSettings'
import ParcelMap from '@/components/ParcelMap.vue'

const userSettingsStore = useUserSettingsStore()
</script>

<template>
  <div class="justify-content-between p-3 border-bottom">
    <h1>Dashboard / Home</h1>
    <h2>current mode: {{ userSettingsStore.isDarkMode ? 'Dark Mode' : 'Light Mode' }}</h2>

    <ParcelMap></ParcelMap>

    <BAccordion>
      <BAccordionItem title="What's a cadastral parcel?">
        <p class="mb-0">
          A <strong>cadastral parcel</strong> (German: <em>Flurstück</em>) is the smallest
          officially surveyed and registered unit of land in the real estate cadastre
          (<em>Liegenschaftskataster</em>). Each parcel is uniquely identified by an official parcel
          identifier (<em>Flurstückskennzahl</em>) and contains geometric boundaries as well as
          descriptive attributes like area size, municipality, and land use.
        </p>
      </BAccordionItem>
    </BAccordion>
  </div>
</template>
