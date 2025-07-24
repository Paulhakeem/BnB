<template>
  <header>
    <nav
      id="nav"
      class="bg-white lg:px-6 py-2.5 dark:bg-gray-800 sm:w-full md:w-full"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a class="flex items-center">
          <img
            src="../assets/logo/logo1.jpg"
            class="logo w-14"
            alt="my holidays"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class="text-primary-50 bg-[#3178c6] text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >Contact Us</a
          >
        </div>
        <div v-bind="menu"
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul v-for="(tab, index) in menuText" :key="index"
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li class="block py-2 pr-4 pl-3 text-gray-700 gap-10 dark:text-white hover:text-blue-400">
              <RouterLink
                :to="tab.link"
                aria-current="page"
              >
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
  { text: "Explore", link: "#" },
])
</script>

