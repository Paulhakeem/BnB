<template>
  <main>
    <Sidebar />
    <div class="grid items-start lg:flex">
      <sidebar />

      <div class="p-8 w-full container">
        <h1 class="text-2xl font-medium mb-4 text-[#3178c6]">Book Now🤗</h1>
        <p class="text-gray-600 mb-6">
          Please select your booking options below.
        </p>

       <div class="flex-wrap lg:flex justify-between items-center">
        <div class="col-span-2">
           <div class="space-y-10 mb-6 ">
          <Button class="flex gap-2 items-center bg-[#3178c6]">
            <Icon icon="si:add-circle-fill" />
            BnB</Button
          >
          <!--  -->
          <BnB/>
          <!--  -->
          <Button class="flex gap-2 items-center bg-[#3178c6]">
            <Icon icon="si:add-circle-fill" />
            Tour and Safaris
          </Button>
        </div>
        </div>
        <div class="bg-gray-300 p-6 rounded-lg w-full lg:w-1/3">
          <div class="space-y-10 mb-6">
            <h5 class="text-xl text-gray-600">Confirm Bookings</h5>
            <Button class="flex gap-2 items-center bg-[#3178c6]">
              <Icon icon="si:add-circle-fill" />
              Car Rentals
            </Button>
            <Button class="flex gap-2 items-center bg-[#3178c6]">
              <Icon icon="si:add-circle-fill" />
              Events
            </Button>
          </div>
        </div>
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
import BnB from "../components/BnB.vue";
import { Icon } from "@iconify/vue";
</script>
