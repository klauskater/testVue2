import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false
Vue.prototype.$cardBus = new Vue()

new Vue({
  data: {
    busketCount: 0
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
