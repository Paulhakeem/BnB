<script setup lang="ts">
import { RouterLink } from "vue-router";

import { ref, onMounted } from "vue";

const images = [
  new URL("../assets/images/dispencer.jpg", import.meta.url).href,
  new URL("../assets/images/seatroom.jpg", import.meta.url).href,
  new URL("../assets/images/tv.jpg", import.meta.url).href,
  new URL("../assets/images/balcon.jpg", import.meta.url).href,
  new URL("../assets/images/kitchen.jpg", import.meta.url).href,
  new URL("../assets/images/bedroom.jpg", import.meta.url).href,
  new URL("../assets/images/lights.jpg", import.meta.url).href,
];
const current = ref(0);

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % images.length;
  }, 5000);
});
</script>

<template>
  <div
    class="h-screen items-center w-full bg-cover bg-center transition-all duration-1000"
    :style="{ backgroundImage: `url(${images[current]})` }"
  >
    <main
      class="max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full"
    >
      <div class="text-center px-4 sm:px-6 lg:px-8">
        <h5 class="text-lg text-white">Always Within Your Budget</h5>
        <h2 class="mt-1 sm:mt-3 text-3xl font-bold text-white sm:text-6xl">
          <span data-aos="zoom-in" data-aos-duration="1000"
            >My Holiday Deals</span
          >
        </h2>
      </div>
        <RouterLink to="/book-now" class="text-center justify-center">
          <button
            class="my-6 font-sans font-bold uppercase text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-[#3178c6] to-gray text-white text-center"
          >
            Book Now
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </RouterLink>
    </main>
  </div>
</template>
