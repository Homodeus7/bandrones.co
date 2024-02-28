<template>
  <div :class="path === '/' ? 'bg-[#4801ff]' : 'bg-[#f2f2f2]'">
    <HeaderLanding />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
