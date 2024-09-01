<template>
  <div>
    <main
      id="content"
      class="relative pt-24 max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full"
    >
      <div id="heading" class="text-center py-8 px-4 sm:px-6 lg:px-8">
        <h5 class="text-lg text-white">Always Within Your Budget</h5>
        <h2 class="mt-1 sm:mt-3 text-3xl font-bold text-white sm:text-6xl">
          <span class="">My Holiday Deals</span>
        </h2>
      </div>
      <a href=" mailto:myholidaydeals21@gmail.com">
        <div
          class="font-sans font-bold uppercase text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue to-gray text-white text-center"
        >
          Book Now
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </a>
    </main>
  </div>
</template>

<script setup></script>

<style>
@media (max-width: 768px) {
  #heading {
    padding-top: 6em;
  }
}

@media (max-width: 640px) {
  button {
    width: 70%;
  }
}
</style>
