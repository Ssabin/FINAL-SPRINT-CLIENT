<template>
    <section>
        <div v-for="meal in userLatestMeals">
            <h2>Meal at {{meal.start}}</h2>
            <p>You ate:</p>
            <ul>
                <li>{{meal.title}}</li>
            </ul>
        </div>
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
                meals: [{
                    id: "1",
                    title: "Banana, Apple",
                    start: moment(1484210059985).format(),
                    end: moment(1484263059985).format(),
                    // allDay: true
                }]
            }
        },
        computed: {
            ...mapGetters(['userLatestMeals']),
            filter() {
                let calendar = $('.calendar');
                if (calendar.length) {
                    return {
                        start: $('.calendar').fullCalendar('getView').start._d.getTime(),
                        end: $('.calendar').fullCalendar('getView').end._d.getTime()
                    }
                } else {
                    return {
                        start: 0,
                        end: Infinity
                    }
                }
            }
        },
        watch: {
            userLatestMeals: function (meals) {
                $('.calendar').fullCalendar({
                    // put your options and callbacks here
                    // hiddenDays: [  4, 5,6 ], //choose which days to hide
                    // hiddenDays: [ 0, 1,2,3 ],
                    defaultView: 'agendaWeek',
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
                            end: $('.calendar').fullCalendar('getView').end._d.getTime()
                        }
                        this.$store.dispatch('getLatestMeals', filter)
                    },
                    events: this.userLatestMeals,
                })
            }
        },
        created() {
            this.$store.dispatch('getLatestMeals', this.filter)
        }
    }
</script>
<style scoped lang="scss">
    
</style>