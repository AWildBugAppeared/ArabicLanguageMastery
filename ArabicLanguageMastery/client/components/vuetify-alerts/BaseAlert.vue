<template>
  <v-alert
    border="left"
    :color="color"
    class="mx-2 my-5"
    dark
    :icon="icon"
    prominent
  >
    <h2 class="text-h5 mt-n1 pb-2">
      <slot name="heading"></slot>
    </h2>
    <slot></slot>
  </v-alert>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BaseAlert',

  props: {
    color: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
