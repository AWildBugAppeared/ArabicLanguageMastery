<template>
  <dropdown-button-base
    :button-classes="buttonClasses"
    :button-text="tarkeebPlace"
    :dropdown-text-list="shibhulFilDropdownTextList"
    @dropdownSelected="setShibhulFil"
  ></dropdown-button-base>
</template>

<script lang="ts">
import Vue from 'vue';

import DropdownButtonBase from '~/components/buttons/DropdownButtonBase.vue';
import { HiddenVerbLikeEntitiesDropdownText } from '~/constants/hidden-verb-like-entities-dropdown-text';

import { TarkeebPlaces } from '~/constants/tarkeeb-places';

export default Vue.extend({
  name: 'HiddenWordShibhulFilDropdownButton',

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
      tarkeebPlace: TarkeebPlaces.mutaalliq,
      shibhulFilDropdownTextList: Object.values(
        HiddenVerbLikeEntitiesDropdownText
      ),
    };
  },

  methods: {
    setShibhulFil(shibhulFil: string | null) {
      if (shibhulFil === HiddenVerbLikeEntitiesDropdownText.shibhulFilPresent) {
        shibhulFil = null;
      }

      this.$emit('shibhulFilSet', shibhulFil);
    },
  },
});
</script>

<style lang="scss" scoped></style>
