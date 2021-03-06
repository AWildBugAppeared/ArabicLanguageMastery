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

    <div class="mt-n5">
      <v-tooltip v-if="!showUserAnswerMarked" top>
        <template #activator="{ on, attrs }">
          <v-btn fab color="green" x-small spec-mark-answer @click="markAnswer"
            ><v-icon color="white" v-bind="attrs" v-on="on"
              >mdi-check</v-icon
            ></v-btn
          >
        </template>
        <span>Mark Answer</span>
      </v-tooltip>

      <v-tooltip v-if="showUserAnswerMarked && !isCorrect" top>
        <template #activator="{ on, attrs }">
          <v-btn
            fab
            color="secondary"
            x-small
            spec-retry-question
            @click="retry"
            ><v-icon v-bind="attrs" v-on="on">mdi-arrow-left</v-icon></v-btn
          >
        </template>
        <span>Try again</span>
      </v-tooltip>

      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn
            fab
            color="secondary"
            x-small
            dark
            spec-toggle-tarkeeb-options-button
            @click="
              showLessPopularTarkeebOptions = !showLessPopularTarkeebOptions
            "
            ><v-icon v-bind="attrs" v-on="on">{{
              showLessPopularTarkeebOptions ? 'mdi-minus' : 'mdi-plus'
            }}</v-icon></v-btn
          >
        </template>
        <span>{{
          showLessPopularTarkeebOptions
            ? 'Show popular options only'
            : 'Show all options'
        }}</span>
      </v-tooltip>

      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-btn
            fab
            color="primary"
            x-small
            spec-toggle-answer
            @click="showAnswer = !showAnswer"
            ><v-icon v-bind="attrs" v-on="on">{{
              showAnswer ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
            }}</v-icon></v-btn
          >
        </template>
        <span>{{ showAnswer ? 'Hide' : 'Show' }} Answer</span>
      </v-tooltip>
    </div>

    <v-runtime-template
      v-if="showAnswer"
      class="user-answer"
      :template="answer"
    ></v-runtime-template>

    <div dir="rtl" spec-tarkeeb-options-container>
      <v-container>
        <v-row justify="center"
          ><hidden-word-faail-dropdown-button
            :button-classes="`purple darken-3 ${tarkeebButtonsMarginClasses}`"
            @faailSet="setFaail"
          ></hidden-word-faail-dropdown-button>

          <template v-for="tarkeebOption in tarkeebOptions">
            <v-btn
              v-if="showLessPopularTarkeebOptions || tarkeebOption.isPopular"
              :id="tarkeebOption.tarkeebPlace.replace(/ /g, '-')"
              :key="tarkeebOption.tarkeebPlace"
              :class="`${tarkeebOption.buttonColour} ${tarkeebButtonsMarginClasses}`"
              dark
              @click="setBox(tarkeebOption.tarkeebPlace)"
              ><span class="arabic">{{
                tarkeebOption.tarkeebPlace
              }}</span></v-btn
            >
          </template>

          <hidden-word-shibhul-fil-dropdown-button
            :button-classes="`orange darken-4 ${tarkeebButtonsMarginClasses}`"
            @shibhulFilSet="setShibhulFil"
          ></hidden-word-shibhul-fil-dropdown-button>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import VRuntimeTemplate from 'v-runtime-template';

import { TarkeebOptions } from './tarkeeb-options';

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
      showLessPopularTarkeebOptions: false,
      showUserAnswer: true,
      showUserAnswerMarked: false,
      tarkeebButtonsMarginClasses: 'mx-2 my-2 test px-2 pb-5 pt-6',
      tarkeebButtonsExtensionsColour: '',
      tarkeebButtonsMafoolColour: '',
      tarkeebButtonsMostPopularColour: '',
      tarkeebButtonsInnaAndKaanaColour: '',
      tarkeebButtonsJaarConstructsColour: '',
      tarkeebPlaces: TarkeebPlaces,
      tarkeebOptions: TarkeebOptions,
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
      return text.replace(
        / id="[fl]s.*?"| @click=".*?"| class="legend-text"|<!-- .*? -->/gm,
        ''
      );
    },

    santiseAnswerForCheckingBoxContents(
      text: string,
      isComparingHiddenWordFieldset = false
    ) {
      const regex = new RegExp(
        `<legend>.*?</legend>|<fieldset>|</fieldset>${
          isComparingHiddenWordFieldset ? '' : '|<span>.*?</span>'
        }`,
        'gm'
      );
      return this.santiseAnswerForCheckingBoxName(text).replace(regex, '');
    },

    isBoxContentMatched(
      userAnswerFieldset: string,
      answerFieldset: string,
      isComparingHiddenWordFieldset = false
    ) {
      const userAnswerFieldsetSanitised = this.santiseAnswerForCheckingBoxContents(
        userAnswerFieldset,
        isComparingHiddenWordFieldset
      );
      const answerFieldsetSanitised = this.santiseAnswerForCheckingBoxContents(
        answerFieldset,
        isComparingHiddenWordFieldset
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

          const isHiddenWordFieldset = !!userAnswerFieldset.outerHTML.match(
            /^<fieldset id="fs-[0-9]{8,13}-.*?hidden/
          );

          const isBoxContentMatched = this.isBoxContentMatched(
            userAnswerFieldsetSanitised,
            answerFieldsetSanitised,
            isHiddenWordFieldset
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

      this.fieldSetStartTag = `<fieldset id="${fieldSetId}"><legend class="legend-text"><span @click="removeBox('${fieldSetId}')">${tarkeebPlace}</span><!-- ${legendId} --></legend>`;

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

      replaceAnswerString = replaceAnswerString.replace(
        / class="selected"/g,
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

.legend-text {
  max-width: 143px;
}

.selected {
  background-color: green;
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
</style>
