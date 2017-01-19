import Vue from 'vue';
import authModule from '../auth/auth.module.js';

const state = {
  selectedRating: 0
};

const mutations = {
  changeSelectedRating(state , rating){
      state.selectedRating = rating;
  }
}

const actions = {
  postFeeling(){
    //   console.log(authModule.state.user._id);
      return Vue.http.post('data/feeling', {
      "userId": authModule.state.user._id,
      "time": "" + new Date().getTime(),
      "rating": "" + state.selectedRating
    })
      .then(res => res.json())
      .then(ratings => {
        console.log(ratings);
      })
  }
};

const getters = {
  selectedRating: state => state.selectedRating
};


export default {
  state,
  getters,
  actions,
  mutations
}
