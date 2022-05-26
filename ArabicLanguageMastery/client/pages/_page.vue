<template>
  <div v-if="page" class="page-container">
    <h1 class="text-center py-3">{{ page.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <v-runtime-template
      data-page-content
      :template="sanitisedLessonContent"
    ></v-runtime-template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import VRuntimeTemplate from 'v-runtime-template';

import {
  htmlSanitisationService,
  staticPageService,
} from '~/services/service-exporter';

export default Vue.extend({
  components: {
    VRuntimeTemplate,
  },

  data() {
    return {
      page: {
        content: '',
      },
      sanitisedLessonContent: '',
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

<style lang="scss" scoped>
.page-container {
  max-width: 1000px;
  margin: auto;
}
</style>
