<template>
  <header>
    <nav
      id="nav"
      class="bg-gradient-to-r from-[#3178c6] to-[#1e5aa0] lg:px-6 py-3 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 lg:px-0"
      >
        <a
          href="/"
          class="flex items-center hover:scale-110 transition-transform duration-300"
        >
          <img
            src="../assets/logo/logo1.jpg"
            class="logo w-14 rounded-full shadow-md hover:shadow-lg transition-shadow"
            alt="my holidays"
          />
          <span class="ml-3 text-xl font-bold text-white hidden sm:inline"
            >My Holiday Deals</span
          >
        </a>
        <div class="flex items-center lg:order-2 gap-4">
          <button
            class="hidden sm:inline-block bg-white text-[#3178c6] font-bold text-sm px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Sign Up
          </button>
          <button
            class="text-white lg:hidden text-2xl hover:text-yellow-300 transition-colors"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            v-for="(tab, index) in menuText"
            :key="index"
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-1 lg:mt-0"
          >
            <li
              class="block py-2 pr-4 pl-3 text-white hover:text-yellow-300 transition-all duration-300 hover:bg-white hover:bg-opacity-10 rounded-lg"
            >
              <RouterLink :to="tab.link" aria-current="page">
                {{ tab.text }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const menuText = ref([
  { text: "Home", link: "/" },
  { text: "About", link: "#" },
  { text: "Tours and Safaris", link: "/tour" },
  { text: "Contact Us", link: "#" },
]);
</script>

<style scoped></style>
