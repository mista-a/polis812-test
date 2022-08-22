import Vue from "vue"
import VueRouter from "vue-router"
import UsersListView from "../views/UsersListView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "users",
    component: UsersListView,
  },
  {
    path: "/user/:id",
    name: "UserView",
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/ErrorView.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
