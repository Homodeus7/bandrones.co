<template>
  <div class="flex">
    <div
      class="w-52 logo flex flex-col font-dark-wide-super text-4xl text-white leading-none uppercase whitespace-nowrap cursor-pointer"
    >
      <div class="overflow-hidden relative h-10">
        <span v-gsap="{ animation: animateLogo }" class="absolute top-0">Band</span>
      </div>
      <div class="overflow-hidden relative h-10">
        <span v-gsap="{ animation: animateLogoTwo }" class="absolute top-0">rones</span>
      </div>
      <div class="overflow-hidden relative h-10">
        <span v-gsap="{ animation: animateLogoTree }" class="absolute top-0">Co.</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useData } from '@/store/data/index'
import { computed } from 'vue'
import gsap from 'gsap'

const data = useData()
const accounts = computed(() => data.accounts)

const animateLogo = (el: any) => {
  gsap.from(el, {
    delay: 0.6,
    y: 100,
    ease: 'power3.inOut',
    duration: 2
  })
}
const animateLogoTwo = (el: any) => {
  gsap.from(el, {
    delay: 0.8,
    y: 100,
    ease: 'power3.inOut',
    duration: 2
  })
}
const animateLogoTree = (el: any) => {
  gsap.from(el, {
    delay: 1,
    y: 100,
    ease: 'power3.inOut',
    duration: 2
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
</style>
