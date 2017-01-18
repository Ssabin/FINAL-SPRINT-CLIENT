<template >
    <section>
        My meals
        <meals-calendar></meals-calendar>
        <h3><span style="background-color: grey">here will be the filter</span></h3>
        <!--
            TODO:
                Calendar - google calendar?
                Do we need preview meal and review meal?
                Color meals by feeling
        -->
    </section>
</template>
<script>
    import MealsCalendar from '../MealsCalendar'
    export default{
        data(){
            return {
            }
        },
        components:{
            MealsCalendar
        }
    }
</script>
<style scoped lang="scss">
    
</style>


