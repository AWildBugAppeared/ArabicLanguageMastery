<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Routes } from '@/constants/routes';

export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  created() {
    this.$router.push(Routes.introductoryModule.theArabicSciences);
  },
});
</script>
