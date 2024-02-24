<template>
  <main class="stagePerspective parallaxPerspective">
    <ul class="projects flex flex-col">
      <li class="box">
        <div
          class="text flex flex-col items-end text-11xl leading-none uppercase whitespace-nowrap cursor-pointer"
        >
          <span>Stardex</span>
          <span>P2P trade</span>
        </div>
      </li>
      <li class="box">
        <div
          class="text flex flex-col items-end text-11xl leading-none uppercase whitespace-nowrap cursor-pointer"
        >
          <span>Rdex</span>
          <span>P2P trade</span>
        </div>
      </li>
      <li class="box">
        <div
          class="text flex flex-col items-end text-11xl leading-none uppercase whitespace-nowrap cursor-pointer"
        >
          <span>Rdex</span>
          <span>P2P trade</span>
        </div>
      </li>
    </ul>
  </main>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.parallaxPerspective {
  perspective-origin: 20% 60%;
  will-change: perspective-origin;
}
.stagePerspective {
  position: relative;
  perspective: 100vw;
  height: 100vh;
  will-change: transform;
}
.projects {
  position: relative;
  width: 95%;
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
