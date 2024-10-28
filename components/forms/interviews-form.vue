<template>
  <Qalendar :events="events">
    <template #weekDayEvent="eventProps">
      <div :style="{ backgroundColor: 'cornflowerblue', color: '#fff', width: '100%', height: '100%', overflow: 'hidden' }">
        <span>{{ timeFormattingFunction(eventProps.eventData.time) }}</span>

        <span>{{ eventProps.eventData.title }}</span>
      </div>
    </template>

    <template #monthEvent="monthEventProps">
      <span>{{ monthEventProps.eventData.title }}</span>
    </template>
  </Qalendar> 
</template>

<script>
import { Qalendar } from "qalendar";
 
export default {
  components: { 
    Qalendar,
  }, 

  data() {
    return { 

      events: [
        { 
          title: "Meeting with Dora",
          with: "Albert Einstein",
          time: { start: "2024-10-06 04:52", end: "2024-10-06 05:37" },
          color: "green",
          isEditable: true,
          id: "de471c78cb5c",
          description:
            "Think of me as Yoda. Only instead of being little and green, I wear suites and I'm awesome.",
        },
        {
          title: "Advanced algebra",
          with: "Pheobe Buffay",
          time: { start: "2022-01-02 20:05", end: "2022-01-02 21:35" },
          colorScheme: "sports",
          isEditable: true,
          id: "6d3c0980a5cf",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
        },
        {
          title: "Break", 
          with: "Marshall Eriksen",
          time: { start: "2022-01-02 22:10", end: "2022-01-02 22:55" },
          colorScheme: "meetings",
          isEditable: true,
          id: "9f1b209982f1",
          location: "Zoom",
        },
        // ... and more
      ],


      config: {
        week: {
          // Takes the value 'sunday' or 'monday'
          // However, if startsOn is set to 'sunday' and nDays to 5, the week displayed will be Monday - Friday
          startsOn: 'monday',
          // Takes the values 5 or 7.
          nDays: 7,
          // Scroll to a certain hour on mounting a week. Takes any value from 0 to 23.
          // This option is not compatible with the 'dayBoundaries'-option, and will simply be ignored if custom day boundaries are set.
          scrollToHour: 5,
        },
        month: {
          // Hide leading and trailing dates in the month view (defaults to true when not set)
          showTrailingAndLeadingDates: false,
        },
        // Takes any valid locale that the browser understands. However, not all locales have been thoroughly tested in Qalendar
        // If no locale is set, the preferred browser locale will be used
        locale: 'Eng-DE',
        style: {
          // When adding a custom font, please also set the fallback(s) yourself
          fontFamily: 'Nunito, sans-serif',
        },
        // if not set, the mode defaults to 'week'. The three available options are 'month', 'week', and 'day'
        // Please note that only day and month modes are available for the calendar in mobile-sized wrappers (~700px wide or less, depending on your root font-size)
        defaultMode: 'week',
        // The silent flag can be added to disable the development warnings. This will also bring a slight performance boost
        isSilent: true,
        showCurrentTime: true, // Display a line indicating the current time 
      }
    }
  },
};

</script>


<style>
  @import "qalendar/dist/style.css";
</style>