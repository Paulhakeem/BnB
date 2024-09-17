<template>
  <section
    class="bg-[url('../assets/images/seatroom.jpg')] bg-cover bg-center mb-10 h-auto"
  >
    <div class="flex flex-wrap gap-8 justify-evenly items-center">
      <div class="">
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

      <div class="w-96">
        <form
          ref="form"
          @submit.prevent="sendEmail"
          method="POST"
          class="w-[100%] border border-blue p-6 bg-white bg-opacity-80 my-3"
        >
          <h2 class="text-2xl pb-3 font-semibold text-blue">Book Now</h2>
          <div>
            <div class="flex flex-col mb-3">
              <label for="name">Name</label>
              <input
                v-model="formDetails.name"
                type="text"
                class="px-3 py-2 bg-gray border border-gray focus:border-blue focus:outline-none focus:bg-gray focus:text-white"
                autocomplete="off"
              />
            </div>
            <div class="flex flex-col mb-3">
              <label for="email">Email</label>
              <input
                v-model="formDetails.email"
                type="email"
                class="px-3 py-2 bg-gray border border-gray focus:border-blue focus:outline-none focus:bg-gray focus:text-white"
                autocomplete="off"
              />
            </div>
            <div class="flex flex-col mb-3">
              <label for="message">Message</label>
              <textarea
                v-model="formDetails.message"
                rows="4"
                class="px-3 py-2 bg-gray border border-gray focus:border-blue focus:outline-none focus:bg-gray focus:text-white"
              ></textarea>
            </div>
          </div>
          <div class="w-full pt-3">
            <button
              type="submit"
              class="w-full bg-blue px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Resend } from 'resend';

const { VITE_API_KEY } = import.meta.env;

const formDetails = ref({
  name: "",
  email: "",
  message: "",
});

const myAPI = ref(VITE_API_KEY);

const resend = new Resend(myAPI)



const sendEmail = async () => {
  const data = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['paulnyamawi18@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (data) {
    return console.log(data);
    
  }

};
</script>

<style>
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
