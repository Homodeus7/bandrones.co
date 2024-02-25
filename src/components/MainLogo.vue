<template>
  <div class="flex">
    <div
      class="w-52 flex flex-col font-dark-wide-super text-4xl leading-none uppercase whitespace-nowrap cursor-pointer"
      :class="path === '/' ? 'text-white logo' : 'text-black logo-b'"
    >
      <div class="overflow-hidden h-[35px] flex items-center">
        <span v-gsap="{ animation: animateLogo }">Band</span>
      </div>
      <div class="overflow-hidden h-[35px] flex items-center">
        <span v-gsap="{ animation: animateLogoTwo }">rones</span>
      </div>
      <div class="overflow-hidden h-[35px] flex items-center">
        <span v-gsap="{ animation: animateLogoTree }">Co.</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const path = computed(() => router.currentRoute.value.path)

const animateLogo = (el: any) => {
  gsap.from(el, {
    delay: 1.4,
    y: 100,
    ease: 'back.out',
    duration: 1
  })
}
const animateLogoTwo = (el: any) => {
  gsap.from(el, {
    delay: 1.6,
    y: 100,
    ease: 'back.out',
    duration: 1
  })
}
const animateLogoTree = (el: any) => {
  gsap.from(el, {
    delay: 1.8,
    y: 100,
    ease: 'back.out',
    duration: 1
  })
}
const vGsap = (el: any, binding: any) => {
  const { animation } = binding.value
  animation(el)
}
</script>
<style scoped lang="scss">
.logo {
  transition: opacity 0.5s;
  &:hover {
    transition: color 0.5s, opacity 0.5s;
    color: hsla(0, 0%, 95%, 0.01);
    -webkit-text-stroke: 1px #ffff;
  }
}
.logo-b {
  transition: opacity 0.5s;
  &:hover {
    transition: color 0.5s, opacity 0.5s;
    color: hsla(0, 0%, 95%, 0.01);
    -webkit-text-stroke: 1px #000;
  }
}
</style>
