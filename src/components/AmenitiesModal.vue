<template>
 <transition name="modal-outer">
  <div
    v-show="modalActive"
    class="absolute bg-black w-full top-96 left-0 bg-opacity-50 z-50 h-screen flex justify-center"
  >
   <transition name="modal-inner">
    <div
      v-if="modalActive"
      class="bg-white p-4 self-start mt-32 w-[45rem] rounded-lg"
    >
      <button @click="$emit('close-modal')" class="cursor-pointer">
        <i class="fa-solid fa-rectangle-xmark text-black text-xl pb-6"></i>
      </button>
      <slot />
    </div>
   </transition>
  </div>
 </transition>
</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);

}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from{
    opacity: 0;
    transform: scale(0.8);
}

.modal-inner-leave-to {
    transform: scale(0.8);
}
</style>
