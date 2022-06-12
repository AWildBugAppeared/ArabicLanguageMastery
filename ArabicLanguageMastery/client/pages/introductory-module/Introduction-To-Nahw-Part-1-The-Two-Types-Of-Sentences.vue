<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <p>
        Nahw is the Arabic science which states how words can be grouped
        together in order to add additional meanings. We have already discussed
        the example of 'tall boy', where we have the word 'tall' conveying the
        meaning of height, the word 'boy' referring to an entity, and by placing
        them together in that order we create the descriptive phrase and
        associate the two entities together. Had we said 'boy tall' instead, we
        would have a meaningless phrase.
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

export default Vue.extend({
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'IntroductionToNahwPart 1 - TheTwoTypesOfSentences',
  components: { BasePage },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
