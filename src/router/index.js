import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import DebtorsDebts from "../pages/DebtorsDebts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/debtor/:id",
    name: "Debtor",
    component: DebtorsDebts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;