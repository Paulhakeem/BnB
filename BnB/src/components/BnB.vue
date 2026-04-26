<template>
  <form
    class="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300"
  >
    <h3
      class="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"
    >
      📅 Book Your Stay
    </h3>
    <div class="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
      <div class="flex flex-col">
        <label for="from-date" class="text-gray-700 font-semibold mb-2"
          >Check-In</label
        >
        <input
          type="date"
          id="from-date"
          name="from-date"
          class="cursor-pointer text-[#667eea] border-2 border-gray-300 rounded-lg p-3 outline-none w-40 hover:border-[#667eea] focus:border-[#667eea] focus:ring-2 focus:ring-purple-200 transition-all"
        />
      </div>
      <div class="flex flex-col">
        <label for="to-date" class="text-gray-700 font-semibold mb-2"
          >Check-Out</label
        >
        <input
          type="date"
          id="to-date"
          name="to-date"
          class="cursor-pointer text-[#667eea] border-2 border-gray-300 rounded-lg p-3 outline-none w-40 hover:border-[#667eea] focus:border-[#667eea] focus:ring-2 focus:ring-purple-200 transition-all"
        />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-6 items-start lg:items-end mt-6">
      <div class="flex flex-col">
        <label for="guests" class="text-gray-700 font-semibold mb-2"
          >👥 Guests</label
        >
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          placeholder="1"
          class="outline-none border-2 border-gray-300 rounded-lg p-3 w-40 hover:border-[#667eea] focus:border-[#667eea] focus:ring-2 focus:ring-purple-200 transition-all"
        />
      </div>

      <div class="flex flex-col">
        <label for="arrival-time" class="text-gray-700 font-semibold mb-2"
          >🕐 Arrival Time</label
        >
        <input
          type="time"
          id="arrival-time"
          class="cursor-pointer text-[#667eea] border-2 border-gray-300 rounded-lg p-3 outline-none w-40 hover:border-[#667eea] focus:border-[#667eea] focus:ring-2 focus:ring-purple-200 transition-all"
        />
      </div>
    </div>
    <div class="mt-6">
      <button
        type="button"
        class="text-lg py-3 px-8 inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-full font-bold hover:shadow-lg hover:scale-110 transform transition-all duration-300 focus:outline-hidden"
      >
        <Icon icon="mdi:check-bold" class="text-xl" />
        Reserve Now
      </button>
    </div>
  </form>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped></style>
