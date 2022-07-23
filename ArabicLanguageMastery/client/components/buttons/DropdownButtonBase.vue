<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn :id="buttonText" :class="buttonClasses" v-bind="attrs" dark v-on="on"
        ><span class="arabic">{{ buttonText }}</span></v-btn
      >
    </template>
    <v-list>
      <v-list-item
        v-for="(dropdownText, index) in dropdownTextList"
        :id="dropdownText.toLowerCase().replace(/ /g, '-')"
        :key="index"
        @click="emitSelection(dropdownText)"
      >
        <v-list-item-title>{{ dropdownText }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DropdownButtonBase',

  props: {
    buttonClasses: {
      type: String,
      required: false,
      default: '',
    },
    buttonText: {
      type: String,
      required: false,
      default: '',
    },
    dropdownTextList: {
      type: Array as () => string[],
      required: true,
    }
  },

  data() {
    return {};
  },

  methods: {
    emitSelection(dropdownText: string | null) {
      this.$emit('dropdownSelected', dropdownText);
    },
  },
});
</script>

<style lang="scss" scoped></style>
