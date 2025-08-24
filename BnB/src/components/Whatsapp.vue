<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Floating Button -->
    <button
      @click="toggleChat"
      class="bg-green-500 text-white p-4 flex rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <Icon icon="mdi:whatsapp" class="text-xl" />
    </button>

    <!-- Chat Popup -->
    <div
      v-if="showChat"
      class="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-lg border border-gray-200 p-4"
    >
      <h3 class="font-bold text-gray-800 mb-2">Chat on WhatsApp</h3>
      <textarea
        v-model="message"
        rows="3"
        placeholder="Type your message..."
        class="w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      ></textarea>
      <button
        @click="sendMessage"
        class="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Icon } from "@iconify/vue";

const showChat = ref(false)
const message = ref("")

const phoneNumber = "+254769716705" // Replace with your WhatsApp number

function toggleChat() {
  showChat.value = !showChat.value
}

function sendMessage() {
  if (!message.value) return
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message.value
  )}`
  window.open(url, "_blank")
  message.value = ""
  showChat.value = false
}
</script>

