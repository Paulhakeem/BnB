<template>
  <div class="p-6">
    <p class="font-medium text-gray-600 pb-6 text-sm">
      Book a tour to Diani Beach, Kenya. Enjoy the beautiful beaches, vibrant marine life, and local culture. Perfect for relaxation and adventure seekers alike.
    </p>

    <form action="" class="">
      <div class="flex flex-wrap gap-10 items-center mb-4">
        <div class="flex flex-col mb-4">
          <label for="text" class="text-gray-600">Date</label>
          <input
            type="date"
            id="text"
            name="text"
            class="cursor-pointer text-[#3178c6] border border-gray-300 rounded-md p-1.5 outline-none"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="text" class="text-gray-600">Pick-Ups</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter pick-up location"
            class="cursor-pointer text-[#3178c6] border border-gray-300 rounded-md p-1.5 outline-none w-44"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="text" class="text-gray-600">Pick-ups time</label>
          <input
            type="time"
            name="time"
            placeholder="Enter drop-off location"
            class="cursor-pointer text-[#3178c6] border border-gray-300 rounded-md p-1.5 outline-none"
          />
        </div>
           <div class="flex flex-col mb-4">
          <label for="text" class="text-gray-600">Drop-Offs</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter drop-off location"
            class="cursor-pointer text-[#3178c6] border border-gray-300 rounded-md p-1.5 outline-none w-44"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label for="text" class="text-gray-600">Guests</label>
          <input
            type="number"
            id="text"
            name="text"
            min="1"
            max="10"
            placeholder="1"
            class="outline-none border border-gray-[#3178c6] rounded-md p-1.5"
          />
        </div>
      </div>
      <a
        class="text-md py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-gray-800 bg-gray-100 hover:text-[#3178c6] rounded-lg focus:outline-hidden focus:text-[#3178c6]"
        href="#"
      >
        <Icon icon="mdi:check-bold" class="text-lg" />
        Submit
      </a>
    </form>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
