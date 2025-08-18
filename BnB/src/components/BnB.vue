<template>
  <form class="">
    <div class="flex gap-10 items-center">
      <div class="flex flex-col mb-4">
        <label for="text" class="text-gray-600">From</label>
        <input
          type="date"
          id="text"
          name="text"
          class="cursor-pointer text-[#3178c6] border border-gray-300 rounded-md p-1.5 outline-none w-32"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label for="text" class="text-gray-600">To</label>
        <input
          type="date"
          id="text"
          name="text"
          class="cursor-pointer text-[#3178c6] border border-gray-300 rounded-md p-1.5 outline-none w-32"
        />
      </div>
    </div>
    <div class="flex gap-10 items-center mb-4">
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

      <div class="flex gap-4 items-center mb-4">
        <label for="text" class="text-gray-600">Arrival time</label>
        <input
          type="time"
          class="cursor-pointer text-[#3178c6] border border-gray-300 rounded-md p-1.5 outline-none"
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
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped></style>
