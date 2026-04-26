<template>
  <section class="sticky top-0 z-50">
    <div class="flex lg:hidden justify-between items-center p-4">
      <button
        @click="openMenu"
        data-collapse-toggle="mobile-menu-2"
        class="relative top-4 right-4 cursor-pointer text-2xl p-2 rounded-lg hover:bg-purple-100 transition-all duration-300"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <i
          :class="
            menu ? 'fas fa-xmark text-[#667eea]' : 'fas fa-bars text-gray-800'
          "
          class="transition-all"
        ></i>
      </button>

      <div
        v-if="menu"
        class="absolute w-72 max-h-96 text-start bg-gradient-to-b from-[#667eea] to-[#764ba2] z-[999] top-0 mt-16 ml-4 rounded-2xl shadow-2xl border-4 border-purple-300 overflow-hidden"
      >
        <div class="flex flex-col items-center justify-center p-6">
          <ul
            v-for="(tab, index) in menuText"
            :key="index"
            class="text-white w-full"
          >
            <li
              v-if="tab.link"
              class="py-4 text-start font-semibold hover:bg-white hover:bg-opacity-20 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
            >
              <router-link
                :to="tab.link"
                class="flex items-center gap-3 text-lg"
              >
                <i class="fa-solid fa-arrow-right text-yellow-300"></i>
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
