<template>
  <v-alert border="left" color="purple darken-2" class="ma-2" dark>
    <h2 class="text-h5 mt-n1 pb-2">Important</h2>
    <slot></slot>
  </v-alert>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Important',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
