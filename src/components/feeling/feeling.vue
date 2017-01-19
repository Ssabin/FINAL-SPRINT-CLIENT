<template>
    <section class="feeling-page">
        <h2> Update your feelling List of feellings
        </h2>
        <feeling-modal :show-modal="showModal"></feeling-modal>
        <button class="btn btn-danger" @click="showModal=true">Show Modal</button>
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
    .feeling-page{
        text-align: center;
    }
</style>