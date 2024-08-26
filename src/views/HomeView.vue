<template>
  <main>
    <video
      autoplay
      loop
      muted
      id="video"
      class="z-[-1000] min-w-full max-h-screen absolute top-0 left-0 buttom-0 object-cover"
    >
      <source src="../assets/video/bnb.mp4" type="video/mp4" />
    </video>
   <Header/>
   <HomePage/>
  </main>
</template>

<script setup>
import Header from "../components/Header.vue"
import HomePage from "../components/HomePage.vue"
</script>

<style lang="scss" scoped></style>
