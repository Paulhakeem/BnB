<template>
  <section>
    <div class="mt-12 p-6 md:p-12 flex flex-wrap justify-evenly gap-12">
      <div class="">
        <h4
          data-aos="fade-up"
          class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2"
        >
          ✨ What This Place Offers
        </h4>
        <p class="text-gray-600 text-sm mb-6">
          Everything you need for a perfect stay
        </p>
        <button
          data-aos="fade-up"
          @click="toggleModal"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm font-bold capitalize rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-6"
        >
          <i class="fa-solid fa-circle-info pr-2"></i>
          Show All 41 Amenities
        </button>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-6 item place-content-center justify-center flex-wrap"
      >
        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#667eea]"
        >
          <i class="fa-solid fa-binoculars text-2xl text-[#667eea]"></i>
          <p class="font-medium text-gray-700">City Skyline View</p>
        </div>
        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff6b6b]"
        >
          <i class="fa-solid fa-umbrella-beach text-2xl text-[#ff6b6b]"></i>
          <p class="font-medium text-gray-700">Shared Beach Access</p>
        </div>
        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#26de81]"
        >
          <i class="fa-solid fa-briefcase text-2xl text-[#26de81]"></i>
          <p class="font-medium text-gray-700">Dedicated Workspace</p>
        </div>

        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#ee5a6f]"
        >
          <i class="fa-solid fa-car text-2xl text-[#ee5a6f]"></i>
          <p class="font-medium text-gray-700">Free Parking</p>
        </div>

        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#1fb7eb]"
        >
          <i class="fa-solid fa-fan text-2xl text-[#1fb7eb]"></i>
          <p class="font-medium text-gray-700">Garden View</p>
        </div>
        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#ffa502]"
        >
          <i class="fa-solid fa-kitchen-set text-2xl text-[#ffa502]"></i>
          <p class="font-medium text-gray-700">Kitchen</p>
        </div>
        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#764ba2]"
        >
          <i class="fa-solid fa-wifi text-2xl text-[#764ba2]"></i>
          <p class="font-medium text-gray-700">High-Speed WiFi</p>
        </div>
        <div
          data-aos="fade-up"
          class="flex gap-4 items-center p-4 bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-[#ff6348]"
        >
          <i class="fa-solid fa-paw text-2xl text-[#ff6348]"></i>
          <p class="font-medium text-gray-700">Pets Allowed</p>
        </div>
      </div>
    </div>

    <AmenitiesModal :modalActive="modalActive" @close-modal="toggleModal">
      <ScrollArea class="h-[600px] rounded-md border p-4">
        <div class="">
          <div class="text-start">
            <p class="text-black text-xl font-semibold">
              What this place offers
            </p>
          </div>

          <h6 class="text-lg font-semibold text-black py-6">Bathroom</h6>

          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 scroll-my-6 text-dark-gray"
          >
            <i class="fa-brands fa-product-hunt text-xl"></i>
            <p>Cleaning products</p>
          </div>

          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 scroll-my-6 text-dark-gray"
          >
            <i class="fa-solid fa-pump-soap text-xl"></i>
            <p>Shampoo</p>
          </div>

          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 scroll-my-6 text-dark-gray"
          >
            <i class="fa-solid fa-soap text-xl"></i>
            <p>Body soap</p>
          </div>

          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-water text-xl"></i>
            <p>Hot water</p>
          </div>

          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-jug-detergent text-xl"></i>
            <p>Shower gel</p>
          </div>

          <h6 class="text-lg font-semibold text-black py-6">
            Bedroom and laundry
          </h6>
          <div
            class="flex gap-3 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-toilet-paper-slash text-xl"></i>
            <div>
              <p>Essentials</p>
              <span class="text-gray text-sm"
                >Towels, bed sheets, soap, and toilet paper</span
              >
            </div>
          </div>
          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-shirt text-xl"></i>
            <p>Hangers</p>
          </div>
          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-bed text-xl"></i>
            <p>Bed linens</p>
          </div>
          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-mattress-pillow text-xl"></i>
            <p>Extra pillows and blankets</p>
          </div>
          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-jug-detergent text-xl"></i>
            <p>Iron</p>
          </div>
          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-shirt text-xl"></i>
            <p>Drying rack for clothing</p>
          </div>
          <div
            class="flex gap-4 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray"
          >
            <i class="fa-solid fa-jug-detergent text-xl"></i>
            <p>Clothing storage: wardrobe</p>
          </div>
        </div>
      </ScrollArea>
    </AmenitiesModal>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AmenitiesModal from "../components/AmenitiesModal.vue";
import { ScrollArea } from "@/components/ui/scroll-area";

const modalActive = ref(null);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="scss" scoped></style>
