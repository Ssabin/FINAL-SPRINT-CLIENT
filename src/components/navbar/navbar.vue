<template>
    <section class="custom-nav">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">Food<br />Tracker</router-link>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div ref="menu" class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li @click="closeMenu()">
                            <router-link to="/" title="Home" active-class="active" exact>Home</router-link>
                        </li>
                        <li v-if="this.isLoggedIn" @click="closeMenu()">
                            <router-link to="/mymeals" title="My Meals" active-class="active">My Meals</router-link>
                        </li>

                        <!--<li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Statistics <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li v-if="this.isLoggedIn" @click="closeMenu()">
                                    <router-link to="/globalstatistics" title="Gobal Statistics">Gobal Statistics</router-link>
                                </li>
                                <li role="separator" class="divider"></li>
                                <li v-if="this.isLoggedIn"  @click="closeMenu()">
                                    <router-link to="/userstatistics" title="User Statistics">User Statistics</router-link>
                                </li>
                                <li role="separator" class="divider"></li>
                            </ul>
                        </li>-->

                        <li v-if="this.isLoggedIn" title="Settings"  @click="closeMenu()" >
                            <router-link to="/settings" active-class="active">Settings</router-link >
                        </li>
                        <li v-if="!this.isLoggedIn" title="Sign in"  @click="closeMenu()">
                            <router-link to="/signin" active-class="active">Sign in</router-link>
                        </li>
                        <li v-if="!this.isLoggedIn" title="Sign up"  @click="closeMenu()">
                            <router-link to="/signup" active-class="active">Sign up</router-link>
                        </li>
                        <li v-if="this.isLoggedIn"  @click="closeMenu()" style="cursor: pointer">
                            <a @click="signOut" >Sign out</a>
                        </li>
                        <li v-if="!this.isLoggedIn || true" title="User Feels"  @click="closeMenu()">
                            <router-link to="/feelings" active-class="active">User Feels</router-link>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right" v-if="user">
                        <li><a href="#" style="cursor: default;" >{{user.email}}</a></li>
                    </ul>

                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>        
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';
    import authService from '../../services/auth.service';
    // import authModule from '../../modules/auth/auth.module';

    export default {
        data() {
            return {
            }
        },
         computed: {
            ...mapGetters(['isLoggedIn', 'user'])
        },
        methods: {
            signOut(){
                authService.signout();
                setTimeout(()=> {
                    this.$router.push('/');                                        
                    history.go(0);
                }, 1000);
            },
            closeMenu(){
              $(this.$refs.menu).collapse('hide')
            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss">

.navbar-brand{
    padding: 5px 10px;
    font-weight: bold;
    font-style: italic;
}

  .active {
    background-color: #e7e7e7;
  }
  
  .navbar-default .navbar-nav > li > a:hover,
  .navbar-default .navbar-nav > li > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
  }

</style>