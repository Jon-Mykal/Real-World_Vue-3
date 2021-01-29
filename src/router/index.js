import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import Contact from "../views/Contact.vue";
import EventDetails from "../views/EventDetails.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /** PERFORMANCE OPTIMIZATION */
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails
  },
  {
    path: "/simpleform",
    name: "SimpleForm",
    component: () => import("../views/SimpleForm.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
