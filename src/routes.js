import VueRouter from 'vue-router';

import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import MyMeals from './components/mymeals'
import GlobalStatistics from './components/globalstatistics'
import UserStatistics from './components/userstatistics'
import Settings from './components/settings'
import Feelings from './components/felling/feeling'

import Admin from './components/admin/admin';

const routes = [{
  path     : '/',
  name     : 'home',
  component: Home
}, {
  path     : '/signin',
  name     : 'signin',
  component: Signin
},
  {
    path     : '/signup',
    name     : 'signup',
    component: Signup
  },
  {
    path     : '/admin',
    name     : 'admin',
    component: Admin
  },
  {
    path     : '/mymeals',
    name     : 'mymeals',
    component: MyMeals
  },
  {
    path     :'/globalstatistics',
    name     :'globalstatistics',
    component: GlobalStatistics
  },
  {
    path     :'/userstatistics',
    name     :'userstatistics',
    component: UserStatistics
  },
  {
    path     :'/settings',
    name     :'settings',
    component: Settings
  },
  {
    path     :'/feelings',
    name     :'feelings',
    component: Feelings
  },
  
  { path: '*', redirect: { name: 'home' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router