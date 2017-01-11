import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store';
import router from './routes';

import Navbar from './components/navbar/navbar'

const app = new Vue({
  router,
  store,
  components: {
    Navbar
  }
}).$mount('#app');

