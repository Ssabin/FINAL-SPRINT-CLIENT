<template>
    <section>
        <h4> Update your feelling List of feellings
        </h4>
        <feeling-modal :show-modal="showModal"></feeling-modal>
        <button @click="showModal=true">Show Modal</button>
        <!--
            TODO:
                CONNECET modal and COMPONENTS to STORE & DB

                ??Show feeling List
        -->
    </section>
</template>
<script>
    import feelingModal from './feelingModal.vue'
    export default {
        data() {
            return {
                showModal: false
            }
        },
        components: {
            feelingModal
        }
    }
</script>
<style scoped lang="scss">

</style>