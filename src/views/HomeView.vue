<template>
  <main>
    <video
      autoplay
      loop
      muted
      id="video"
      class="z-[-1000] w-full absolute top-0 left-0 buttom-0 object-cover"
    >
      <source src="../assets/video/bnb.mp4" type="video/mp4" />
    </video>
   <Header/>
  </main>
</template>

<script setup>
import Header from "../components/Header.vue"
</script>

<style lang="scss" scoped></style>
