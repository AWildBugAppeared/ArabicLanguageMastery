<template>
  <v-container class="arabic-l text-center">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="answer" v-html="answer"></div>

    <div>Test</div>

    <div class="answer">
      <span>مُ</span><span>بْ</span><span>تَ</span><span>دَ</span><span>أ</span>
    </div>

    <v-btn @click="setBox('mubtada')">مبتدأ</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Tarkeeb',

  props: {
    arabic: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      answer: '',
    };
  },

  created() {
    this.answer = this.arabic;
  },

  methods: {
    setBox(place: string) {
      const selection = window.getSelection();
      console.log(selection ?? ''.toString());

      if (!selection) {
        return;
      }

      let anchorOffset = 0;
      let focusOffset = 0;

      // This is done to support the user highlight from rtl as well as ltr
      if (selection.anchorOffset > selection.focusOffset) {
        anchorOffset = selection.focusOffset;
        focusOffset = selection.anchorOffset;
      } else {
        anchorOffset = selection.anchorOffset;
        focusOffset = selection.focusOffset;
      }

      console.log(selection.anchorOffset);

      const selectedText = selection.toString();
      const preSelection = this.answer.slice(0, anchorOffset);
      const postSelection = this.answer.slice(focusOffset);
      const fieldSetStartTag = '<fieldset><legend>مبتدأ</legend><span>';
      const fieldSetEndTag = '</span></fieldset>';

      console.log(preSelection);
      console.log(postSelection);

      switch (place) {
        default:
          this.answer = `${preSelection}${fieldSetStartTag}${selectedText}${fieldSetEndTag}${postSelection}`;
      }

      return this.answer;
    },
  },
});
</script>

<style lang="scss">
fieldset {
  display: inline-block;
  direction: rtl;
  padding: 0 8px 8px 8px;
  font-size: unset;
}

fieldset {
  legend {
    font-size: 0.8em;
    line-height: 1;
  }
}

.answer {
  margin-bottom: 30px;
  direction: rtl;
}
</style>
