import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import DisplayPage from "./components/DisplayPage";
import Textpage from "./components/Textpage.vue";

const router = new VueRouter({
  routes: [
    { path: "/", component: App },
    { path: "/text", component: Textpage },
    { path: "/display", component: DisplayPage }
  ]
});

export default router;
