import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store';
import router from './routes';

import Navbar from './components/navbar/navbar'
import FeelingModal from './components/feeling/feelingModal'
const app = new Vue({
  router,
  store,
  components: {
    Navbar,
    FeelingModal
  },
  data: {
    showModal: false
  },
  mounted(){
    if (window.location.href === 'http://localhost:8080/#') this.showModal = true;
  }
}).$mount('#app');

