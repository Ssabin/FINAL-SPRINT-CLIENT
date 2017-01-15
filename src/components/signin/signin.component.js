import authService from '../../services/auth.service';
import {SIGN_IN, SIGN_OUT} from '../../modules/auth/auth.module';

export default  {
  data   : () => {
    return {
      user : { email: '', password: '' },
      error: ""
    }
  },
  methods: {
    signin( user ) {
      this.$validator.validateAll();
      if( this.errors.any() ) return;

      authService.signin(user).then(res => {
        this.$store.commit(SIGN_IN, res);
        this.$router.go(-1);
      }).catch(err => {
        err.json().then(res => this.error = res.error);
      })

    }
  }
}


