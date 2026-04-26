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
    class="h-screen items-center w-full bg-cover bg-center transition-all duration-1000 relative overflow-hidden"
    :style="{ backgroundImage: `url(${images[current]})` }"
  >
    <!-- Dark overlay for better text visibility -->
    <div class="absolute inset-0 bg-black opacity-40"></div>

    <!-- Animated gradient background -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30"
    ></div>

    <main
      class="max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full relative z-10"
    >
      <div class="text-center px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h5
          class="text-lg sm:text-xl text-yellow-300 font-semibold mb-2 animate-pulse"
        >
          ✨ Always Within Your Budget
        </h5>
        <h2
          class="mt-1 sm:mt-3 text-4xl sm:text-6xl lg:text-7xl font-bold text-white sm:text-white drop-shadow-lg"
        >
          <span data-aos="zoom-in" data-aos-duration="1000" class="inline-block"
            >My Holiday Deals</span
          >
        </h2>
        <p
          class="mt-4 text-lg sm:text-xl text-gray-200 font-light drop-shadow-md"
        >
          Discover your perfect getaway with unbeatable prices
        </p>
      </div>
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 z-20"
      >
        <RouterLink
          to="/book-now"
          class="transform hover:scale-110 transition-all duration-300"
        >
          <button
            class="font-sans font-bold uppercase text-sm sm:text-base py-4 px-8 rounded-full bg-gradient-to-r from-[#ff6b6b] via-[#ee5a6f] to-[#c44569] text-white text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            <i class="fa-solid fa-calendar-check"></i>
            Book Now
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </RouterLink>
        <RouterLink
          to="/"
          class="transform hover:scale-110 transition-all duration-300"
        >
          <button
            class="font-sans font-bold uppercase text-sm sm:text-base py-4 px-8 rounded-full bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] text-white text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            <i class="fa-solid fa-right-to-bracket"></i>
            Sign Up
          </button>
        </RouterLink>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}
</style>
