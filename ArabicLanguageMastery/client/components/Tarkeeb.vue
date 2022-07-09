<template>
  <v-container class="arabic-l text-center">
    <div ref="answer">
      <v-runtime-template
        class="answer"
        :template="answer"
      ></v-runtime-template>
    </div>

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

import VRuntimeTemplate from 'v-runtime-template';
import { TarkeebPlaces } from '~/constants/tarkeeb-places';

export default Vue.extend({
  name: 'Tarkeeb',
  components: { VRuntimeTemplate },

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
      firstSelectedIndex: -1,
      secondSelectedIndex: -1,
      tarkeebPlaces: Object.values(TarkeebPlaces),
    };
  },

  created() {
    this.arabicCharArray = this.arabic.split('');

    this.answer += '<div id="answer">';

    let isNonConsonantCharacter = false;

    for (let i = 0; i < this.arabicCharArray.length; i++) {
      isNonConsonantCharacter = this.isNonConsonantCharacter(
        this.arabicCharArray[i]
      );

      this.answer += `<span id="${i}"${
        isNonConsonantCharacter ? '' : ` @click="setSelected(${i})"`
      }>${
        this.arabicCharArray[i] === ' ' ? '&nbsp;' : this.arabicCharArray[i]
      }</span>`;
    }

    this.answer += '</div>';
  },

  methods: {
    isNonConsonantCharacter(character: string) {
      return [
        '\u064B',
        '\u064C',
        '\u064D',
        '\u064E',
        '\u064F',
        '\u0650',
        '\u0651',
        '\u0652',
        '\u0653',
        '\u0654',
        '\u0655',
        '\u0656',
        '\u0657',
        ' ',
      ].includes(character);
    },

    removeSelection(id: string) {
      this.answer = this.answer.replace(
        `<span id="${id}" class="selected" @click="setSelected(${id})"`,
        `<span id="${id}" @click="setSelected(${id})"`
      );
    },

    setSelected(id: string) {
      const spanId = parseInt(id);

      if (this.firstSelectedIndex === spanId) {
        this.firstSelectedIndex = -1;
        this.removeSelection(id);
        return;
      }

      if (this.secondSelectedIndex === spanId) {
        this.secondSelectedIndex = -1;
        this.removeSelection(id);
        return;
      }

      if (this.firstSelectedIndex > -1 && this.secondSelectedIndex > -1) {
        return;
      }

      if (this.firstSelectedIndex === -1) {
        this.firstSelectedIndex = parseInt(id);
      } else if (this.secondSelectedIndex === -1) {
        this.secondSelectedIndex = parseInt(id);

        // This is done to support the user highlight from rtl as well as ltr
        if (this.firstSelectedIndex > this.secondSelectedIndex) {
          const originalFirstSelectedIndex = this.firstSelectedIndex;
          this.firstSelectedIndex = this.secondSelectedIndex;
          this.secondSelectedIndex = originalFirstSelectedIndex;
        }
      }

      this.answer = this.answer.replace(
        `<span id="${id}"`,
        `<span id="${id}" class="selected"`
      );
    },

    removeBox(id: string) {
      const regexString = `<fieldset id="${id}">.+<!-- ${id.replace(
        'f',
        'l'
      )} --><\\/legend>`;
      const regex = new RegExp(regexString);
      this.answer = this.answer.replace(regex, '');
      this.answer = this.answer.replace(`<!-- ${id} --></fieldset>`, '');
    },

    setBox(tarkeebPlace: string) {
      if (this.firstSelectedIndex === -1 && this.secondSelectedIndex === -1) {
        return;
      }

      const randomValues = new Uint32Array(1);
      crypto.getRandomValues(randomValues);

      const id = randomValues[0];

      const fieldSetStartTag = `<fieldset id="${
        'fs-' + id
      }"><legend><span @click="removeBox('fs-' + ${id})">${tarkeebPlace}</span><!-- ${
        'ls-' + id
      } --></legend>`;
      const fieldSetEndTag = `<!-- ${'fs-' + id} --></fieldset>`;

      const regexString =
        this.firstSelectedIndex > -1 && this.secondSelectedIndex > -1
          ? `<span id="${this.firstSelectedIndex}" class="selected" @click="setSelected\\(${this.firstSelectedIndex}\\)">.+<span id="${this.secondSelectedIndex}" class="selected" @click="setSelected\\(${this.secondSelectedIndex}\\)">.<\\/span>`
          : `<span id="${this.firstSelectedIndex}" class="selected" @click="setSelected\\(${this.firstSelectedIndex}\\)">.<\\/span>`;

      const regex = new RegExp(regexString, 'g');

      const matches = this.answer.match(regex);

      if (!matches) {
        return;
      }

      let replaceAnswerString = '';

      replaceAnswerString += `${fieldSetStartTag}${matches[0]}`;

      const highestSelectedIndex =
        this.secondSelectedIndex > -1
          ? this.secondSelectedIndex
          : this.firstSelectedIndex;
      const nextCharacter = this.arabicCharArray[highestSelectedIndex + 1];

      if (
        nextCharacter &&
        this.isNonConsonantCharacter(nextCharacter) &&
        nextCharacter !== ' '
      ) {
        replaceAnswerString +=
          this.answer.match(
            new RegExp(`<span id="${highestSelectedIndex + 1}">.<\\/span>`)
          )?.[0] ?? '';

        this.answer = this.answer.replace(
          new RegExp(`<span id="${highestSelectedIndex + 1}">.<\\/span>`),
          ''
        );

        replaceAnswerString += fieldSetEndTag;
      } else {
        replaceAnswerString += fieldSetEndTag;
      }

      replaceAnswerString = replaceAnswerString.replaceAll(
        ' class="selected"',
        ''
      );

      this.answer = this.answer.replace(regex, replaceAnswerString);

      this.firstSelectedIndex = this.secondSelectedIndex = -1;
    },
  },
});
</script>

<style lang="scss">
$fieldset-color: purple;
$first-child-fieldset-color: blue;
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

.selected {
  background-color: green;
}
</style>
