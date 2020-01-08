import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueRouter);

// import HelloWorld from "./components/HelloWorld.vue";

// const router = new VueRouter({
//   routes: [{ path: "/hello", component: HelloWorld }]
// render: h => h(App);
// });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
