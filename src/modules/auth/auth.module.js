import Vue from 'vue';
import moment from 'moment';
export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  // enteredFirstMeal: !!localStorage.getItem('firstMeal'),
  user: JSON.parse(localStorage.getItem('user')),
  userLatestMeals: []
};

const mutations = {
  [SIGN_IN](state, user) {
    state.isLoggedIn = true;
    state.user = user;
  },
  [SIGN_OUT](state) {
    state.isLoggedIn = false;
  },
  latestMeals(state, payload) {
    let i = 0;
    state.userLatestMeals = payload.map(meal => {
      const formatedMeal= {};
      formatedMeal.id = i++;
      formatedMeal.start = moment(Number(meal.time)).format();
      formatedMeal.end = moment(Number(meal.time)).format();
      formatedMeal.title = meal.foods.join();
      return formatedMeal
    })
  }
}

const actions = {
  getLatestMeals({state, commit},  filter) {
    let latestMeals = [];
    let from = 0;
    let to = 0
    Vue.http.post('http://localhost:3003/usermeals', {
      "userId": state.user._id,
      "from": "" + filter.start,
      "to": "" + filter.end
    })
      .then(res => res.json())
      .then(meals => {
        latestMeals = meals.meals;
        commit('latestMeals', latestMeals);
      })
  },

  postMeal({state}, foods) {
    const meal = {
      foods,
      time: Date.now(),
      userId: state.user._id
    }
    Vue.http.post('http://localhost:3003/data/meal', meal)
      .then(res => res.json())
      .then(meal => meal)
  },
  updateSettings(_, settings) {
    //todo update db
    return new Promise(resolve => {
      resolve({ msg: 'Changed settings successful' });
    })
  }
};


const getters = {
  isLoggedIn: state => state.isLoggedIn,
  enteredFirstMeal: state => state.enteredFirstMeal,
  user: state => state.user,
  userLatestMeals: state => state.userLatestMeals
};



export default {
  state,
  getters,
  actions,
  mutations
}
