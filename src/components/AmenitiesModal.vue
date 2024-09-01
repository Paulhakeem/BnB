<template>
  <div
    class="absolute bg-black w-full top-96 left-0 bg-opacity-50 z-50 h-screen flex justify-center"
  >
    <div
      class="bg-white p-4 self-start mt-32 w-[45rem] rounded-lg"
    >
      <button class="cursor-pointer">
        <i class="fa-solid fa-rectangle-xmark text-black text-xl pb-6"></i>
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineEmits(["close-modal"]);
// defineProps({
//   showModal: {
//     type: Boolean,
//     default: false,
//   },
// });
</script>

<style lang="scss" scoped></style>
