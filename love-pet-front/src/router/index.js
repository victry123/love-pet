import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Homepage from "../components/Homepage/Homepage.vue";
import attention from "../components/attention/attention.vue";
import hotspot from "../components/hotspot/hotspot.vue";
import Petdating from "../components/Petdating/Petdating.vue";
import Petadoption from "../components/Petadoption/Petadoption.vue";

import Login from "../views/Login/Login.vue";
import Search from "../views/Search/Search.vue";

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
      {
        path: "attention",
        component: attention,
      },
      {
        path: "hotspot",
        component: hotspot,
      },
      {
        path: "Petdating",
        component: Petdating,
      },
      {
        path: "Petadoption",
        component: Petadoption,
      },
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
