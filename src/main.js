import './style.scss';
import 'bootstrap/dist/js/bootstrap.min.js'
import './vendor';
import './vue-plugins';

import Vue from 'vue';

import store from './store';
import router from './routes';

import Navbar from './components/navbar/navbar'
import FeelingModal from './components/feeling/feelingModal'


if(process.env.NODE_ENV === 'development'){
  Vue.http.options.root = 'http://localhost:3004';
}

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
  methods:{
    toastrSuccess(){
      this.$refs.mainToastr.s('Your feelings were saved', 'Thanks!');
    },
    toastrFailed(){
      this.$refs.mainToastr.e('We couldn\'t save your feelings at this time', 'Sorry!');
    }
  },
  mounted(){
    if (window.location.href === '/#') this.showModal = true;
  }
}).$mount('#app');

