<template>
  <v-container class="text-center">
    <v-expansion-panels multiple hover>
      <v-expansion-panel class="test">
        <v-expansion-panel-header>
          <h2 class="pb-5">Arabic Letters</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dir="rtl">
            <v-col
              v-for="arabicLetter in arabicLetters"
              :key="arabicLetter"
              cols="1"
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
          <v-row dir="rtl">
            <v-col
              v-for="arabicVowel in arabicVowels"
              :key="arabicVowel"
              cols="1"
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
          <v-row dir="rtl">
            <v-col
              v-for="arabicWord in arabicSpecialWords"
              :key="arabicWord"
              cols="2"
            >
              <span class="arabic-sm">{{ arabicWord }}</span>
              <span class="px-2">-</span> {{ getPhoneticMap(arabicWord) }}
            </v-col>
          </v-row>

          <div class="py-5">
            Special words are usually unconventionally written. To use them, wrap the word in (()) e.g. ((Allah))
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="input"
          label="Type arabic as it sounds in English. Use the legend above and the example as a guide for the more difficult Arabic characters."
          data-phonetic-text-area
        ></v-textarea>
      </v-col>
      <v-col cols="12" class="text-right">
        <div dir="rtl" class="arabic converted-text" data-arabic>
          {{ convertedInput }}
        </div>
      </v-col>
    </v-row>
    <div class="text-right mt-2">
      <v-btn data-copy-btn @click="copy">Copy</v-btn>
    </div>
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
      input: '',
      convertedInput: '',
    };
  },

  watch: {
    input(value) {
      this.convertedInput = phoneticConverterService.convertToArabic(value);
    },
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
