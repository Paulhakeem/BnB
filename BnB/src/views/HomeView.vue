<template>
  <main class="select-none">
    <div>
      <Sidebar />
    </div>
    <HomePage />

    <div>
      <div class="pt-8 pb-2">
        <h5
          class="pl-4 text-2xl text-[#3178c6] lg:text-white text-md font-medium capitalize lg:hidden"
        >
          one Bedroom Apartment
        </h5>
      </div>
      <div
        class="flex flex-col md:flex-row gap-3 justify-center items-center"
      >
        <div data-aos="fade-up" data-aos-duration="1000">
          <div>
            <img
              src="../assets/images/dispencer.jpg"
              alt=""
              loading="lazy"
              class="w-[22em] h-[17em] lg:w-[40em] lg:h-[17em] object-cover rounded-tl-xl rounded-bl-xl"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-3">
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              src="../assets/images/bedroom.jpg"
              alt="bedroom"
              loading="lazy"
              class="w-64 h-[8em] object-cover"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              src="../assets/images/tv.jpg"
              alt="tv"
              loading="lazy"
              class="w-64 h-[8em] object-cover"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-3">
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              src="../assets/images/balcon.jpg"
              alt="bedroom"
              loading="lazy"
              class="w-64 h-[8em] object-cover rounded-tr-xl"
            />
          </div>

          <div
            class="relative max-w-xl mx-auto mt-20"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              class="w-64 h-[8em] object-cover rounded-tr-xl"
              src="../assets/images/kitchen.jpg"
              alt="kitchen"
              loading="lazy"
            />
            <RouterLink to="/photo-tour">
              <div
                class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <button
                  class="border-2 border-white rounded-lg px-3 py-2 text-white cursor-pointer capitalize hover:bg-white hover:text-[#3178c6]"
                >
                  <i class="fa-solid fa-photo-film"></i>
                  show all photos
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

