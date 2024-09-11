<template>
  <main class="select-none">
    <div class="">
      <video
        autoplay
        loop
        muted
        id="video"
        class="z-[-1] min-w-full max-h-screen absolute top-0 left-0 buttom-0 right-0 object-cover bg-no-repeat"
      >
        <source src="../assets/video/bnb.mp4" type="video/mp4" />
      </video>
    </div>
    <Header />
    <HomePage />

    <div id="head2" class="pt-60">
      <div class="pb-8">
        <h5 class="text-2xl text-blue text-md font-medium capitalize">
          one Bedroom Apartment
        </h5>
      </div>
      <div
        id="images"
        class="flex flex-col md:flex-row gap-3 justify-center items-center"
      >
        <div>
          <div>
            <img
              src="../assets/images/dispencer.jpg"
              alt=""
              class="w-[40em] h-[17em] object-cover rounded-tl-xl rounded-bl-xl"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-3">
          <div>
            <img
              src="../assets/images/bedroom.jpg"
              alt="bedroom"
              class="w-64 h-[8em] object-cover"
            />
          </div>
          <div>
            <img
              src="../assets/images/tv.jpg"
              alt="tv"
              class="w-64 h-[8em] object-cover"
            />
          </div>
        </div>

        <div class="relative cursor-pointer text-pretty space-y-3">
          <div>
            <img
              src="../assets/images/balcon.jpg"
              alt="bedroom"
              class="w-64 h-[8em] object-cover rounded-tr-xl"
            />
          </div>

          <div class="relative max-w-xl mx-auto mt-20">
            <img
              class="w-64 h-[8em] object-cover rounded-tr-xl"
              src="../assets/images/kitchen.jpg"
              alt="kitchen.jpg"
            />
            <RouterLink to="/photo-tour">
              <div
                class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <button
                  class="border-2 border-white rounded-lg px-3 py-2 text-white cursor-pointer capitalize hover:bg-white hover:text-blue"
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

    <div>
      <priceVue />
      <ThePlace />
    </div>

    <!--  -->
    <div
      class="flex flex-wrap justify-evenly bg-white h-auto w-full rounded-sm mt-6"
    >
      <div class="text-center p-2">
        <i class="fa-solid fa-envelope text-2xl text-blue"></i>
        <p class="font-medium">
          Email:
          <a href="mailto:myholidaydeals21@gmail.com" class="font-normal"
            >myholidaydeals21@gmail.com</a
          >
        </p>
      </div>
      <div class="text-center p-2">
        <i class="fa-solid fa-phone-volume text-2xl text-blue"></i>
        <p class="font-medium">
          Call:
          <a href="tel:+254 769 716705" class="font-normal">+254 769 716705</a>
        </p>
      </div>
    </div>
    <!-- footer -->
    <div class="pt-10">
      <Contact />
      <Footer />
    </div>
  </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import HomePage from "../components/HomePage.vue";
import priceVue from "../components/PriceVue.vue";
import ThePlace from "../components/ThePlace.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
</script>

<style>
@media only screen and (max-width: 600px) {
  #head2 {
    padding-top: 14em;
  }
}
@media only screen and (min-width: 600px) {
  #head2 {
    padding-top: 20em;
   
  }
  #head2 h5{
     color: #fff;
  }
}
</style>
