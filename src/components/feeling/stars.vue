<template>
    <section>
        <form>
            <rating :items="items" :value="value" @click="update" class="starability-slot"></rating>
        </form>
    </section>
</template>


<script>
    import Rating from './bulma-rating'

    export default {
        components: {
            Rating
        },

        data() {
            return {
                value: 0,
                selected:0,
                items: [
                    {
                        title: '5 Stars',
                        value: 5
                    },
                    {
                        title: '4 Stars',
                        value: 4
                    },
                    {
                        title: '3 Stars',
                        value: 3
                    },
                    {
                        title: '2 Stars',
                        value: 2
                    },
                    {
                        title: '1 Star',
                        value: 1
                    }
                ]
            }
        },

        methods: {
            update(val) {
                console.log('value is: ',val)
                this.value = val
            }
        }
    }
</script>
<style scoped lang="scss">

</style>