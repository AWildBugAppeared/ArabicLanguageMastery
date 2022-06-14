<template>
  <base-alert color="purple darken-2" icon="mdi-head-snowflake">
    <template #default>
      <slot></slot>
    </template>
  </base-alert>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ImportantNote',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
