<template>
  <main>
    <div class="px-4 grow">
      <div class="grid gap-2 pt-4">
        <div v-for="(item, index) in items" :key="index">
          <RouterLink
            v-if="item.path"
            :to="item.path"
            class="flex items-center gap-2 p-2 rounded hover:bg-gray-900 transition cursor-pointer"
          >
            <Icon size="25" :icon="item.icon" class="text-gray-300" />
            <span class="text-gray-200">{{ item.name }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const items = ref([
  {
    name: "Dashboard",
    path: "/book-now",
    icon: "material-symbols:dashboard-outline",
  },
  {
    name: "Bookings",
    path: "/Bookings",
    icon: "healthicons:low-income-level",
  },
]);
</script>
