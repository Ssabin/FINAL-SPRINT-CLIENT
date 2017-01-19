<template>
    <section>
        <div class="frame_feature">
            <div @click="toogleSpeechReco" class="record_food"><i class="fa fa-microphone fa-4x" aria-hidden="true"></i></div>

            <br /><br />
            <div class="input-group">
                <input v-model="currFood" @keyup.enter="addFood" placeholder="Insert your food" class="form-control" />
                <span class="input-group-btn">
                    <button @click="addFood" class="btn btn-default" 
                            type="button">Insert</button>
                </span>
            </div>
            <p class="p_foods">
                <span class="span_foods" v-for="(food, index) in foods">
                    <i @click="deleteFood(index)" title="Delete this food" class="fa fa-times-circle" aria-hidden="true"></i>
                    <span :value="food" @keyup="updateFood($event , index)" 
                            class="span_food_edit" contentEditable="true">{{food}}</span>&nbsp;&nbsp;&nbsp;
                </span>
                
                <br />
                <button @click="submitMeal" 
                        :disabled="isDisabled" 
                        :class="{disable_submit: isDisabled}" 
                        class="confirm_food"><i class="fa fa-check fa-2x" aria-hidden="true"></i></button>
            </p>

        </div>
        <!-- user msg -->
        <vue-toastr ref="toastr"></vue-toastr>
        
        <!--
            TODO:
                bonus:
                show common meal items for user in this hours
        -->

        <br /><br />
        <!--<button @click="pushNotification()">click</button>-->
    </section>
</template>

<script>

    import { mapGetters } from 'vuex';
    import {pushNotif} from '../../serviceWorkerInit'
    import moment from 'moment';
    export default {
        data() {
            return {
                foods: [],
                currFood: '',
                localFirstMeal: false, //localStorage isnt really computed
                recognition: null,
                isRec: false,
                isDisabled: true
            }
        },
        computed: {
            enteredFirstMeal(){
                return !!localStorage.getItem('firstMeal'); 
            },
            ...mapGetters(['isLoggedIn'])
        },
        methods: {
            addFood() {
                if((this.enteredFirstMeal || this.localFirstMeal) && !this.isLoggedIn){
                    alert('GO SIGN UP!');
                    this.$router.push('/signup');
                }
                if (this.currFood === '') return;
                this.foods.push(this.currFood);
                this.currFood = '';
                // anable btn V
                this.isDisabled = false;
            },
            submitMeal() {
                if (this.isLoggedIn) {
                    this.$store.dispatch('postMeal', this.foods)
                        .then(meal => {
                            let msg = {
                                foods: meal.foods,
                                msg: `How are you feeling after eating in ${moment(meal.time).format('MMMM Do YYYY, h:mm:ss a')}`
                            }
                            pushNotif(msg)
                        });
                }else if(!this.enteredFirstMeal || !this.localFirstMeal){
                    localStorage.setItem('firstMeal' , this.foods);
                }else{
                    alert('GO SIGN UP!');
                    this.$router.push('/signup');
                }
                this.localFirstMeal = true;
                this.foods = [];
                this.isRec = false;
                this.recognition.stop();
                //user msg and re-disabaling the submit btn
                this.$refs.toastr.s('Your meal were saved', 'Thanks!');
	            this.isDisabled = true;
            },
            updateFood(ev, idx){
                this.foods[idx] = ev.target.textContent.replace(/\n/g, "");
            },
            toogleSpeechReco() {
                //change btn style on record
                this.recordViewFeedback();
                if (this.isRec) this.recognition.stop();
                else this.recognition.start();
            },
            deleteFood(idx){
                this.foods.splice(idx, 1);
            },
            recordViewFeedback(){
                document.querySelector('.record_food').style.background = '#f73655'; 
            },
            pushNotification(){
                pushNotif();
            }
        },
        components: {
        },
        mounted() {
            // alert();            
            if (!('webkitSpeechRecognition' in window)) {
                console.log('webkitSpeechRecognition not supported');
            } else {
                this.recognition = new webkitSpeechRecognition();
                // this.recognition.continuous = true;
                this.recognition.lang = 'en-GB';
                this.recognition.interimResults = true;

                this.recognition.onstart = () => {
                    this.isRec = true;
                }
                this.recognition.onresult = (event) => {
                    let allText = '';
                    for (let currRes in event.results) {
                        const res = event.results[currRes][0];
                        if (res) {
                            console.log('script', res.transcript)
                            allText += ' ' + res.transcript;
                        }
                    }
                    console.log('allText', allText);
                    this.currFood = allText;
                    //now you can show the results
                }
                this.recognition.onerror = (event) => {
                    console.log('onerror', event);
                    this.isRec = false;
                }
                this.recognition.onend = () => {
                    console.log('done record');
                    document.querySelector('.record_food').style.background = '#337ab7';
                    this.addFood();
                    if (this.isRec) this.recognition.start();
                }
            }
        }
    }
</script>

<style scoped>
.record_food{
    display: inline-block;
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

.disable_submit{
    background: lightgrey !important;
    opacity: 0.6 !important;
    cursor: not-allowed !important;
}

.confirm_food{
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 2px 0 0 0;
    margin: 10px 0;
    border: solid 1px grey;
    border-radius: 25px;
    cursor: pointer;
    opacity: 1;
    background: #337ab7;
    float: right;  

}
.confirm_food:focus{
    background: #9bc9f1;
    box-shadow: 0 1px 2px grey;
}
.confirm_food:hover{
    background: #9bc9f1;
}

.fa-times-circle{
    cursor: pointer;
}

.p_foods{
    overflow: hidden;
    margin: 3px;
    text-align: left;
}
.span_foods{
    display: inline-block;
    text-align: left;
}
.span_food_edit{
    background: white;
    padding: 0 4px;
    border-radius: 2px;
    border: solid 1px lightgrey;
    display: inline-block;
    margin: 2px 0; 
}
</style>