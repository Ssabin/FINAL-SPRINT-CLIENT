<template>
    <section class="custom-nav">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/mymeals">My Meals</router-link>
            </li>
            <li>
                <router-link to="/globalstatistics">Gobal Statistics</router-link>
            </li>
            <li>
                <router-link to="/userstatistics">User Statistics</router-link>
            </li>
            <li>
                <router-link to="/settings">Settings</router-link>
            </li>
            <li>
                <router-link to="/signin">Sign in</router-link>
            </li>
            <li>
                <router-link to="/signup">Sign up</router-link>
            </li>
        </ul>
        <!--TODO
            Add Logo
            Toggle Menu
            Show user icon on navbar-->
    </section>
</template>

<script>


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