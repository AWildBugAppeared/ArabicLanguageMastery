<template>
  <base-alert color="brown lighten-1" icon="mdi-head-question">
    <template #default>
      <p>
        <slot></slot>
        <v-btn
          v-if="!showAnswer"
          class="ml-2"
          x-small
          outlined
          @click="showAnswer = true"
          >Show</v-btn
        >
      </p>
      <p v-if="showAnswer" class="answer"><slot name="answer"></slot></p>
    </template>
  </base-alert>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ElicitingQuestion',

  data() {
    return {
      showAnswer: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.answer {
  color: cyan;
  font-weight: bold;
}
</style>
