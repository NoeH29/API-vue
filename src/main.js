import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import VueAgile from 'vue-agile';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faCartPlus);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);
Vue.use(VueAgile);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
