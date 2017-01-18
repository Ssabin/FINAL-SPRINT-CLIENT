
<!--This COMPON gets Input and Sends it to it's Father as 'filterOfMeals'-->
<template>
    <section>
        <input type="text" v-model="foodInput" >
        <!--@keyup="changeStoreFoodFilter"-->
       <button @click="changeStoreFoodFilter"> submit</button>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                foodInput: ''
            }
        },
        methods: {
            changeStoreFoodFilter(){
                this.$store.commit('changeFoodFilter' , this.foodInput)
            }
        }
    }
</script>
<style scoped lang="scss">


</style>