<template>
  <v-container>
    <p class="mb-5">
      See the example below to get you started. The full character mappings can
      be found at the bottom of the page.
    </p>

    <v-row justify="center" class="text-center">
      <v-col cols="12" md="6" class="my-3">{{ exampleInput }}</v-col>
      <v-col cols="12" md="6" class="arabic">{{ exampleConvertedInput }}</v-col>
    </v-row>

    <v-divider></v-divider>

    <div class="converted-text-container mt-2 my-5 pa-4">
      <!-- eslint-disable-next-line prettier/prettier -->
      <div dir="rtl" class="arabic converted-text pa-0 ma-0" data-arabic>{{ convertedInput }}</div>
      <div class="text-right my-5">
        <v-btn data-copy-btn @click="copy">Copy</v-btn>
      </div>
    </div>

    <v-textarea
      v-model="input"
      label="Type here to convert to Arabic"
      class="py-5"
      data-phonetic-text-area
    ></v-textarea>

    <div v-if="!$vuetify.breakpoint.mobile" class="text-center pb-5">
      <img src="../assets/arabic-keyboard.png" />
    </div>

    <v-expansion-panels multiple hover class="text-center">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h2 class="py-5">Ligatures</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row dir="rtl" justify="center">
            <v-col
              v-for="arabicWord in arabicLigatures"
              :key="arabicWord"
              cols="4"
              sm="3"
            >
              <span class="arabic-sm">{{ arabicWord }}</span>
              <span class="px-2">-</span> {{ getPhoneticMap(arabicWord) }}
            </v-col>
          </v-row>

          <div class="py-5">
            Ligatures are usually unconventionally written. To use them, wrap
            the word in (()) e.g. ((saw))
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import { ArabicLigature } from '@/services/phonetic-converter/arabic-constants';

import { phoneticConverterService } from '@/services/service-exporter';
import { phoneticDictionary } from '@/services/phonetic-converter/phonetic-dictionary';

export default Vue.extend({
  name: 'EnglishToArabic',

  data() {
    return {
      arabicLigatures: ArabicLigature,
      exampleInput:
        "Aanzala Allahu alqurA~na Iil'Y rasoolihi muHammadin ((saw)) maweiZa-tan lilnnaasi",
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
  white-space: pre;
}

.converted-text-container {
  border: 2px solid white;
}

.v-expansion-panel {
  background-color: #121212;
}
</style>
