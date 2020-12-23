<template>
  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import axios from "axios";

export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    };
  },
  created() {
    let url = "https://my-json-server.typicode.com/jon-mykal/demo/events";
    axios.get(url)
    .then(res => {
      this.events = res.data;
      //console.log("events: ", res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
