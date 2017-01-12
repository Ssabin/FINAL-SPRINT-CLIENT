export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
  userLatestMeals: []
};

const mutations = {
  [SIGN_IN]( state, user ) {
    state.isLoggedIn = true;
    state.user = user;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
  },
  latestMeals(state , payload){
    state.userLatestMeals = payload;
  }
}

const actions = {
  getLatestMeals({commit}){
    //TODO get from server
    let latestMeals = [
    {
      foods: ['meat','bread'],
      time: 123123123,
      _id: 123123,
      userId: 1
    },
    {
      foods: ['Milk','nuts'],
      time: 124124124,
      _id: 123123,
      userId: 1
    }
  ];

  commit('latestMeals' , latestMeals);

  },

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
  user: state => state.user,
  userLatestMeals: state => state.userLatestMeals
};



export default {
  state,
  getters,
  actions,
  mutations
}
