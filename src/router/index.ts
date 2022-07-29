import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Object",
    component: () => import("@/views/ObjectView.vue"),
  },
  {
    path: "/array",
    name: "Array",
    component: () => import("@/views/ArrayView.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("@/views/FormView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "active",
});

export default router;
