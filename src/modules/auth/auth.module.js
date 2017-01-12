export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user'))
};

const mutations = {
  [SIGN_IN]( state, user ) {
    state.isLoggedIn = true;
    state.user = user;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
  }
}

const actions = {
  postMeal( _ , foods){
    const meal = {
      foods,
      time: Date.now(),
      userId: 1
    }
    //TODO: get userId from localStorage
    return new Promise(resolve => {
      resolve({msg: 'Added meal successful'});  
    })
  },
  updateSettings( _ , settings){
    //todo update db
    return new Promise(resolve => {
      resolve({msg: 'Changed settings successful'});  
    })
  }
};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
};



export default {
  state,
  getters,
  actions,
  mutations
}
