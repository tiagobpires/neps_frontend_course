import { createRouter, createWebHistory } from "vue-router";
import FeedView from "../views/FeedView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: FeedView
  },
  {
    path: "/create",
    name: "create",
    component: CreatePostView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
