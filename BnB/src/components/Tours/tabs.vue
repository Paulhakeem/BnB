<template>
  <div class="w-full max-w-xl sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-[#3178c6] shadow'
                : 'text-gray-600 hover:bg-white/[0.12] hover:text-[#3178c6]',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-[#3178c6] focus:outline-none focus:ring-2',
          ]"
        >
          <component
            v-if="posts[0].component"
            :is="posts[0].component"
            class="w-full h-full"
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import MasaiMara from "./MasaiMara.vue";
import TsavoEast from "./TsavoEast.vue";
import Wasini from "./Wasini.vue";
import Diani from "./Diani.vue";

const categories = ref({
  "Tsavo East": [
    {
      component: TsavoEast,
    },
  ],
  Wasini: [
    {
      component: Wasini
    },
  ],
  Diani: [
    {
      component: Diani
    },
  ],
  "Masai Mara": [
    {
      component: MasaiMara,
    },
  ],
});
</script>
