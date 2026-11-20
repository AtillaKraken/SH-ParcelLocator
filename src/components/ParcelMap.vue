<!-- src/components/ParcelMap.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import OSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import { fromLonLat } from 'ol/proj'
import 'ol/ol.css'

const mapContainer = ref<HTMLElement | null>(null)
let mapInstance: Map | null = null

const parcelVectorSource = new VectorSource()

onMounted(() => {
  if (!mapContainer.value) {
    return
  }

  const baseLayer = new TileLayer({
    source: new OSM()
  })

  const schleswigHolsteinLayer = new VectorLayer({ // outline Bundesland #1
    source: parcelVectorSource
  })

  const parcelLayer = new VectorLayer({
    source: parcelVectorSource
  })

  mapInstance = new Map({
    target: mapContainer.value,
    layers: [baseLayer, schleswigHolsteinLayer, parcelLayer],
    view: new View({
      center: fromLonLat([10.1228, 54.3233]), // SH display in Map
      zoom: 8
    })
  })
})

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.setTarget(undefined)
    mapInstance = null
  }
})
</script>

<template>
  <div
    ref="mapContainer"
    class="map-viewport border rounded shadow-sm"
    role="region"
    aria-label="Schleswig Holstein parcel map"
  />
</template>

<style scoped>
.map-viewport {
  width: 100%;
  height: 55vh;
  min-height: 350px;
}
</style>
