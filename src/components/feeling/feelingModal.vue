<template>
  <section v-if="isShown">
    <transition name="fade">
      <div>
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                Hi , how do you feel?
              </div>
              <div class="modal-body">
                <stars></stars>
                <button class="btn btn-default" @click="emitCloseModal"> Close
                  </button>
                <button class="btn btn-success" @click="submitRating">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
  import stars from './stars.vue'
  import { mapGetters } from 'vuex';
  export default {
    props: ['showModal'],
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['selectedRating']),
      isShown() {
        return this.showModal;
      }
    },
    methods: {
      submitRating() {
        if (this.selectedRating === 0) return;
        this.$store.dispatch('postFeeling')
                   .then(res => {
                     this.$emit('success');
                   })
                   .catch(err => {
                     this.$emit('error')
                   })
        this.isShown = false;
        this.$emit('close');
      },
      emitCloseModal() {
        this.isShown = false;
        // console.log('closeModal')
        this.$emit('close');
      }
    },
    components: {
      stars
    }
  };
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  /*transition: opacity .3s ease;*/
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  /*transition: all .3s ease;*/
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}

</style>