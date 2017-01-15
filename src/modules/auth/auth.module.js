import Vue from 'vue';

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
    console.log(payload)    
    state.userLatestMeals = payload;
  }
}

const actions = {
  getLatestMeals({state,commit}) {
    //TODO get time from inputs
    let latestMeals = [];
      Vue.http.post('http://localhost:3003/usermeals' , {
        "userId": state.user._id, 
        "from": "1483221600000",
	      "to": "1483826400000" })
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
    Vue.http.post('http://localhost:3003/data/meal' , meal)
            .then( res => res.json())
            .then( meal => meal)
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
