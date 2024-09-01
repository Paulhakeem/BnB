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

    <div id="head2" class="pt-60">
      <div class="pb-8">
        <h5 class="text-2xl text-blue text-md font-medium capitalize">
          one Bedroom Apartment
        </h5>
      </div>
      <div
        id="images"
        class="flex flex-col md:flex-row gap-3 justify-center items-center"
      >
        <div>
          <div>
            <img
              src="../assets/images/dispencer.jpg"
              alt=""
              class="w-[40em] h-[17em] object-cover rounded-tl-xl rounded-bl-xl"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-3">
          <div>
            <img
              src="../assets/images/bedroom.jpg"
              alt="bedroom"
              class="w-64 h-[8em] object-cover"
            />
          </div>
          <div>
            <img
              src="../assets/images/tv.jpg"
              alt="tv"
              class="w-64 h-[8em] object-cover"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-3">
          <div>
            <img
              src="../assets/images/balcon.jpg"
              alt="bedroom"
              class="w-64 h-[8em] object-cover rounded-tr-xl"
            />
          </div>
          <div>
            <img
              src="../assets/images/kitchen.jpg"
              alt="bedroom"
              class="w-64 h-[8em] object-cover rounded-br-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <priceVue />
      <ThePlace />
    </div>

    <!-- footer -->
  </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import HomePage from "../components/HomePage.vue";
import priceVue from "../components/PriceVue.vue";
import ThePlace from "../components/ThePlace.vue";
</script>
