<template>
  <main>
    <div class="">
      <div class="">
        <video
          autoplay
          loop
          muted
          id="video"
          class="z-[-1] min-w-full max-h-screen absolute top-0 left-0 buttom-0 right-0 object-cover bg-no-repeat"
        >
          <source src="../assets/video/bnb.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <Header />
    <HomePage />

    <!-- content -->
    <div class="pt-60 text-center">
      <div class="pb-8 relative">
        <p class="text-gray font-medium text-xl tracking-tight">One bedrom</p>
        <h3 class="text-3xl text-blue font-semibold">Apartment</h3>
      </div>
      <div
        class="flex flex-wrap space-x-10 justify-center justify-items-center"
      >
        <div class="cursor-pointer shadow-b-md">
          <div class="relative">
            <img
              src="../assets/images/seatroom.jpg"
              alt=""
              class="w-80 h-60 object-cover rounded-md"
            />
            <div class="absolute inset-0 bg-gray opacity-80 rounded-md"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="bg-white"></div>
              <p class="text-xl text-white">Seating Room</p>
              <div class="bg-white"></div>
            </div>
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty">
          <img
            src="../assets/images/kitchen.jpg"
            alt=""
            class="w-80 h-60 object-cover rounded-md"
          />
          <div class="absolute inset-0 bg-gray opacity-80 rounded-md"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white"></div>
            <p class="text-xl text-white">kitchen</p>
            <div class="bg-white"></div>
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty">
          <img
            src="../assets/images/bedroom.jpg"
            alt=""
            class="w-80 h-60 object-cover rounded-md"
          />
          <div class="absolute inset-0 bg-gray opacity-80 rounded-md"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white"></div>
            <p class="text-xl text-white">bed Room</p>
            <div class="bg-white"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- about -->
  </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import HomePage from "../components/HomePage.vue";
</script>
