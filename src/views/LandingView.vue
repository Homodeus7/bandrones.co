<template>
  <main>
    <nav class="stagePerspective parallaxPerspective py-52">
      <ul class="projects flex flex-col">
        <li v-for="project in projects" :key="project.nameOne" class="box">
          <div
            class="text font-dark-wide-super text-11xl leading-none uppercase whitespace-nowrap cursor-pointer"
          >
            <div class="flex flex-col items-end">
              <span v-gsap="{ animation: animateTop }">{{ project.nameOne }}</span>
              <span v-gsap="{ animation: animateTop }">{{ project.nameTwo }}</span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </main>
</template>
<script setup lang="ts">
import { useData } from '@/store/data/index'
import { computed } from 'vue'
import gsap from 'gsap'

const data = useData()
const projects = computed(() => data.projects)

const animateTop = (el: any) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      transformOrigin: 'right center',
      scale: 0,
      y: -2000,
      rotateY: '-200deg',
      rotateX: '-150deg'
    },
    {
      y: 0,
      scale: 1,
      rotateY: '0deg',
      rotateX: '0deg',
      ease: 'power4.out',
      duration: 3,
      opacity: 1,
      delay: 0.2
    }
  )
}

const vGsap = (el: any, binding: any) => {
  const { animation } = binding.value
  animation(el)
}
</script>
<style scoped lang="scss">
.parallaxPerspective {
  perspective-origin: 20% 50%;
  will-change: perspective-origin;
}
.stagePerspective {
  position: relative;
  perspective: 100vw;
  will-change: transform;
}
.projects {
  position: relative;
  width: 97%;
  transform-style: preserve-3d;
}
.box {
  transform-style: preserve-3d;
  perspective: 1500px;
  .text {
    letter-spacing: 0.02em;
    transform: rotateY(-20deg) translateZ(0) scale(0.6, 1);
    transform-origin: right center;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .text span {
    transition: opacity 0.5s;
  }
  &:hover {
    .text {
      transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      transform: rotateY(-10deg) scale(0.7, 1);
    }
    .text span {
      transition: color 0.5s, opacity 0.5s;
      color: hsla(0, 0%, 95%, 0.01);
      -webkit-text-stroke: 2px #000;
    }
  }
}
</style>
