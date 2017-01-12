<template>
    <section>
        SETTINGS

        <br />
        
        
        <br />
        <div class="frame_feature">
            
            <br />
            <h4>Select timer for push notifications:</h4>
            
            <br />
            <div class="form-group">
                <select v-model="settings.pushTimer" class="form-control">
                    <option>{{settings.pushTimer}}</option>
                    <option v-for="option in options" :value="option">
                        {{ option }}
                    </option>
                </select>
                
                <div class="lang_container">
                    <h4>Select langauge:</h4>
                    <div @click="changeLang" class="lang_choose">En</div>
                    <div @click="changeLang" class="lang_choose">Heb</div>
                </div>
                <div class="submit_lang">
                    <button class="btn btn-primary" @click="submitSettings">Submit</button>
                </div>
            </div>
            
            <!--<div class="input-group">
                <span class="input-group-btn">
                    <button class="btn btn-default" 
                            type="button">Insert</button>
                </span>
            </div>
            <br />-->
            <!--<div class="confirm_food"><i class="fa fa-check fa-2x" 
                aria-hidden="true"></i></div>
            -->
        </div>
        
        <br /><br /><br /><br />

    </section>
</template>

<script>

export default{
    data(){
        return {
            options: ['1 hour', '2 hours', '4 hours', '6 hours'],
            settings: {
                pushTimer: 'No push notifications',
                lang: 'en'
            }
        }
    },
    methods: {
        changeLang(ev){
            this.settings.lang = ev.target.innerText;
        },
        submitSettings(){
            this.$store.dispatch('updateSettings' , this.settings)
                        .then(res => {
                            console.log(res.msg);
                            this.$router.go(-1);
                        });
        }
    },
    components:{
        // AddMeal
    }
}
</script>

<style scoped>
.lang_container{
    margin: 20px 0;
    text-align: left;
    overflow: hidden;
    width: 100%;
}

h4{
    display: inline-block;
}
    
.lang_choose{
    display: inline-block;
    /*overflow: hidden;*/
    width: 50px;
    height: 50px;
    /*margin: auto;*/
    padding: 14px;
    border: solid 1px grey;
    border-radius: 25px;
    cursor: pointer;
    background: #337ab7;
    color: white;
    font-weight: bold;  

}
.lang_choose:hover{
    background: #9bc9f1;
}

.submit_lang{
    text-align: right;
}
</style>