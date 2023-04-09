import HomeView from "@/components/HomeView.vue";
import SignUp from "@/components/SignUp.vue";
import LoginView from "@/components/LoginView.vue";
import AddView from "@/components/AddView.vue";
import UpdateView from "@/components/UpdateView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomeView",
    component: HomeView,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LoginView",
    component: LoginView,
    path: "/login",
  },
  {
    name: "AddView",
    component: AddView,
    path: "/add",
  },
  {
    name: "UpdateView",
    component: UpdateView,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
