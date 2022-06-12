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
import BasePage from '~/components/Base-Page.vue';
import LessonSummary from '~/components/Lesson-Summary.vue';

export default Vue.extend({
  name: 'BlankLessonTemplate',
  components: { BasePage, LessonSummary },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
