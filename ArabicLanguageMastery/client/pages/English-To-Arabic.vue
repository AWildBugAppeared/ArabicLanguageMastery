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

          <div class="py-5">*This is an apostrophe</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="input"
          label="Type arabic as it sounds phonetically in English"
          data-phonetic-text-area
        ></v-textarea>
      </v-col>
      <v-col cols="12" class="text-right">
        <div dir="rtl" class="arabic" data-arabic>{{ convertedInput }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  ArabicLetter,
  ArabicVowel,
} from '@/services/phonetic-converter/arabic-constants';

import { phoneticConverterService } from '@/services/service-exporter';
import { phoneticDictionary } from '@/services/phonetic-converter/phonetic-dictionary';

export default Vue.extend({
  name: 'EnglishToArabic',

  data() {
    return {
      arabicLetters: ArabicLetter,
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
    getPhoneticMap(value: string): string | undefined {
      let phoneticMaps = '';

      const keys = Object.keys(phoneticDictionary).filter(
        (key) => phoneticDictionary[key] === value
      );

      keys.forEach((key, index) => {
        phoneticMaps += `${index === 0 ? '' : '/'}${key}`;
      });

      return phoneticMaps;
    },
  },
});
</script>
<style lang="scss" scoped>
.v-expansion-panel {
  background-color: #121212;
}
</style>
