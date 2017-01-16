<template>
    <section>
        <h4> Update your feelling List of feellings
        </h4>
        <feeling-modal></feeling-modal>

        <!--
            TODO:
                Show feeling List
                This needs to be some sort of modal
                MODAL with stars
        -->
    </section>
</template>
<script>
    import feelingModal from './feelingModal.vue'
    export default {
        data() {
            return {
            }
        },
        components: {
            feelingModal
        }
    }
</script>
<style scoped lang="scss">

</style>