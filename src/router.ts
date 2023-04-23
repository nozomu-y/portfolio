import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import Skills from "./pages/Skills.vue";
import Articles from "./pages/Articles.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/portfolio", name: "portfolio", component: Portfolio },
    { path: "/skills", name: "skills", component: Skills },
    { path: "/articles", name: "articles", component: Articles },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
