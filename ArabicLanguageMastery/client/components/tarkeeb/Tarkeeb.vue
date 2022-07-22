<template>
  <v-container class="arabic-l text-center">
    <div v-if="showUserAnswer" ref="userAnswer">
      <v-runtime-template
        class="user-answer"
        :template="userAnswer"
      ></v-runtime-template>
    </div>

    <div
      v-if="showUserAnswerMarked"
      id="markedUserAnswer"
      ref="userAnswerMarked"
    >
      <v-runtime-template
        class="user-answer"
        :template="userAnswerMarked"
      ></v-runtime-template>

      <div
        :class="isCorrect ? 'correct' : 'error-message'"
        class="text-overline"
        spec-marking-feedback-message
      >
        {{ errorMessage }}
      </div>
    </div>

    <v-btn @click="markAnswer">Mark</v-btn>
    <v-btn @click="retry">Retry</v-btn>
    <v-btn @click="showAnswer = !showAnswer">Toggle Answer</v-btn>

    <v-runtime-template
      v-if="showAnswer"
      class="user-answer"
      :template="answer"
    ></v-runtime-template>

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
    answer: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      arabicCharArray: [] as string[],
      errors: [] as HTMLFieldSetElement[],
      errorMessage: '',
      fieldSetEndTag: '',
      fieldSetStartTag: '',
      fil: TarkeebPlaces.fil,
      firstSelectedIndex: -1,
      isCorrect: false,
      mutaalliq: TarkeebPlaces.mutaalliq,
      secondSelectedIndex: -1,
      showAnswer: false,
      showUserAnswer: true,
      showUserAnswerMarked: false,
      tarkeebPlaces: Object.values(TarkeebPlaces),
      userAnswer: '',
      userAnswerMarked: '',
    };
  },

  created() {
    this.arabicCharArray = this.arabic.split('');

    this.userAnswer += '<div id="userAnswer">';

    let isNonConsonantCharacter = false;

    for (let i = 0; i < this.arabicCharArray.length; i++) {
      isNonConsonantCharacter = this.isNonConsonantCharacter(
        this.arabicCharArray[i]
      );

      this.userAnswer += `<span id="${i}"${
        isNonConsonantCharacter ? '' : ` @click="setSelected(${i})"`
      }>${
        this.arabicCharArray[i] === ' ' ? '&nbsp;' : this.arabicCharArray[i]
      }</span>`;
    }

    this.userAnswer += '</div>';
  },

  updated() {
    if (this.showUserAnswerMarked && this.errors.length > 0) {
      this.errors.forEach((error) => {
        const fieldSetError = (this.$refs
          .userAnswerMarked as HTMLElement).querySelector('#' + error.id);

        if (!fieldSetError) {
          return;
        }

        fieldSetError.classList.add('tarkeeb-fieldset-error');
        fieldSetError.children[0].classList.add('tarkeeb-legend-error');
      });
    }
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

    santiseAnswerForCheckingBoxName(text: string) {
      return text.replace(/ id="[fl]s.*?"| @click=".*?"|<!-- .*? -->/gm, '');
    },

    santiseAnswerForCheckingBoxContents(text: string) {
      return this.santiseAnswerForCheckingBoxName(text).replace(
        /<legend>.*?<\/legend>|<fieldset>|<\/fieldset>/gm,
        ''
      );
    },

    isBoxContentMatched(userAnswerFieldset: string, answerFieldset: string) {
      const userAnswerFieldsetSanitised = this.santiseAnswerForCheckingBoxContents(
        userAnswerFieldset
      );
      const answerFieldsetSanitised = this.santiseAnswerForCheckingBoxContents(
        answerFieldset
      );

      return userAnswerFieldsetSanitised === answerFieldsetSanitised;
    },

    isBoxNameMatched(
      userAnswerFieldsetSanitised: string,
      answerFieldsetSanitised: string
    ) {
      const userFieldsetLegend = userAnswerFieldsetSanitised.match(
        '<legend.*?</legend>'
      );
      const answerFieldsetLegend = answerFieldsetSanitised.match(
        '<legend.*?</legend>'
      );

      if (
        !userFieldsetLegend ||
        !answerFieldsetLegend ||
        userFieldsetLegend.length === 0 ||
        answerFieldsetLegend.length === 0 ||
        userFieldsetLegend[0] !== answerFieldsetLegend[0]
      ) {
        return false;
      }
      return true;
    },

    markAnswer() {
      this.errors = [];
      this.isCorrect = false;
      let correctBoxesNumber = 0;

      const userAnswerTemplate = document.createElement('div');
      userAnswerTemplate.innerHTML = this.userAnswer;
      const answerTemplate = document.createElement('div');
      answerTemplate.innerHTML = this.answer;

      const userAnswerFieldsets = userAnswerTemplate.querySelectorAll(
        'fieldset'
      );
      const answerFieldsets = answerTemplate.querySelectorAll('fieldset');

      userAnswerFieldsets.forEach((userAnswerFieldset) => {
        let match = false;

        const userAnswerFieldsetSanitised = this.santiseAnswerForCheckingBoxName(
          userAnswerFieldset.outerHTML
        );

        for (let i = 0; i < answerFieldsets.length; i++) {
          const answerFieldsetSanitised = this.santiseAnswerForCheckingBoxName(
            answerFieldsets[i].outerHTML
          );

          const isBoxNameMatched = this.isBoxNameMatched(
            userAnswerFieldsetSanitised,
            answerFieldsetSanitised
          );

          if (!isBoxNameMatched) {
            continue;
          }

          const isBoxContentMatched = this.isBoxContentMatched(
            userAnswerFieldsetSanitised,
            answerFieldsetSanitised
          );

          if (isBoxContentMatched) {
            match = true;
            correctBoxesNumber++;
            break;
          }
        }

        if (!match) {
          this.errors.push(userAnswerFieldset);
        }
      });

      this.errorMessage = `${correctBoxesNumber}/${answerFieldsets.length} correct`;

      if (
        correctBoxesNumber === answerFieldsets.length &&
        this.errors.length === 0
      ) {
        this.isCorrect = true;
      }

      this.userAnswerMarked = (this.$refs
        .userAnswer as HTMLElement).outerHTML.replace(
        'userAnswer',
        'userAnswerMarked'
      );
      this.showUserAnswer = false;
      this.showUserAnswerMarked = true;
    },

    removeBox(id: string) {
      let regexString: string;
      let regex: RegExp;

      if (id.includes('hidden')) {
        regexString = `<fieldset id="${id}.+<!-- ${id} --></fieldset>`;
        regex = new RegExp(regexString);
        this.userAnswer = this.userAnswer.replace(regex, '');
      } else {
        regexString = `<fieldset id="${id}">.+<!-- ${id.replace(
          'fs-',
          'legend-'
        )} --><\\/legend>`;
        regex = new RegExp(regexString);
        this.userAnswer = this.userAnswer.replace(regex, '');
        this.userAnswer = this.userAnswer.replace(
          `<!-- ${id} --></fieldset>`,
          ''
        );

        // check for hidden words that may have been inserted that will also need to be removed
        regex = new RegExp(
          `<fieldset id="${id}.+ ${id}-hidden-faail --></fieldset>`
        );
        this.userAnswer = this.userAnswer.replace(regex, '');
        regex = new RegExp(
          `<fieldset id="${id}.+ ${id}-hidden-shibhul-fil --></fieldset>`
        );
        this.userAnswer = this.userAnswer.replace(regex, '');
      }
    },

    removeSelection(id: string) {
      this.userAnswer = this.userAnswer.replace(
        `<span id="${id}" class="selected" @click="setSelected(${id})"`,
        `<span id="${id}" @click="setSelected(${id})"`
      );
    },

    // TODO: Needs testing
    retry() {
      this.showUserAnswer = true;
      this.showUserAnswerMarked = false;
    },

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

      this.userAnswer = this.userAnswer.replace(
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

      const matches = this.userAnswer.match(regex);

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
          this.userAnswer.match(
            new RegExp(`<span id="${highestSelectedIndex + 1}">.<\\/span>`)
          )?.[0] ?? '';

        this.userAnswer = this.userAnswer.replace(
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

      this.userAnswer = this.userAnswer.replace(regex, replaceAnswerString);

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
  margin: 0 2px;
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

.correct {
  color: green;
}

.tarkeeb-fieldset-error {
  border-color: red;
}

.tarkeeb-legend-error,
.error-message {
  color: red;
}

.user-answer {
  margin-bottom: 30px;
  direction: rtl;
}

.selected {
  background-color: green;
}
</style>
