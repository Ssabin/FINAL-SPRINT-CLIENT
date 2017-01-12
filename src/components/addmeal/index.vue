<template>
    <section>
        Add a Meal

        <br />
        {{msg}}
        
        <br />
        <div class="frame_feature">
            <div class="record_food"><i class="fa fa-microphone fa-4x" aria-hidden="true"></i></div>
            
            <br /><br />
            <div class="input-group">
                <input v-model="currFood" @keyup.enter="addFood" placeholder="Insert your food" class="form-control" />
                <span class="input-group-btn">
                    <button @click="addFood" class="btn btn-default" 
                            type="button">Insert</button>
                </span>
            </div>
            <p><span v-for="food in foods">{{food}}, </span></p>
            <br />
            <div @click="submitMeal" class="confirm_food"><i class="fa fa-check fa-2x" 
                aria-hidden="true"></i></div>
            
        </div>
        <!--
            TODO:
                //Record button
                input v-model with the record results
                add meal item + button
                confirm meal item V button
                show meal items list
                bonus:
                show common meal items for user in this hours
        -->
        
        <br /><br />

    </section>
</template>

<script>

// import AddMeal from '../addmeal'
export default{
    data(){
        return {
            foods: [],
            currFood: ''             
        }
    },
    methods: {
        addFood(){
            this.foods.push(this.currFood);
            this.currFood = '';
        },
        submitMeal(){
            this.$store.dispatch('postMeal' , this.foods)
                        .then(res => {
                            console.log(res.msg)
                        });
            this.foods = [];
        }
    },
    components:{
        // AddMeal
    }
}
</script>

<style scoped>
.record_food{
    display: inline-block;
    /*overflow: hidden;*/
    width: 100px;
    height: 100px;
    margin: auto;
    padding: 22px 0 0 0;
    border: solid 1px grey;
    border-radius: 50px;
    cursor: pointer;
    background: #337ab7;
}
.record_food:hover{
    background: #9bc9f1;
}

.confirm_food{
    display: inline-block;
    /*overflow: hidden;*/
    width: 50px;
    height: 50px;
    /*margin: auto;*/
    padding: 10px 0 0 0;
    border: solid 1px grey;
    border-radius: 25px;
    cursor: pointer;
    background: #337ab7;
    float: right;  

}
.confirm_food:hover{
    background: #9bc9f1;
}

</style>