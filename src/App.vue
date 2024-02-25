<template>
  <component :is="layout" v-if="layout" />
</template>
<script setup lang="ts">
import { computed, shallowRef, unref } from 'vue'
import { useRoute } from 'vue-router'
import Main from '@/layouts/MainLayout.vue'
import Magazine from '@/layouts/MagazineLayout.vue'
import Work from '@/layouts/WorkLayout.vue'

const route = useRoute()
const main = shallowRef(Main)
const magazine = shallowRef(Magazine)
const work = shallowRef(Work)

const layout = computed(() => {
  if (route.meta.layout === 'main') return unref(main)
  if (route.meta.layout === 'magazine') return unref(magazine)
  if (route.meta.layout === 'work') return unref(work)
})
</script>
<style scoped></style>
