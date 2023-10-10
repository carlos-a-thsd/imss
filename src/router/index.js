import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import AboutView from "../views/AboutView.vue";
import MicroservicesView from "../views/MicroservicesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboardView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/microservices",
    name: "microservices",
    component: MicroservicesView,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
