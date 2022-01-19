import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Homepage from "../components/Homepage/Homepage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        redirect: "homepage",
      },
      {
        path: "homepage",
        component: Homepage,
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
