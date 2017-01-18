<template>
    <section>
        My meals {{filterOfMeals.food}}
        <meals-filter></meals-filter>
        <meals-calender :filteredMeals="filteredMeals"></meals-calender>
        <!--
            TODO:
                Calendar - google calendar?
                Do we need preview meal and review meal?
                Color meals by feeling
        -->
    </section>
</template>
<script>
    import MealsCalender from '../mealscalender'
    import mealsFilter from './mealsFilter/mealsFilter'
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
            }
        },
        methods: {  
        },
        computed: {
            ...mapGetters(['userLatestMeals','filterOfMeals']),
            filteredMeals(){
                if (this.filterOfMeals.food === '' && this.filterOfMeals.feeling === '') return this.userLatestMeals
                return this.userLatestMeals.filter(meal=>{
                    if (meal.title.includes(this.filterOfMeals.food))
                    return meal;
                })
            }
        },
        components: {
            MealsCalender, mealsFilter
        },
        created() {
            this.$store.dispatch('getLatestMeals', this.filterOfMeals)
        }
    }
</script>
<style scoped lang="scss">
    
</style>