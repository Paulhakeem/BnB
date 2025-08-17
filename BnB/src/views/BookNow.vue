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
            <div class="space-y-10 mb-6">
              <Button class="flex gap-2 items-center bg-[#3178c6]">
                <Icon icon="si:add-circle-fill" />
                BnB</Button
              >
              <!-- section -->
              <BnB />
              <!--section  -->
              <Button class="flex gap-2 items-center bg-[#3178c6]">
                <Icon icon="si:add-circle-fill" />
                Tour and Safaris
              </Button>
              <!--section  -->
              <Tabs />
              <!--section  -->
            </div>
          </div>
          <div class="bg-gray-300 p-6 rounded-lg w-full lg:w-1/3">
            <div class="space-y-10 mb-6">
              <h5 class="text-xl text-gray-600 text-center">
                Confirm Bookings
              </h5>
              <section class="space-y-4">
                <h6 class="text-md text-[#3178c6] font-semibold">BnB</h6>
                <div class="flex flex-wrap justify-between items-center">
                  <p class="text-gray-600">
                    <span class="text-sm pr-2">From:</span>2025-10-01
                  </p>
                  <p class="text-gray-600">
                    <span class="text-sm pr-2">To:</span> 2025-10-05
                  </p>
                  <p class="text-gray-600">
                    <span class="text-sm pr-2">Arrival Time:</span>09:30AM
                  </p>

                  <p class="text-gray-600">
                    <span class="text-sm pr-2">Guests:</span> 2
                  </p>
                </div>

                <h6 class="text-md text-[#3178c6] font-semibold">Tour</h6>
              </section>
              <section class="space-y-4">
                <h6 class="text-md text-[#3178c6] font-semibold">Total</h6>
                <div class="flex justify-between items-center">
                  <p class="text-gray-600"><span class="text-sm pr-2">BnB:</span> $200</p>
                  <p class="text-gray-600"><span class="text-sm pr-2">Tour:</span> $150</p>
                </div>
                <p class="text-gray-600 font-bold">Total: $350</p>
              </section>
              <Button class="w-full bg-[#3178c6] text-white">
                Confirm Booking
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
import Tabs from "../components/Tours/tabs.vue";
import { Icon } from "@iconify/vue";
</script>
