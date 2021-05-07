<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="input"
          label="Type arabic as it sounds phonetically in English"
          data-phonetic-text-area
        ></v-textarea>
      </v-col>
      <v-col cols="12" class="text-right">
        <div data-arabic class="arabic">{{ convertedInput }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { phoneticConverterService } from '@/services/service-exporter';

export default Vue.extend({
  name: 'EnglishToArabic',

  data() {
    return {
      input: '',
      convertedInput: '',
    };
  },

  watch: {
    input(value) {
      this.convertedInput = phoneticConverterService.convertToArabic(value);
    },
  },
});
</script>
