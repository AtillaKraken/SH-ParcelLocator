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
import { Stroke, Style } from 'ol/style'
import { all as allStrategy } from 'ol/loadingstrategy'
import { GeoJSON } from 'ol/format'

const mapContainer = ref<HTMLElement | null>(null)
let mapInstance: Map | null = null

const parcelVectorSource = new VectorSource()

onMounted(async () => {
  if (!mapContainer.value) {
    return
  }

  // MASTER PARCEL-MAP PROCESSING:
  const parcelMapView = new View({
    center: fromLonLat([10.1228, 54.2233]), // SH centrally displayed in MapView
    zoom: 7.6,
  })

  // MY PARCEL LAYER:
  const parcelLayer = new VectorLayer({
    source: parcelVectorSource,
  })

  const baseLayer = new TileLayer({
    source: new OSM(),
  })

  // SCHLESWIG HOLSTEIN BORDER PROCESSING:
  const wfsSource = new VectorSource({
    format: new GeoJSON({
      dataProjection: 'EPSG:3857',
      featureProjection: 'EPSG:3857',
    }),
    strategy: allStrategy,
    url:
      '/bkg-wfs/wfs_vg250' +
      '?service=WFS&version=2.0.0&request=GetFeature' +
      '&typeNames=vg250:vg250_lan' +
      '&srsName=EPSG:3857' +
      '&outputFormat=application/json' +
      "&cql_filter=sn_l='01'",
  })

  const schleswigHolsteinLayer = new VectorLayer({
    // outline Bundesland #1
    source: wfsSource,
    style: new Style({
      stroke: new Stroke({
        color: '#b863e3',
        width: 2.5,
        lineDash: [8, 4],
      }),
    }),
  })

  // MAP FINALIZED
  mapInstance = new Map({
    target: mapContainer.value,
    layers: [baseLayer, schleswigHolsteinLayer, parcelLayer],
    view: parcelMapView,
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
