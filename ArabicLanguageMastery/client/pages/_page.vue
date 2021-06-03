<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div data-page-content v-html="sanitisedLessonContent"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  htmlSanitisationService,
  staticPageService,
} from '~/services/service-exporter';

export default Vue.extend({
  data() {
    return {
      page: null,
      sanitisedLessonContent: null,
    };
  },

  async created() {
    this.page = await staticPageService.getPage(this.$route.params.page);
    this.sanitisedLessonContent = htmlSanitisationService.sanitizeHtml(
      this.page.content
    );
  },
});
</script>
