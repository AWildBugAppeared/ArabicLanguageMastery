<template>
  <dropdown-button-base
    :button-classes="buttonClasses"
    :button-text="tarkeebPlace"
    :dropdown-text-list="faailDropdownTextList"
    @dropdownSelected="setFaail"
  ></dropdown-button-base>
</template>

<script lang="ts">
import Vue from 'vue';

import DropdownButtonBase from '~/components/buttons/DropdownButtonBase.vue';
import { HiddenPronounsDropdownText } from '~/constants/hidden-pronouns-dropdown-text';
import { TarkeebPlaces } from '~/constants/tarkeeb-places';

export default Vue.extend({
  name: 'HiddenWordFaailDropdownButton',

  components: { DropdownButtonBase },

  props: {
    buttonClasses: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      tarkeebPlace: TarkeebPlaces.fil,
      faailDropdownTextList: Object.values(HiddenPronounsDropdownText),
    };
  },

  methods: {
    setFaail(faail: string | null) {
      if (faail === HiddenPronounsDropdownText.faailPresent) {
        faail = null;
      }

      this.$emit('faailSet', faail);
    },
  },
});
</script>

<style lang="scss" scoped></style>
