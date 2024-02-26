<template>
  <main class="back min-h-[100vh]">
    <div class="max-w-[1440px] m-auto flex justify-end">
      <h1
        class="text flex flex-col items-end pt-[110px] font-dark-wide-super text-8xl leading-none tracking-wider uppercase whitespace-nowrap z-10"
      >
        <span>Stardex</span>
        <span>P2P trade</span>
      </h1>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.text {
  color: hsla(0, 0%, 95%, 0.01);
  -webkit-text-stroke: 1.5px #000000;
}

.back::after {
  content: '';
  position: absolute;
  top: 220px;
  height: 60vh;
  width: 100vw;
  background: #534ca5;
  z-index: 0;
}
</style>
