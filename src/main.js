// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import vueSmoothScroll from "vue-smooth-scroll";

import("./assets/css/style.css");
import("./assets/css/animate.min.css");

Vue.config.productionTip = false;
Vue.directive("smooth-scroll", vueSmoothScroll);
Vue.use(vueSmoothScroll);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
