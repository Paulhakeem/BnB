<template>
  <!-- Small Device -->
  <div class="bg-[#3178c6] z-50 flex justify-between items-start sticky top-0">
    <div v-for="(item, index) in icon" :key="index">
      <div
        class="lg:hidden z-50 items-center p-4"
      >
        <Icon :icon="item.icon" class="cursor-pointer text-3xl text-gray-200" />
      </div>
    </div>
    <!-- Large Device -->
    <div class="hidden lg:flex w-[300x] h-screen flex flex-col justify-between">
      <Menu />
      <div class="flex items-center p-2">
        <Icon
          size="30"
          icon="mingcute:user-4-fill"
          class="cursor-pointer m-4 text-gray-200 text-xl"
        />
        <p class="text-gray-200">Profile</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Menu from "./menu.vue";

const open = ref(false);

const openCloseSidebar = () => {
  open.value = !open.value;
};

const icon = ref([
  { icon: "material-symbols:home-outline" },
  { icon: "mdi:graph-box-outline" },
  { icon: "mdi:bell-outline" },
  { icon: "mdi:account-outline" },
]);
</script>
