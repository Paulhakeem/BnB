<template>
  <form class="flex gap-10 items-center">
    <div class="flex flex-col mb-4">
      <label for="text" class="text-gray-600">From</label>
      <input type="date" id="text" name="text" class="cursor-pointer text-[#3178c6]"/>
    </div>
    <div class="flex flex-col mb-4">
      <label for="text" class="text-gray-600">To</label>
      <input type="date" id="text" name="text" class="cursor-pointer text-[#3178c6]"/>
    </div>
    <div class="flex flex-col mb-4">
      <label for="text" class="text-gray-600">Guests</label>
      <input
        type="number"
        id="text"
        name="text"
        min="1"
        max="10"
        class="outline-none border border-gray-[#3178c6] rounded-md p-1.5"
      />
    </div>
    <div class="flex flex-col mb-4">
      <span class="text-gray-600">Total Price</span>
      <p class="text-xl font-semibold text-[#3178c6]">Ksh6000</p>
    </div>
  </form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
