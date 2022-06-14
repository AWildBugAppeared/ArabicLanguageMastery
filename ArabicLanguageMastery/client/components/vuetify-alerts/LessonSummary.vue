<template>
  <base-alert color="blue darken-1" icon="mdi-note-text">
    <template #heading>Summary</template>
    <template #default>
      <slot></slot>
    </template>
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
