import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 清楚默认的css样式
import "@/assets/css/resrt.css";

import "lib-flexible";

// 导入Element组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入mavon-editor 发布组件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
