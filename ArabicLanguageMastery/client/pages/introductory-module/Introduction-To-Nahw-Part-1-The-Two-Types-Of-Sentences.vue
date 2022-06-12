<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <p>
        Nahw is the Arabic science which states how words can be grouped
        together in order to add additional meanings. We have already discussed
        the example of &#39;tall boy&#39;, where we have the word &#39;tall&#39;
        conveying the meaning of height, the word &#39;boy&#39; referring to an
        entity, and by placing them together in that order we create the
        descriptive phrase and associate the two entities together. Had we said
        &#39;boy tall&#39; instead, we would have a meaningless phrase.
      </p>
      <p>
        Building on this, in Arabic, Nahw (Grammar) revolves around two main
        issues, and we can say Nahw is entirely concerned with solving these two
        problems. This lesson will present these problems, and give an
        introduction into how Nahw solves these 2 problems.
      </p>
      <lesson-summary></lesson-summary>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';
import LessonSummary from '~/components/Lesson-Summary.vue';

export default Vue.extend({
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'IntroductionToNahwPart 1 - TheTwoTypesOfSentences',
  components: { BasePage, LessonSummary },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
