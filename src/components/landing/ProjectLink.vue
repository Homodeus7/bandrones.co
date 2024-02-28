<template>
  <div
    class="text flex flex-col items-end font-dark-wide-super text-11xl leading-none uppercase whitespace-nowrap"
  >
    <span v-gsap="{ animation: animateTop }">{{ nameOne }}</span>
    <span v-gsap="{ animation: animateTop }">{{ nameTwo }}</span>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'

interface ProjectItem {
  nameOne?: string
  nameTwo?: string
  duration?: number
  action?: boolean
}
const props = defineProps<ProjectItem>()

const animateTop = (el: any) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      transformOrigin: 'right center',
      y: -2000,
      rotateY: '-200deg',
      rotateX: '-150deg'
    },
    {
      y: 0,
      ease: 'sine.out',
      duration: props.duration,
      rotateY: '0deg',
      rotateX: '0deg',
      opacity: 1,
      delay: 0.5
    }
  )
}

const vGsap = (el: any, binding: any) => {
  const { animation } = binding.value
  animation(el)
}
</script>
<style scoped lang="scss">
.box {
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
