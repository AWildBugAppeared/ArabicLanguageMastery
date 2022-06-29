<template>
  <v-container class="arabic-l text-center">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="answer" v-html="answer"></div>
    <div class="answer">{{ arabic }}</div>

    <div dir="rtl">
      <v-btn
        v-for="tarkeebPlace in tarkeebPlaces"
        :id="tarkeebPlace"
        :key="tarkeebPlace"
        class="mx-2 px-2 pb-5 pt-6 primary"
        @click="setBox(tarkeebPlace)"
        ><span class="arabic">{{ tarkeebPlace }}</span></v-btn
      >
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { TarkeebPlaces } from '~/constants/tarkeeb-places';

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
      arabicCharArray: [] as string[],
      tarkeebPlaces: Object.values(TarkeebPlaces),
    };
  },

  created() {
    this.arabicCharArray = this.arabic.split('');

    for (let i = 0; i < this.arabicCharArray.length; i++) {
      this.answer += `<span id="${i}">${this.arabicCharArray[i]}</span>`;
    }
  },

  methods: {
    setBox(tarkeebPlace: string) {
      const selection = window.getSelection();

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

      const fieldSetStartTag = `<fieldset><legend>${tarkeebPlace}</legend>`;
      const fieldSetEndTag = '</fieldset>';

      const regexString = `<span id="${anchorOffset}">.+<span id="${
        focusOffset - 1
      }">.<\\/span>`;
      const regex = new RegExp(regexString, 'g');

      const matches = this.answer.match(regex);

      if (!matches) {
        return;
      }

      const spaceAtStartRegex = /^<span id="[0-9]+"> <\/span>/g;
      const spaceAtEndRegex = /<span id="[0-9]+"> <\/span>$/g;

      const spaceAtStartMatches = matches[0].match(spaceAtStartRegex);
      const spaceAtEndMatches = matches[0].match(spaceAtEndRegex);

      let replaceAnswerString = '';

      if (spaceAtStartMatches) {
        replaceAnswerString += spaceAtStartMatches[0];
        matches[0] = matches[0].replace(spaceAtStartMatches[0], '');
      }

      replaceAnswerString += fieldSetStartTag;

      if (spaceAtEndMatches) {
        matches[0] = matches[0].replace(spaceAtEndMatches[0], '');
        replaceAnswerString += matches[0];
        replaceAnswerString += fieldSetEndTag;
        replaceAnswerString += spaceAtEndMatches[0];
      } else {
        replaceAnswerString += matches[0];
        replaceAnswerString += fieldSetEndTag;
      }

      this.answer = this.answer.replace(regex, replaceAnswerString);
    },
  },
});
</script>

<style lang="scss">
$fieldset-color: blue;
$first-child-fieldset-color: red;
$second-child-fieldset-color: green;
$third-child-fieldset-color: orange;

fieldset {
  border-color: $fieldset-color;
  display: inline-block;
  direction: rtl;
  padding: 0 8px 8px 8px;
  font-size: unset;
}

fieldset {
  legend {
    font-size: 0.8em;
    line-height: 1;
    color: $fieldset-color;
  }

  fieldset {
    border-color: $first-child-fieldset-color;
    legend {
      color: $first-child-fieldset-color;
    }

    fieldset {
      border-color: $second-child-fieldset-color;
      legend {
        color: $second-child-fieldset-color;
      }

      fieldset {
        border-color: $third-child-fieldset-color;
        legend {
          color: $third-child-fieldset-color;
        }
      }
    }
  }
}

.answer {
  margin-bottom: 30px;
  direction: rtl;
}
</style>
