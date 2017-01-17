<template>
    <section>
        SETTINGS

        <br /><br />
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
            
        </div>
        
        <br /><br /><br /><br />

    </section>
</template>

<script>
import authService from '../../services/auth.service';
import {UPDATE_USER_SETTINGS} from '../../modules/auth/auth.module.js'

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
            //update the storage
            this.$store.commit(UPDATE_USER_SETTINGS , this.settings);

            //get user from store.getters
            let user = this.$store.getters.user;
            //update the server and DB
            authService.updateUserSettings(user)
            .then(res => {
                console.log('success' , res);
                // this.$store.dispatch('updateSettings', res);
            })
            .catch(err => {
                err.json().then(res => this.error = res.error);
            })
        }
    },
    components:{
    },
    mounted(){
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

    .lang_choose:last-of-type{
        padding: 14px 0 0 10px;
    }

    .lang_choose:hover{
        background: #9bc9f1;
    }

    .submit_lang{
        text-align: right;
    }
</style>