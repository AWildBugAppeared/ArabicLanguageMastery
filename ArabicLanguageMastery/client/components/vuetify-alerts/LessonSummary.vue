<template>
  <base-alert color="blue darken-1">
    <template #heading>Summary</template>
    <slot></slot>
  </base-alert>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LessonSummary',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
