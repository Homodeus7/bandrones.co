<template>
  <div :class="path === '/' ? 'bg-[#4801ff]' : 'bg-[#f2f2f2]'">
    <HeaderLanding />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import HeaderLanding from '@/components/landing/HeaderLanding.vue'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const path = computed(() => router.currentRoute.value.path)
</script>
