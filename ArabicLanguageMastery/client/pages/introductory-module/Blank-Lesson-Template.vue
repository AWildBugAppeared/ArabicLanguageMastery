<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <lesson-summary></lesson-summary>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BlankLessonTemplate',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
