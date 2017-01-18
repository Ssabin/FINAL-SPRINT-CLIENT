import Vue from 'vue';
import moment from 'moment';
export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const UPDATE_USER_SETTINGS = 'meal_modules/UPDATE_USER_SETTINGS';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  // enteredFirstMeal: !!localStorage.getItem('firstMeal'),
  user: JSON.parse(localStorage.getItem('user')),
  userLatestMeals: [],
  settings: { 'pushTimer': '1 hour', 'lang': 'en' },
  filterOfMeals: {
    food: '',
    feeling: '',
    start: 0,
    end: Infinity,
  },
};

const mutations = {
  [SIGN_IN](state, user) {
    state.isLoggedIn = true;
    state.user = user;
  },
  [SIGN_OUT](state) {
    state.isLoggedIn = false;
  },
  [UPDATE_USER_SETTINGS](state, settings){
    console.log('auth.modules.js: UPDATE_USER_SETTINGS mutations');
    state.user.settings = settings;
  },
  changeFoodFilter(state, food) {
    console.log('food filter changed in store:', food)
    state.filterOfMeals.food = food;
    
  },
  
}

const actions = {

};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  enteredFirstMeal: state => state.enteredFirstMeal,
  user: state => state.user,
}; 


export default {
  state,
  getters,
  actions,
  mutations
}
