import Vue from 'vue';
import moment from 'moment';
// import authModule from '../auth/auth.module.js';

const state = {
  userLatestMeals: [],
  user: JSON.parse(localStorage.getItem('user')),
};

const mutations = {
  latestMeals(state, payload) {
    let i = 0;
    state.userLatestMeals = payload.map(meal => {
      const formatedMeal = {};
      formatedMeal.id = i++;
      formatedMeal.start = moment(Number(meal.time)).format();
      formatedMeal.end = moment(Number(meal.time)).format();
      formatedMeal.title = meal.foods.join();
      return formatedMeal
    })
  },
}

const actions = {
  getLatestMeals({state, commit}, filter) {
    let latestMeals = [];
    let from = 0;
    let to = 0
    Vue.http.post('http://localhost:3004/usermeals', {
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
    return Vue.http.post('http://localhost:3004/data/meal', meal)
      .then(res => res.json())
      .then(meal => meal)
  }
};

const getters = {
  userLatestMeals: state => state.userLatestMeals
};


export default {
  state,
  getters,
  actions,
  mutations
}
