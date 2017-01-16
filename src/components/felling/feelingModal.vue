<template>
  <section>
    <div v-if="isShowModal">
      <transition name =" fade">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                Hi
              </div>
              <div class="modal-body">
                How do you feel?
              </div>
              <div class="modal-footer">
                default footer
                <button class="modal-default-button" @click="isShowModal = false">OK</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div>
      <button @click="isShowModal = true">Show Modal</button>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        isShowModal: false
      }
    },
    components: {
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
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to  .fade-leave-active   {
  opacity: 0;
}

</style>