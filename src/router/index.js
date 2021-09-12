import { createRouter, createWebHistory } from "vue-router";
import Home from "Views/Home.vue";
import EditPersonBasic from "module1/EditPersonBasic";
import PersonDetail from "module2/PersonDetail";
import FruitList from "Components/FruitList.vue";

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
    component: EditPersonBasic
  },
  {
    // path: "/module2",
    path: "/persondetail/:id",
    name: "Module2",
    component: PersonDetail
  },
  {
    path: "/fruits",
    name: "Fruits",
    component: FruitList,
  },];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
