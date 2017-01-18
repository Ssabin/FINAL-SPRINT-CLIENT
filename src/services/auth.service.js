import Vue from 'vue';

/*
 * @param email
 * @param password
 * @returns {Promise}
 */
function signin( {email,password} ) {
  return Vue.http.post('http://localhost:3004/login', {email, password} )
    .then(res => res.json())
    .then(({token, user}) => {
      console.log('Signedin user:', user);
      localStorage.removeItem('firstMeal');
      setSession(token, user);
      return user;
    })
}

function signup( { email, password } ) {
  const userToRegister = {
    email,
    password,
    imgUrl : "jj",
    settings : {
        pushTimer : 1,
        lang : "en"
    }
  }
  return Vue.http.post('http://localhost:3004/data/user', userToRegister )
  .then( res => res.json())
  .then( user => {
    signin(user);
    return user;
  })
}

function setSession( token, user ) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

// Remove session
function signout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

// @returns {boolean}
function isLoggedIn() {
  return !!localStorage.getItem('token');
}

function protectRoute( next ) {
  if( isLoggedIn() ) {
    next();
  } else {
    next(false);
  }
}

function updateUserSettings( user ) {
  //get user id
  console.log('auth.service.js updateUserSettings: ', user._id);

  return Vue.http.put(`http://localhost:3004/data/user/${user._id}`, user)
  .then(res => res.json())
  .then(user => {
    console.log('Signedin user:', user);
    return user;
  })
}


export default {
  signin,
  signup,
  signout,
  setSession,
  isLoggedIn,
  protectRoute,
  updateUserSettings
}
