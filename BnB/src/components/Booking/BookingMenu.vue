<template>
  <div class="bg-gray-600 sticky top-0 z-50">
    <div
      class="flex lg:hidden z-50 items-center justify-between p-4 w-full h-full"
    >
      <Icon
        class="z-50 cursor-pointer left-2 top-2 text-white"
        size="30"
        icon="material-symbols:menu"
        @click="openCloseSidebar"
      />
      <div
        v-if="open"
        class="fixed top-0 left-0 w-full h-screen bg-gray-600 z-[999]"
      >
        <Icon
          class="absolute top-4 right-4 cursor-pointer"
          size="30"
          icon="material-symbols:close"
          @click="openCloseSidebar"
        />
        <Menu/>
      </div>
    </div>
    <div class="hidden lg:flex w-[300x] h-screen flex flex-col justify-between">
      <Menu/>
      <div class="flex items-center p-2">
        <Icon
          size="30"
          icon="material-symbols:settings"
          class="cursor-pointer m-4 text-gray-200"
        />
        <p class="text-gray-200">Settings</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import Menu from './menu.vue'

const open = ref(false);

const openCloseSidebar = () => {
  open.value = !open.value;
};
</script>
