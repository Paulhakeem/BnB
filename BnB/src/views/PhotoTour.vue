<template>
  <main>
    <Sidebar/>
  <div class="pt-6">
    <h1
      data-aos="zoom-in"
      class="text-2xl font-semibold text-black text-center"
    >
      Photo Tour
    </h1>

    <div class="flex flex-wrap gap-2 justify-evenly pt-14">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="text-xl text-black text-start"
      >
        <h3 class="font-semibold">Living room</h3>
      </div>
      <div data-aos="fade-up" class="flex gap-2 flex-wrap">
        <img
          src="../assets/images/sofa.jpg"
          alt="bedroom"
          loading="lazy"
          class="w-80 h-96 object-cover"
        />
        <div data-aos="fade-up" class="space-y-2">
          <img
            src="../assets/images/seatroom.jpg"
            alt="seating room"
            loading="lazy"
            class="w-72 h-[11.7em] object-cover"
          />
          <img
            src="../assets/images/dispencer.jpg"
            alt="seating room"
            loading="lazy"
            class="w-72 h-[11.7em] object-cover"
          />
        </div>
      </div>
    </div>

    <!-- bedroom -->
    <div data-aos="fade-up" class="flex flex-wrap gap-2 justify-evenly pt-14">
      <div class="text-xl text-black text-start">
        <h3 class="font-semibold capitalize">bedroom</h3>
        <p class="text-gray text-sm">Double bed</p>
      </div>
      <div class="flex gap-2 flex-wrap">
        <img
          src="../assets/images/bed.jpg"
          alt="bedroom"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />

        <img
          src="../assets/images/bedroom.jpg"
          alt="bedroom"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />
      </div>
    </div>

    <!-- kitchen -->
    <div data-aos="fade-up" class="flex flex-wrap gap-2 justify-evenly pt-14">
      <div class="text-xl text-black text-start">
        <h3 class="font-semibold capitalize">Kitchenette</h3>
      </div>
      <div class="flex gap-2 flex-wrap">
        <img
          src="../assets/images/kitchen.jpg"
          alt="Kitchenette"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />

        <img
          src="../assets/images/jikoni.jpg"
          alt="Kitchenette"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />
      </div>
    </div>

    <!-- kitchen view -->
    <div data-aos="fade-up" class="flex flex-wrap gap-2 justify-evenly pt-14">
      <div class="text-xl text-black text-start">
        <h3 class="font-semibold capitalize">Full kitchen</h3>
      </div>
      <div class="flex gap-2 flex-wrap">
        <img
          src="../assets/images/kitchenview.jpg"
          alt="Kitchenette"
          loading="lazy"
          class="w-[37rem] h-96 object-cover"
        />
      </div>
    </div>

    <!-- bathroom -->
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="flex flex-wrap gap-2 justify-evenly pt-14"
    >
      <div class="text-xl text-black text-start">
        <h3 class="font-semibold capitalize">bathroom</h3>
        <div class="inline-block text-xs">
          <ol class="list-disc">
            <li>Body soap</li>
            <li>Cleaning products</li>
            <li>Hot water</li>
            <li>Shampoo</li>
            <li>Shower gel</li>
          </ol>
        </div>
      </div>
      <div class="flex gap-2 flex-wrap">
        <img
          src="../assets/images/bathrom.jpg"
          alt="Kitchenette"
          loading="lazy"
          class="w-[37rem] h-96 object-cover"
        />
      </div>
    </div>

    <!-- Exterior -->
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="flex flex-wrap gap-2 justify-evenly pt-14"
    >
      <div class="text-xl text-black text-start">
        <h3 class="font-semibold capitalize">Exterior</h3>
      </div>
      <div class="flex gap-2 flex-wrap">
        <img
          src="../assets/images/balcon.jpg"
          alt="Exterior"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />

        <img
          src="../assets/images/outside.jpg"
          alt="Exterior"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />
      </div>
    </div>

    <!-- Additional photos -->
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="flex flex-wrap gap-2 justify-evenly pt-14"
    >
      <div class="text-xl text-black text-start">
        <h3 class="font-semibold capitalize">Additional <br />photos</h3>
      </div>
      <div class="flex gap-2 flex-wrap">
        <img
          src="../assets/images/lights.jpg"
          alt="Additional photos"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />

        <img
          src="../assets/images/tv.jpg"
          alt="Additional photos"
          loading="lazy"
          class="w-72 h-96 object-cover"
        />
      </div>
    </div>

    <Footer />
  </div>
  </main>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
