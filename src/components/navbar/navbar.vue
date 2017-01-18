<template>
    <section class="custom-nav">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li v-if="this.isLoggedIn">
                <router-link to="/mymeals">My Meals</router-link>
            </li>
            <li v-if="this.isLoggedIn">
                <router-link to="/globalstatistics">Gobal Statistics</router-link>
            </li>
            <li v-if="this.isLoggedIn">
                <router-link to="/userstatistics">User Statistics</router-link>
            </li>
            <li v-if="this.isLoggedIn">
                <router-link to="/settings">Settings</router-link>
            </li>
            <li v-if="!this.isLoggedIn">
                <router-link to="/signin">Sign in</router-link>
            </li>
            <li v-if="!this.isLoggedIn">
                <router-link to="/signup">Sign up</router-link>
            </li>
            <li v-if="this.isLoggedIn">    
                <a href="" @click="signOut">Sign out</a>
            </li>
            <li v-if="!this.isLoggedIn || true">
                <router-link to="/feelings">User Feels</router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';
    import authService from '../../services/auth.service';
    export default {
        data() {
            return {
            }
        },
         computed: {
            ...mapGetters(['isLoggedIn'])
        },
        methods: {
            signOut(){
                authService.signout();
            }
        }
    }
</script>

<style scoped lang="scss">
    .custom-nav{
        background: black;
        color: white;
    }
    ul{
        list-style: none;
    }
    li{
        display: inline-block;
    }
</style>