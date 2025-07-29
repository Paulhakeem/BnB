<template>
  <section class="sticky top-0 z-50">
      <div class="flex lg:hidden justify-between items-center p-4">
        <button
          @click="openMenu"
          data-collapse-toggle="mobile-menu-2"
          class="absolute top-4 right-4 cursor-pointer"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <i :class="menu ? 'fas fa-xmark' : 'fas fa-bars'" class="text-xl"></i>
        </button>


      <div v-if="menu" class="absolute w-60 h-80 text-start bg-[#3178c6] z-[999] top-0 mt-10 ml-4">
        <div class="flex flex-col items-center justify-center h-full">
          <ul
            v-for="(tab, index) in menuText"
            :key="index"
            class="text-white text-2xl"
          >
            <li v-if="tab.link" class="py-4 text-start text-sm">
              <router-link :to="tab.link" class="hover:text-gray-200">
                {{ tab.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex w-[300x] flex-col justify-between z-50">
      <Header />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Header from "./Header.vue";

const menu = ref(false);

const openMenu = () => {
  menu.value = !menu.value;
};

const menuText = ref([
  { text: "Home", link: "/" },
  { text: "About", link: "#" },
  { text: "Tours and Safaris", link: "/tour" },
  { text: "Explore", link: "#" },
  { text: "Contact Us", link: "#" },
]);
</script>
