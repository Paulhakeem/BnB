<template>
  <main class="select-none">
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
    <Header />
    <HomePage />


    <div id="head2" class="pt-60 text-center">
      <div class="pb-8 relative">
        <p
          id="text"
          class="text-gray font-medium text-xl tracking-tight capitalize"
        >
          One bedrom
        </p>
        <h3 id="title" class="text-2xl text-blue font-semibold">Apartment</h3>
      </div>
      <div
        id="images"
        class="flex flex-col md:flex-row gap-10 justify-center"
      >
        <div class="cursor-pointer shadow-b-md">
          <div class="relative">
            <img
              src="../assets/images/seatroom.jpg"
              alt=""
              class="w-80 h-60 object-cover rounded-md"
            />
            <div class="">
              <div class="absolute inset-0 bg-gray opacity-80 rounded-md"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div>
                  <p class="text-xl text-white capitalize">Seating Room</p>
                  <Rating />
                </div>
              </div>
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
            <div>
              <p class="text-xl text-white capitalize">kitchen</p>
              <Rating />
            </div>
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
            <div>
              <p class="text-xl text-white capitalize">bed Room</p>
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </div>

 
    <div>
      <About />
    </div>
  </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import HomePage from "../components/HomePage.vue";
import About from "../components/About.vue";
import Rating from "../components/Rating.vue";
</script>
