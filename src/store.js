import Vuex from 'vuex';
import authModule from './modules/auth/auth.module';
import mealModule from './modules/meal/meal.module';

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  modules: {
    auth: authModule,
    meal: mealModule
  },
  strict : !isProduction
})
