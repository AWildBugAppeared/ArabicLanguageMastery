<template>
  <v-container class="arabic-l text-center">
    <div ref="answer">
      <v-runtime-template
        class="answer"
        :template="answer"
      ></v-runtime-template>
    </div>

    <div dir="rtl">
      <template v-for="tarkeebPlace in tarkeebPlaces">
        <hidden-word-faail-dropdown-button
          v-if="tarkeebPlace === fil"
          :key="tarkeebPlace"
          button-classes="mx-2 px-2 pb-5 pt-6 primary"
          @faailSet="setFaail"
        ></hidden-word-faail-dropdown-button>
        <hidden-word-shibhul-fil-dropdown-button
          v-else-if="tarkeebPlace === mutaalliq"
          :key="tarkeebPlace"
          button-classes="mx-2 px-2 pb-5 pt-6 primary"
          @shibhulFilSet="setShibhulFil"
        ></hidden-word-shibhul-fil-dropdown-button>
        <v-btn
          v-else
          :id="tarkeebPlace"
          :key="tarkeebPlace"
          class="mx-2 px-2 pb-5 pt-6 primary"
          @click="setBox(tarkeebPlace)"
          ><span class="arabic">{{ tarkeebPlace }}</span></v-btn
        >
      </template>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import VRuntimeTemplate from 'v-runtime-template';

import HiddenWordFaailDropdownButton from '~/components/buttons/HiddenWordFaailDropdownButton.vue';
import HiddenWordShibhulFilDropdownButton from '~/components/buttons/HiddenWordShibhulFilDropdownButton.vue';
import { HiddenWordTypes } from '~/components/tarkeeb/hidden-word-type';
import { TarkeebPlaces } from '~/constants/tarkeeb-places';

export default Vue.extend({
  name: 'Tarkeeb',
  components: {
    HiddenWordFaailDropdownButton,
    HiddenWordShibhulFilDropdownButton,
    VRuntimeTemplate,
  },

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
      fieldSetEndTag: '',
      fieldSetStartTag: '',
      fil: TarkeebPlaces.fil,
      firstSelectedIndex: -1,
      mutaalliq: TarkeebPlaces.mutaalliq,
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
    setFieldSetTags(
      id: number,
      tarkeebPlace: string,
      hiddenWordType: string | null = null
    ) {
      let fieldSetId = `fs-${id}`;

      if (hiddenWordType === HiddenWordTypes.faail) {
        fieldSetId += '-hidden-faail';
      } else if (hiddenWordType === HiddenWordTypes.shibhulFil) {
        fieldSetId += '-hidden-shibhul-fil';
      }

      const legendId = fieldSetId.replace('fs-', 'legend-');

      this.fieldSetStartTag = `<fieldset id="${fieldSetId}"><legend><span @click="removeBox('${fieldSetId}')">${tarkeebPlace}</span><!-- ${legendId} --></legend>`;

      this.fieldSetEndTag = `<!-- ${fieldSetId} --></fieldset>`;
    },

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

    removeBox(id: string) {
      let regexString: string;
      let regex: RegExp;

      if (id.includes('hidden')) {
        regexString = `<fieldset id="${id}.+<!-- ${id} --></fieldset>`;
        regex = new RegExp(regexString);
        this.answer = this.answer.replace(regex, '');
      } else {
        regexString = `<fieldset id="${id}">.+<!-- ${id.replace(
          'fs-',
          'legend-'
        )} --><\\/legend>`;
        regex = new RegExp(regexString);
        this.answer = this.answer.replace(regex, '');
        this.answer = this.answer.replace(`<!-- ${id} --></fieldset>`, '');

        // check for hidden words that may have been inserted that will also need to be removed
        regex = new RegExp(
          `<fieldset id="${id}.+ ${id}-hidden-faail --></fieldset>`
        );
        this.answer = this.answer.replace(regex, '');
        regex = new RegExp(
          `<fieldset id="${id}.+ ${id}-hidden-shibhul-fil --></fieldset>`
        );
        this.answer = this.answer.replace(regex, '');
      }
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

    setBox(
      tarkeebPlace: string,
      hiddenWordType: string | null = null,
      hiddenWord: string | null = null
    ) {
      if (this.firstSelectedIndex === -1 && this.secondSelectedIndex === -1) {
        return;
      }

      const randomValues = new Uint32Array(1);
      crypto.getRandomValues(randomValues);
      const id = randomValues[0];

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

      if (hiddenWordType === HiddenWordTypes.shibhulFil) {
        this.setFieldSetTags(
          id,
          TarkeebPlaces.shibhulFil,
          HiddenWordTypes.shibhulFil
        );

        replaceAnswerString += this.fieldSetStartTag;
        replaceAnswerString += `<span>${hiddenWord}</span>`;
        replaceAnswerString += this.fieldSetEndTag;
      }

      this.setFieldSetTags(id, tarkeebPlace);

      replaceAnswerString += `${this.fieldSetStartTag}${matches[0]}`;

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

        replaceAnswerString += this.fieldSetEndTag;
      } else {
        replaceAnswerString += this.fieldSetEndTag;
      }

      if (hiddenWordType === HiddenWordTypes.faail) {
        this.setFieldSetTags(id, TarkeebPlaces.faail, HiddenWordTypes.faail);

        replaceAnswerString += this.fieldSetStartTag;
        replaceAnswerString += `<span>${hiddenWord}</span>`;
        replaceAnswerString += this.fieldSetEndTag;
      }

      replaceAnswerString = replaceAnswerString.replaceAll(
        ' class="selected"',
        ''
      );

      this.answer = this.answer.replace(regex, replaceAnswerString);

      this.firstSelectedIndex = this.secondSelectedIndex = -1;
    },

    setFaail(faail: string | null = null) {
      if (faail) {
        this.setBox(TarkeebPlaces.fil, HiddenWordTypes.faail, faail);
      } else {
        this.setBox(TarkeebPlaces.fil);
      }
    },

    setShibhulFil(shibhulFil: string | null = null) {
      if (shibhulFil) {
        this.setBox(
          TarkeebPlaces.mutaalliq,
          HiddenWordTypes.shibhulFil,
          shibhulFil
        );
      } else {
        this.setBox(TarkeebPlaces.mutaalliq);
      }
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
