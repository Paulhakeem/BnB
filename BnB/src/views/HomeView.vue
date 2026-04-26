<template>
  <main class="select-none">
    <div>
      <Sidebar />
    </div>
    <HomePage />

    <div class="py-12 px-4">
      <div class="pt-8 pb-6 text-center">
        <h5
          class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2"
        >
          🏠 One Bedroom Apartment
        </h5>
        <p class="text-gray-600 text-lg">
          Premium accommodation with stunning views
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row gap-4 justify-center items-center max-w-6xl mx-auto"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div>
            <img
              src="../assets/images/dispencer.jpg"
              alt="main view"
              loading="lazy"
              class="w-[22em] h-[17em] lg:w-[40em] lg:h-[17em] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src="../assets/images/bedroom.jpg"
              alt="bedroom"
              loading="lazy"
              class="w-64 h-[8em] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src="../assets/images/tv.jpg"
              alt="tv"
              loading="lazy"
              class="w-64 h-[8em] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src="../assets/images/balcon.jpg"
              alt="balcony"
              loading="lazy"
              class="w-64 h-[8em] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
          </div>

          <div
            class="relative max-w-xl mx-auto mt-4 group"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              class="w-64 h-[8em] object-cover rounded-2xl shadow-lg border-4 border-white"
              src="../assets/images/kitchen.jpg"
              alt="kitchen"
              loading="lazy"
            />
            <RouterLink to="/photo-tour">
              <div
                class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-0 group-hover:opacity-70 rounded-2xl transition-all duration-300"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <button
                  class="border-3 border-white rounded-full px-6 py-3 text-white cursor-pointer capitalize hover:bg-white hover:text-[#667eea] font-bold flex items-center gap-2 transform hover:scale-110 transition-all"
                >
                  <i class="fa-solid fa-photo-film"></i>
                  Show All Photos
                </button>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <section>
      <priceVue />
      <ThePlace />
    </section>

    <!--  -->
    <section class="flex flex-wrap justify-evenly h-auto w-full mt-6">
      <div data-aos="fade-up" class="text-center p-2">
        <i class="fa-solid fa-envelope text-2xl text-[#3178c6]"></i>
        <p class="font-medium">
          Email:
          <a href="mailto:myholidaydeals21@gmail.com" class="font-normal"
            >myholidaydeals21@gmail.com</a
          >
        </p>
      </div>
      <div data-aos="fade-up" class="text-center p-2">
        <i class="fa-solid fa-phone-volume text-2xl text-[#3178c6]"></i>
        <p class="font-medium">
          Call:
          <a href="tel:+254 769 716705" class="font-normal">+254 769 716705</a>
        </p>
      </div>
    </section>
    <!-- footer -->
    <div class="pt-10">
      <Contact />
      <Footer />
    </div>
  </main>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import HomePage from "../components/HomePage.vue";
import priceVue from "../components/PriceVue.vue";
import ThePlace from "../components/ThePlace.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
</script>
