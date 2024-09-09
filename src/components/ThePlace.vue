<template>
  <section>
    <div class="bg-white mt-12 p-6 flex flex-wrap justify-evenly gap-12">
      <div class="">
        <h4 class="text-blue text-xl font-semibold">What this place offers</h4>
        <button
          @click="toggleModal"
          class="inline-flex items-center px-4 py-2 bg-blue mt-12 text-white text-sm font-medium capitalize rounded-md"
        >
          <i class="fa-solid fa-circle-info pr-2"></i>
          show all 41 amenities
        </button>
      </div>

      <div class="grid grid-cols-2 max-w-md gap-6 item place-content-center justify-center flex-wrap">
        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-binoculars text-blue"></i>
          <p>City skyline view</p>
        </div>
        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-umbrella-beach text-blue"></i>
          <p>Shared beach access</p>
        </div>
        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-briefcase text-blue"></i>
          <p>Dedicated workspace</p>
        </div>

        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-car text-blue"></i>
          <p>Free parking on premises</p>
        </div>

        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-fan text-blue"></i>
          <p>Garden view</p>
        </div>
        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-kitchen-set text-blue"></i>
          <p>Kitchen</p>
        </div>
        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-wifi text-blue"></i>
          <p>Wifi</p>
        </div>
        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-paw text-blue"></i>
          <p>Pets allowed</p>
        </div>
      </div>
    </div>

    <AmenitiesModal :modalActive="modalActive" @close-modal="toggleModal">
      <div>
        <div class="text-start">
          <p class="text-black text-xl font-semibold">What this place offers</p>
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
        <div class="flex gap-3 items-center border-b-2 border-b-black border-opacity-20 py-6 text-dark-gray">
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
    </AmenitiesModal>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AmenitiesModal from "../components/AmenitiesModal.vue";

const modalActive = ref(null);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="scss" scoped></style>
