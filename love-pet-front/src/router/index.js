import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Homepage from "../components/Homepage/Homepage.vue";
import attention from "../components/attention/attention.vue";
import hotspot from "../components/hotspot/hotspot.vue";
import Petdating from "../components/Petdating/Petdating.vue";
import Petadoption from "../components/Petadoption/Petadoption.vue";
import PrivateLetter from "../components/PrivateLetter/PrivateLetter.vue";

import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import Search from "../views/Search/Search.vue";
import UserCenter from "../views/UserCenter/UserCenter.vue";

import Issue from "../components/Issue/Issue.vue"
import Detail from "../views/Detail/Detail.vue";

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
      {
        path: "PrivateLetter",
        component: PrivateLetter,
      },
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
  {
    path: "/UserCenter",
    name: "UserCenter",
    component: UserCenter,
  },
  {
    path: "/Issue",
    name: "Issue",
    component: Issue,
  },
  {
    path: "/Detail",
    name: "Detail",
    component: Detail,
  },
  
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
