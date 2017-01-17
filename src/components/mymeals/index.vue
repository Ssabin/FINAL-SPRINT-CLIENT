<template >
    <section>
        My meals
        <!--<h3><span style="background-color: grey">here will be the filter</span></h3>-->
        <meals-filter></meals-filter>
        <meals-calender></meals-calender>
        <!--
            TODO:
                Calender - google calender?
                Do we need preview meal and review meal?
                Color meals by feeling
        -->
    </section>
</template>
<script>
    import MealsCalender from '../mealscalender'
    import mealsFilter from './mealsFilter/mealsFilter'
    
    export default{
        data(){
            return {
            }
        },
        components:{
            MealsCalender,mealsFilter
        }
    }
</script>
<style scoped lang="scss">
    
</style>


