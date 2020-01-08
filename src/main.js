import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

// import HelloWorld from "./components/HelloWorld.vue";

// const router = new VueRouter({
//   routes: [{ path: "/hello", component: HelloWorld }]
// render: h => h(App);
// });

new Vue({
  render: h => h(App)
}).$mount("#app");
