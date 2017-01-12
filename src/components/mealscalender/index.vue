<template >
    <section>
        <div v-for="meal in userLatestMeals">
            <h2>Meal at {{meal.time}}</h2>
            <p>You ate:</p>
            <ul>
                <li v-for="food in meal.foods">{{food}}</li>
            </ul>
        </div>
    </section>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default{
        data(){
            return {
            }
        },
        computed:{
            ...mapGetters(['userLatestMeals'])
        },
        created(){
            this.$store.dispatch('getLatestMeals');
        },
        components:{
        }
    }
</script>
<style scoped lang="scss">
    
</style>


