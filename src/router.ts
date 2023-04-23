import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Works from "./pages/Works.vue";
import Skills from "./pages/Skills.vue";
import Articles from "./pages/Articles.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/skills", name: "skills", component: Skills },
    { path: "/works", name: "works", component: Works },
    { path: "/articles", name: "articles", component: Articles },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
