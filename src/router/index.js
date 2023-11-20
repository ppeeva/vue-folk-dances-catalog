import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Update from "@/views/Update";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: `/update/:id`,
    name: "Update",
    component: Update,
    props: route => ({ 
      id: Number(route.params.id) || 0,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
