<template>
  <div
    v-show="showModal"
    class="absolute bg-black w-full top-96 left-0 bg-opacity-50 z-50 h-screen flex justify-center"
  >
    <div
      v-if="showModal"
      class="bg-white p-4 self-start mt-32 w-[45rem] rounded-lg"
    >
      <button @click="$emit('close-modal')" class="cursor-pointer">
        <i class="fa-solid fa-rectangle-xmark text-black text-xl pb-6"></i>
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
