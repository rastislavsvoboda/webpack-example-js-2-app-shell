import { createRouter, createWebHistory } from "vue-router";
import Home from "Views/Home.vue";
import HelloWorld from "module1/HelloWorld";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "Views/About.vue"),
  },
  {
    path: "/module1",
    name: "Module1",
    component: HelloWorld
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
