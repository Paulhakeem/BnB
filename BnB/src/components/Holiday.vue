<template>
  <main class="flex flex-wrap gap-6 justify-center items-center m-auto pt-10">
    <div
      v-for="(info, index) in images"
      :key="index"
      class="flex flex-col w-72"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <a class="mx-auto" href="#">
        <img class="rounded-full w-52 h-52 object-cover" loading="lazy" :src="info.src" />
      </a>

      <!-- Details -->
      <div class="mt-6 pl-3">
        <h1 class="text-[#3178c6] text-lg font-bold mb-1">{{ info.title }}</h1>
        <div class="text-gray-700 font-light mb-2">
          {{ info.location }}
        </div>

        <div>
          <Button class="w-24 bg-[#3178c6]">Book Now</Button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const images = ref([
  {
    src: new URL("../assets/holiday/wasini1.jpg", import.meta.url).href,
    title: "Wasini Island",
    location: "Kwale, Kenya",
  },
  {
    src: new URL("../assets/holiday/dolphin.jpg", import.meta.url).href,
    title: "Dolphin View",
    location: "Kwale, Kenya",
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
