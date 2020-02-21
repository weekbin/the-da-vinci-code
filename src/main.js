import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css'
import 'es6-promise/auto';
import store from './store/store'
import Vuex from 'vuex';
import animated from 'animate.css'
Vue.use(animated)
Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
