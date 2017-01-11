<template >
    <section>
        My meals
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
    export default{
        data(){
            return {
            }
        },
        components:{
            MealsCalender
        }
    }
</script>
<style scoped lang="scss">
    
</style>


