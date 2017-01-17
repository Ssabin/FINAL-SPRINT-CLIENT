<template>
    <section>
        <input type="text" value="Soon To Be Filter">
        <div v-for="meal in userLatestMeals">
            <h2>Meal at {{meal}}</h2>
            <p>You ate:</p>
            <ul>
                <li>{{meal.title}}</li>
            </ul>
        </div>

        <!--<div v-for="meal in userLatestMeals"></div>

        <h3>{{meals}}</h3>-->
    </section>
</template>
<!---->
<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                meals: []
            }
        },
        computed: {
            ...mapGetters(['userLatestMeals'])
        },
        watch: {

        },
        created() {
        }
    }

</script>
<!---->
<style scoped lang="scss">

 * {
    background-color: lightslategray;
}
</style>