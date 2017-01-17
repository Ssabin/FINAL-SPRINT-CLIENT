<template >
    <section>
        My meals
        <meals-calendar></meals-calendar>
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


