<template>
  <section
    class="bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-cover bg-center mb-10 h-auto py-12 relative overflow-hidden"
  >
    <!-- Animated background overlay -->
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <div class="flex flex-wrap gap-8 justify-evenly items-center relative z-10">
      <div data-aos="fade-up" class="hidden lg:block">
        <div
          class="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-white hover:scale-105 transform transition-transform"
        >
          <iframe
            width="500"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            allowfullscreen
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dimash%20Apartments+(My%20Holiday%20Deals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ><a href="https://www.gps.ie/">gps tracker sport</a></iframe
          >
        </div>
      </div>

      <div class="w-full md:w-96 px-4 md:px-0">
        <form
          ref="form"
          @submit.prevent="sendEmail"
          method="POST"
          class="w-[100%] bg-white shadow-2xl rounded-2xl p-8 border-0 backdrop-blur-md bg-opacity-95 hover:shadow-3xl transition-shadow duration-300"
        >
          <h2
            data-aos="zoom-in"
            class="text-3xl pb-2 font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-6"
          >
            <i class="fa-solid fa-envelope-circle-check"></i> Get in Touch
          </h2>
          <p class="text-gray-600 text-sm mb-6">
            Have questions? We'd love to hear from you!
          </p>
          <div>
            <div data-aos="fade-up" class="flex flex-col mb-4">
              <label for="name" class="text-gray-700 font-semibold mb-2"
                >Full Name</label
              >
              <input
                v-model="formDetails.name"
                type="text"
                placeholder="John Doe"
                class="px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:border-[#667eea] focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400"
                autocomplete="off"
              />
            </div>
            <div data-aos="fade-up" class="flex flex-col mb-4">
              <label for="email" class="text-gray-700 font-semibold mb-2"
                >Email Address</label
              >
              <input
                v-model="formDetails.email"
                type="email"
                placeholder="your@email.com"
                class="px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:border-[#667eea] focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400"
                autocomplete="off"
              />
            </div>
            <div data-aos="fade-up" class="flex flex-col mb-6">
              <label for="message" class="text-gray-700 font-semibold mb-2"
                >Message</label
              >
              <textarea
                v-model="formDetails.message"
                rows="4"
                placeholder="Tell us about your holiday dreams..."
                class="px-4 py-3 text-gray-700 border-2 border-gray-300 rounded-lg focus:border-[#667eea] focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400 resize-none"
              ></textarea>
            </div>
          </div>
          <div data-aos="zoom-in" class="w-full">
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-[#ff6b6b] via-[#ee5a6f] to-[#c44569] text-white px-4 py-3 rounded-lg font-bold text-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-paper-plane"></i>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const { VITE_API_KEY, VITE_PUBLIC_KEY, VITE_SERVICE_ID, VITE_TEMPLATE_ID } =
  import.meta.env;

// Initialize EmailJS
emailjs.init(VITE_PUBLIC_KEY);

const formDetails = ref({
  name: "",
  email: "",
  message: "",
});

const sendEmail = async () => {
  try {
    const result = await emailjs.send(
      VITE_SERVICE_ID,
      VITE_TEMPLATE_ID,
      {
        from_name: formDetails.value.name,
        from_email: formDetails.value.email,
        message: formDetails.value.message,
        to_email: "paulnyamawi18@gmail.com",
      },
      VITE_PUBLIC_KEY,
    );

    console.log("Email sent successfully:", result);
    // Reset form after successful submission
    formDetails.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  iframe {
    width: 100%;
    padding-top: 2em;
  }
}
@media only screen and (min-width: 600px) {
  iframe {
    padding-top: 1.5em;
  }
}
</style>
