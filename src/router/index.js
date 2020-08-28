import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  //   mode: 'history',
  //   scrollBehavior: (to, from, savedPosition) => {
  //     if (savedPosition) {
  //       return savedPosition;
  //     }

  //     if (to.hash) {
  //       return {selector: to.hash};
  //     }

  //     return {x: 0, y: 0};
  //   },
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/Profile", name: "Profile", component: Profile },
    { path: "/Portfolio", name: "Portfolio", component: Portfolio },
    { path: "/Skills", name: "Skills", component: Skills }
  ]
});
