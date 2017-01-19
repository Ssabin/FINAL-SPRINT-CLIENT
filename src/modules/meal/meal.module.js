import Vue from 'vue';
import moment from 'moment';
import authModule from '../auth/auth.module'

const state = {
  userLatestMeals: [],
  settings: { 'pushTimer': '1 hour', 'lang': 'en' },
  filterOfMeals: {
    food: '',
    feeling: '',
    start: 0,
    end: Infinity,
  }
}

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
  changeFoodFilter(state, food) {
    console.log('food filter changed in store:', food)
    state.filterOfMeals.food = food;
  }
}

const actions = {
  getLatestMeals({state, commit}, filter) {
    let latestMeals = [];
    let from = 0;
    let to = 0
    Vue.http.post('usermeals', {
      "userId": authModule.state.user._id,
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
      userId: authModule.state.user._id
    }
    return Vue.http.post('data/meal', meal)
      .then(res => res.json())
      .then(meal => meal)
  }
};

const getters = {
  userLatestMeals: state => state.userLatestMeals,
  filterOfMeals: state => state.filterOfMeals,
};


export default {
  state,
  getters,
  actions,
  mutations
}
