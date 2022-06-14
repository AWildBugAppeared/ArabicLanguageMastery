<template>
  <base-alert color="teal darken-1" icon="mdi-information">
    <template #default>
      <slot></slot>
    </template>
  </base-alert>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Note',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
