<template>
  <main>
    <Sidebar />
    <div class="grid items-start lg:flex">
      <sidebar />

      <div class="p-8 w-full container">
        <h1 class="text-4xl font-medium mb-4 text-[#3178c6]">Book Now</h1>
        <p class="text-gray-600 mb-6">
          Please select your booking options below.
        </p>

        <div class="space-y-10 mb-6 ">
          <Button class="flex gap-2 items-center bg-[#3178c6]">
            <Icon icon="si:add-circle-fill" />
            BnB</Button
          >
          <Button class="flex gap-2 items-center bg-[#3178c6]">
            <Icon icon="si:add-circle-fill" />
            Tour and Safaris
          </Button>
        </div>
        <!-- Booking form or content goes here -->
      </div>
    </div>
  </main>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import Sidebar from "../components/Sidebar.vue";
import sidebar from "../components/Booking/BookingMenu.vue";
import { Icon } from "@iconify/vue";
</script>
