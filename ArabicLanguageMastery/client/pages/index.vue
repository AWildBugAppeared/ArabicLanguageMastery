<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-if="lesson">
        <v-card-title class="headline">
          {{ lesson.title }}
        </v-card-title>
        <!-- eslint-disable vue/no-v-html -->
        <v-card-text v-html="lesson.content"> </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
const Cosmic = require('cosmicjs');
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'arabic-learning-mastery-staging',
  read_key: 'f3AHHYQTIwG3MxExxX6r8i2Y63enjE05dSTZS73qK1sSyGRDhv',
});

export default {
  components: {},
  data() {
    return {
      lesson: null,
    };
  },
  async mounted() {
    const data = await bucket.getObjects({
      query: {
        title: 'Mawsoof Sifah',
      },
      props: 'slug,title,content,metadata', // Limit the API response data by props
    });
    this.lesson = await data.objects[0];
  },
};
</script>
