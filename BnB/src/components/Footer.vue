<template>
  <footer
    class="bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-12 mt-16"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold text-yellow-400 mb-3">
            My Holiday Deals
          </h3>
          <p class="text-gray-300 text-sm">
            Making holidays affordable and memorable for everyone.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-yellow-400 mb-4">
            Quick Links
          </h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>
              <RouterLink to="/" class="hover:text-yellow-300 transition-colors"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/tour"
                class="hover:text-yellow-300 transition-colors"
                >Tours</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/book-now"
                class="hover:text-yellow-300 transition-colors"
                >Book Now</RouterLink
              >
            </li>
            <li>
              <a href="#" class="hover:text-yellow-300 transition-colors"
                >About Us</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-yellow-400 mb-4">Contact</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-envelope text-yellow-400"></i>
              <a
                href="mailto:myholidaydeals21@gmail.com"
                class="hover:text-yellow-300 transition-colors"
                >Email Us</a
              >
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-phone text-yellow-400"></i>
              <span>+254 769 716705</span>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-lg font-semibold text-yellow-400 mb-4">Follow Us</h4>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 bg-yellow-400 text-[#0f3460] rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-yellow-400 text-[#0f3460] rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-yellow-400 text-[#0f3460] rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-yellow-400 text-[#0f3460] rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-600 pt-6 mt-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2024 My Holiday Deals. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" class="hover:text-yellow-300 transition-colors"
              >Privacy Policy</a
            >
            <a href="#" class="hover:text-yellow-300 transition-colors"
              >Terms & Conditions</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
