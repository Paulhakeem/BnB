<template>
  <main>
    <!-- Header -->
    <Sidebar />
    <!-- Header -->
    <section
      class="bg-[url('../assets/holiday/buffalo.jpg')] bg-cover bg-center mb-10 h-64 flex justify-center text-center items-center"
    >
      <div>
        <h1 class="text-white text-4xl font-semibold">Explore Our Packages</h1>
      </div>
    </section>

    <div class="text-center mb-10">
      <div class="my-10 pt-10">
        <p data-aos="zoom-in" class="text-[#3178c6] text-lg">Take Yourself</p>
        <h1 data-aos="fade-up" class="text-2xl font-semibold text-gray-800">
          Discover the Best Tours
        </h1>
      </div>
      <div class="flex flex-wrap gap-6 justify-center items-center m-auto">
        <div
          v-for="(info, index) in images"
          :key="index"
          class="flex flex-col w-72"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a class="mx-auto" href="#">
            <img
              class="rounded-full w-52 h-52 object-cover"
              loading="lazy"
              :src="info.src"
            />
          </a>

          <!-- Details -->
          <div class="mt-6 pl-3">
            <h1 class="text-[#3178c6] text-lg font-bold mb-1">
              {{ info.title }}
            </h1>
            <div class="text-gray-700 font-light mb-2">
              {{ info.location }}
            </div>

            <RouterLink to="/book-now">
              <Button class="w-24 bg-[#3178c6]">Book Now</Button>
            </RouterLink>
          </div>
        </div>

        <Holiday />
      </div>
    </div>
    <Footer />
  </main>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import { Button } from "@/components/ui/button";
import Holiday from "../components/Holiday.vue";
import Footer from "../components/Footer.vue";

const images = ref([
  {
    src: new URL("../assets/holiday/elephant.jpg", import.meta.url).href,
    title: "Tsavo East",
    location: " Tsavo East, Taita Taveta, Kenya",
  },
  {
    src: new URL("../assets/holiday/mara22.jpg", import.meta.url).href,
    title: "Masai Mara",
    location: "Masai mara, Narok, Kenya",
  },
  {
    src: new URL("../assets/holiday/seregeti.jpg", import.meta.url).href,
    title: "Serengeti",
    location: "Seregeti National Park, Tanzania",
  },
  {
    src: new URL("../assets/holiday/diani.jpg", import.meta.url).href,
    title: "Diani Beach",
    location: "Diani Beach, Kwale, Kenya",
  },
]);
</script>
