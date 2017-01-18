import authService from '../../services/auth.service';
import { SIGN_IN } from '../../modules/auth/auth.module';
export default {
  data: () => {
    return {
      user: { email: '', password: '' },
      error: ""
    }
  },
  methods: {
    signup(user) {
      this.$validator.validateAll();
      if (this.errors.any()) return;
      user.email = user.email.toLowerCase()
      authService.signup(user)
        .then(res => {
          this.$refs.signUpToastr.s('Successfully signed up', 'Thank You!!!')
          setTimeout(() => {
            this.$store.commit(SIGN_IN, user);
            this.$router.push({ name: 'home' });
          }, 1000);
        })
        .catch(err => {
          this.$refs.signUpToastr.e('Error signing up', 'Sorry!!!')
        })
    }
  }
}
