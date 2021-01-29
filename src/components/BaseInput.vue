<template>
  <!-- Multiple root nodes below -->
  <label>{{ label }}</label>
  <input
    v-bind="$attr"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <!-- Child components must emit events for parents to handle it 
        In this case, v-modelled components need to emit the event listed. -->
</template>

<script>
export default {
  // Defines a way for parent components to pass data
  // to child components.
  props: {
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>
