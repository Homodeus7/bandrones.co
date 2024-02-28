<template>
  <header class="fixed bottom-0 w-full z-20">
    <div class="flex flex-col px-16 pb-10 pr-60">
      <MainLogo />
      <nav
        class="flex items-end gap-10 pt-6 whitespace-nowrap"
        :class="path === '/' ? 'text-white' : 'text-black'"
      >
        <div v-gsap="{ animation: animateInfo }" class="flex flex-col gap-2">
          <span>{{ info.name }}</span>
          <span>{{ info.direct }}</span>
        </div>
        <div v-gsap="{ animation: animateInfoTwo }" class="flex flex-col gap-2">
          <span>{{ info.city }}</span>
          <a :href="`mailto:${info.email}`">{{ info.email }}</a>
        </div>
        <div class="w-full flex justify-between items-end">
          <div v-gsap="{ animation: animateInfoThree }" class="flex flex-col gap-2">
            <span
              v-for="(link, i) in routerLinks"
              :key="link.name"
              class="flex gap-3 cursor-pointer"
            >
              <span class="text-sm">0{{ i + 1 }}</span>
              <router-link :to="link.link">{{ link.name }}</router-link>
            </span>
          </div>
          <div v-gsap="{ animation: animateInfoFour }" class="flex flex-col gap-2">
            <span
              v-for="(link, i) in socialLinks"
              :key="link.name"
              class="flex gap-3 cursor-pointer"
            >
              <span class="text-sm">0{{ i + 1 }}</span>
              <a :href="link.link">{{ link.name }}</a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import MainLogo from '@/components/MainLogo.vue'
import { useData } from '@/store/data/index'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

interface HeaderLanding {
  delay?: number
}
const props = defineProps<HeaderLanding>()

const router = useRouter()
const path = computed(() => router.currentRoute.value.path)

const data = useData()
const info = computed(() => data.info)
const routerLinks = computed(() => data.routerLinks)
const socialLinks = computed(() => data.socialLinks)

const animateInfo = (el: any) => {
  gsap.from(el, {
    opacity: 0,
    delay: 1.5,
    y: 100,
    ease: 'power3.inOut',
    duration: 2
  })
}
const animateInfoTwo = (el: any) => {
  gsap.from(el, {
    opacity: 0,
    delay: 1.65,
    y: 100,
    ease: 'power3.inOut',
    duration: 2
  })
}
const animateInfoThree = (el: any) => {
  gsap.from(el, {
    opacity: 0,
    delay: 1.8,
    y: 100,
    ease: 'power3.inOut',
    duration: 2
  })
}
const animateInfoFour = (el: any) => {
  gsap.from(el, {
    opacity: 0,
    delay: 1.95,
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
<style scoped lang="scss"></style>
