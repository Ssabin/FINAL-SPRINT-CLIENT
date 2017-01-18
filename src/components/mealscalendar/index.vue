<template>
    <section>
        <!--<div>{{filterOfMeals}}</div>-->
        <!--MEALS:{{filteredMeals}}-->
        <!--<h2>{{meals}}</h2>-->
        <div class="calendar">

        </div>
    </section>
</template>
<script>
    import { mapGetters } from 'vuex';
    import $ from 'jquery'
    import moment from 'moment';
    import FullCalendar from 'fullcalendar';
    import 'fullcalendar/dist/fullcalendar.min.css'
    export default {
        data() {
            return {
                meals: [{}],

            }
        },
        computed: {
            ...mapGetters(['userLatestMeals', 'filterOfMeals']),
            // filter() {
            //     // console.log('hi')
            //     let calendar = $('.calendar');
            //     if (calendar.length) {
            //         return {
            //             start: $('.calendar').fullCalendar('getView').start._d.getTime(),
            //             end: $('.calendar').fullCalendar('getView').end._d.getTime()
            //         }
            //     } else {
            //         return {
            //             start: 0,
            //             end: Infinity
            //         }
            //     }
            // },

            //             filteredMeals(state) {
            //     if (state.filterOfMeals.food === '' && state.filterOfMeals.feeling === '') return state.userLatestMeals
            //     return state.userLatestMeals.filter(meal => {
            //       if (meal.title.includes(state.filterOfMeals.food))
            //         return meal;
            //     })
            //   }
            filteredMeals() {
                if (this.filterOfMeals.food === '' && this.filterOfMeals.feeling === '') {
                    this.meals = this.userLatestMeals[1];
                    return this.userLatestMeals;
                }
                return this.userLatestMeals.filter(meal => {
                    if (meal.title.includes(this.filterOfMeals.food))
                        return meal
                            ;
                })
            }
        },
        watch: {
            filteredMeals: function () {
                // console.log('watch')
                $('.calendar').fullCalendar({
                    // put your options and callbacks here
                    // hiddenDays: [  4, 5,6 ], //choose which days to hide
                    // hiddenDays: [ 0, 1,2,3 ],
                    defaultView: 'month',
                    header: { center: 'month, agendaWeek' }, // buttons for switching between views
                    views: {
                        month: { // name of view
                            titleFormat: 'YYYY, MM, DD' // name of view
                        },
                        agendaWeek: {
                            titleFormat: 'YYYY, MM, DD'
                        }
                    },
                    viewRender: (view, element) => {
                        let filter = {
                            start: $('.calendar').fullCalendar('getView').start._d.getTime(),
                            end: $('.calendar').fullCalendar('getView').end._d.getTime(),
                        }
                        // this.$store.dispatch('getLatestMeals', filter)
                    },
                    events: this.userLatestMeals,
                });
                $('.calendar').fullCalendar('refetchEventSources', this.meals)
            }
        }
    }
</script>
<style scoped lang="scss">
</style>