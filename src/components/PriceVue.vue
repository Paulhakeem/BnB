<template>
  <main class="mt-24 bg-blue w-full p-6">
    <div class="flex justify-between">
      <div>
        <h3 class="text-white text-md font-semibold">One Bedroom Apartment</h3>
        <p class="text-sm text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, hic?
        </p>
      </div>

      <div>
        <p class="text-xs text-white pb-2"><span class="text-2xl font-bold">$25</span> Per Night</p>
        <button
          class="inline-flex items-center px-4 py-2 bg-white text-blue text-sm font-medium rounded-md uppercase cursor-pointer gap-2"
        >
          book now
          <i class="fa-solid fa-forward-fast"></i>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped></style>
