<template>
  <header>
    <nav
      id="nav"
      class="bg-white lg:px-6 py-2.5 dark:bg-gray-800 sm:w-full md:w-full"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a class="flex items-center">
          <img
            src="../assets/logo/logo1.jpg"
            class="logo w-14"
            alt="my holidays"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class="text-primary-50 bg-blue hover:bg-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >Contact Us</a
          >
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <i class="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-blue lg:p-0 dark:text-white"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 lg:hover:text-blue lg:p-0 dark:text-gray lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray"
                >About</a
              >
            </li>
            <li>
              <router-link
                to="/tour"
                class="block py-2 pr-4 pl-3 text-gray-700 lg:hover:text-blue lg:p-0 dark:text-gray lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray"
              >
                Tours
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >Explore</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style>
@media only screen and (min-width: 600px) {
  img {
    margin-left: 0.7em;
  }
}
</style>
