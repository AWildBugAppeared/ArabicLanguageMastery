<template>
  <v-container>
    <p class="mb-2 mb-md-10">
      See the example below which contains most/all of the difficult mappings.
      The rest should be quick, simple and intuitive. The full character
      mappings can be found at the bottom of the page.
    </p>

    <v-row>
      <v-col cols="6">{{ exampleInput }}</v-col>
      <v-col cols="6" class="arabic">{{ exampleConvertedInput }}</v-col>
    </v-row>

    <v-textarea
      v-model="input"
      label="Type here to convert to Arabic"
      data-phonetic-text-area
    ></v-textarea>
    <div dir="rtl" class="arabic converted-text" data-arabic>
      {{ convertedInput }}
    </div>

    <div class="text-right mt-2 my-5">
      <v-btn data-copy-btn @click="copy">Copy</v-btn>
    </div>

    <v-expansion-panels multiple hover class="text-center">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h2 class="pb-5">Arabic Letters</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dir="rtl" justify="center">
            <v-col
              v-for="arabicLetter in arabicLetters"
              :key="arabicLetter"
              cols="4"
              sm="2"
              lg="1"
            >
              <span v-if="arabicLetter === arabicLetters.alif"
                ><span class="arabic-sm">{{ arabicLetter }}</span>
                <span class="px-2">-</span> a</span
              >
              <span v-else-if="arabicLetter === arabicLetters.hamzaSmall"
                ><span class="arabic-sm">{{ arabicLetter }}</span>
                <span class="px-2">-</span> *{{
                  getPhoneticMap(arabicLetter)
                }}</span
              >
              <span v-else
                ><span class="arabic-sm">{{ arabicLetter }}</span>
                <span class="px-2">-</span>
                {{ getPhoneticMap(arabicLetter) }}</span
              >
            </v-col>
          </v-row>

          <div class="py-5">
            <div>
              *The letter á can be selected by pressing 'Alt Gr' + 'a' on
              desktop, or by holding down the letter 'a' on mobile.
            </div>
            <div>Note - For shaddah, simply repeat the letter again</div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h2 class="py-5">Arabic Vowels</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dir="rtl" justify="center">
            <v-col
              v-for="arabicVowel in arabicVowels"
              :key="arabicVowel"
              cols="4"
              sm="2"
              lg="1"
            >
              <span v-if="arabicVowel === arabicVowels.harfIllahAlif"
                ><span class="arabic-sm">{{ arabicVowel }}</span>
                <span class="px-2">-</span>
                {{ getPhoneticMap(arabicVowel) }}</span
              >
              <span v-else-if="arabicVowel === arabicVowels.standingAlifSuper"
                ><span class="arabic-sm">{{ arabicVowel }}</span>
                <span class="px-2">-</span> *{{
                  getPhoneticMap(arabicVowel)
                }}</span
              >
              <span v-else>
                <span class="arabic-sm">{{ arabicVowel }}</span>
                <span class="px-2">-</span> {{ getPhoneticMap(arabicVowel) }}
              </span>
            </v-col>
          </v-row>

          <div class="py-5">
            <div>*This is an apostrophe</div>
            <div>
              Note - For tanween, you will need to add a space after the word
              for the tanween to take effect
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h2 class="py-5">Special Words</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dir="rtl" justify="center">
            <v-col
              v-for="arabicWord in arabicSpecialWords"
              :key="arabicWord"
              cols="4"
              sm="3"
            >
              <span class="arabic-sm">{{ arabicWord }}</span>
              <span class="px-2">-</span> {{ getPhoneticMap(arabicWord) }}
            </v-col>
          </v-row>

          <div class="py-5">
            Special words are usually unconventionally written. To use them,
            wrap the word in (()) e.g. ((Allah))
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  ArabicLetter,
  ArabicSpecialWord,
  ArabicVowel,
} from '@/services/phonetic-converter/arabic-constants';

import { phoneticConverterService } from '@/services/service-exporter';
import { phoneticDictionary } from '@/services/phonetic-converter/phonetic-dictionary';

export default Vue.extend({
  name: 'EnglishToArabic',

  data() {
    return {
      arabicLetters: ArabicLetter,
      arabicSpecialWords: ArabicSpecialWord,
      arabicVowels: ArabicVowel,
      exampleInput:
        "Aanzala ((Allah))u alqurA~na Iil'Y alrrajuli wa alnnisaaái",
      exampleConvertedInput: '',
      input: '',
      convertedInput: '',
    };
  },

  watch: {
    input(value) {
      this.convertedInput = phoneticConverterService.convertToArabic(value);
    },
  },

  created() {
    this.exampleConvertedInput = phoneticConverterService.convertToArabic(
      this.exampleInput
    );
  },

  methods: {
    copy() {
      navigator.clipboard.writeText(this.convertedInput);
    },

    getPhoneticMap(value: string): string | undefined {
      const phoneticMap = Object.keys(phoneticDictionary).find(
        (key) => phoneticDictionary[key] === value
      );

      return phoneticMap;
    },
  },
});
</script>
<style lang="scss" scoped>
.converted-text {
  white-space: pre-wrap;
}

.v-expansion-panel {
  background-color: #121212;
}
</style>
