<template>
  <v-container ref="page" class="page-container">
    <h1 class="text-h3 text-center">
      <slot name="heading"></slot>
    </h1>
    <slot></slot>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BasePage',

  data() {
    return {};
  },

  mounted() {
    (this.$refs.page as HTMLElement).innerHTML = (this.$refs
      .page as HTMLElement).innerHTML
      .replace(/\(\(/g, '<span class="arabic">')
      .replace(/\)\)/g, '</span>');
  },
});
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 24px;
}

ul {
  margin-bottom: 16px;
}

.page-container {
  max-width: 1000px;
  margin: auto;
}
</style>

<style lang="scss">
.v-alert__content > p:last-child {
  margin-bottom: 0;
}
</style>
