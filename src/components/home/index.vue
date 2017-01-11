<template >
    <section>
        <add-meal></add-meal>
        <!--
            TODO:
                Record button
                input v-model with the record results
                add meal item + button
                confirm meal item V button
                show meal items list
                bonus:
                show common meal items for user in this hours
        -->
    </section>
</template>
<script>
    import AddMeal from '../addmeal'
    export default{
        data(){
            return {
                msg: 'hi'
            }
        },
        components:{
            AddMeal
        }
    }
</script>
<style scoped lang="scss">
    
</style>


