<template>
  <section>
    <h1>Create an event</h1>
    <form>
      <h3>Name &amp; describe your event</h3>
      <BaseInput v-if="event" label="Title" v-model="event.title" type="text" />

      <BaseInput v-if="event" label="Description" v-model="event.description" type="text" />

      <h3>Where is your event?</h3>
      <BaseInput v-if="event" label="Location" v-model="event.location" type="text" />
    </form>
  </section>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue"
export default {
    components: { BaseInput },
    data() {
        return {
            categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community' 
            ],
            event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
            }
        }
    }
}
</script>
