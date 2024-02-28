<template>
  <main>
    <nav class="stagePerspective parallaxPerspective py-52">
      <div class="projects flex flex-col">
        <a
          @click="clickToLink(project.link)"
          v-for="(project, ind) in projects"
          :key="project.nameOne"
          class="box cursor-pointer"
        >
          <ProjectLink
            :name-one="project.nameOne"
            :name-two="project.nameTwo"
            :duration="0.5 * ind + 1"
          />
        </a>
      </div>
    </nav>
  </main>
</template>
<script setup lang="ts">
import ProjectLink from '@/components/landing/ProjectLink.vue'
import { useRouter } from 'vue-router'
import { useData } from '@/store/data/index'
import { watch, ref, computed } from 'vue'

const data = useData()
const projects = computed(() => data.projects)
const router = useRouter()

const clickToLink = (link: string) => {
  setTimeout(() => router.push(link), 1000)
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
}
</style>
