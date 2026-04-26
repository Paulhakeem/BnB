import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotoTour from "../views/PhotoTour.vue";
import ToursVue from "../views/ToursVue.vue";
import BookNow from "../views/BookNow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/photo-tour",
      name: "photos",
      component: PhotoTour,
    },
    {
      path: "/tour",
      name: "tour",
      component: ToursVue,
    },
    {
      path: "/book-now",
      name: "book-now",
      component: BookNow,
    },
    {
      path: "/bookings",
      name: "bookings",
      component: BookNow,
    },
    {
      path: "/insights",
      name: "insights",
      component: BookNow,
    },
  ],
});

export default router;
