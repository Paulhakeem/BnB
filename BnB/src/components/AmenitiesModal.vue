<template>
  <transition name="modal-outer">
    <div
      v-show="modalActive"
      class="fixed bg-gradient-to-b from-black via-black to-purple-900 w-full inset-0 bg-opacity-60 z-50 flex justify-center items-center backdrop-blur-md"
    >
      <transition name="modal-inner">
        <div
          v-if="modalActive"
          class="bg-gradient-to-br from-white via-gray-50 to-purple-50 p-8 self-auto m-4 w-full max-w-2xl rounded-3xl shadow-2xl border-4 border-purple-200 max-h-[85vh] overflow-hidden flex flex-col"
        >
          <!-- Header with close button -->
          <div
            class="flex justify-between items-center mb-6 pb-6 border-b-2 border-gray-200"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center"
              >
                <i class="fa-solid fa-sparkles text-white text-2xl"></i>
              </div>
              <h2
                class="text-3xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"
              >
                All Amenities
              </h2>
            </div>
            <button
              @click="$emit('close-modal')"
              class="w-10 h-10 rounded-full bg-gray-200 hover:bg-red-500 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <!-- Content area with scroll -->
          <div class="overflow-y-auto flex-1 pr-4 scrollbar-hide">
            <slot />
          </div>

          <!-- Footer with action button -->
          <div class="mt-6 pt-6 border-t-2 border-gray-200 flex justify-end">
            <button
              @click="$emit('close-modal')"
              class="px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <i class="fa-solid fa-check mr-2"></i>
              Done
            </button>
          </div>
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
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.7) translateY(-20px);
}

.modal-inner-leave-to {
  opacity: 0;
  transform: scale(0.7) translateY(20px);
}

/* Custom scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-hide::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scrollbar-hide::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #667eea, #764ba2);
  border-radius: 10px;
}

.scrollbar-hide::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #764ba2, #667eea);
}

/* Firefox scrollbar */
.scrollbar-hide {
  scrollbar-color: linear-gradient(to bottom, #667eea, #764ba2) #f1f1f1;
  scrollbar-width: thin;
}
</style>
