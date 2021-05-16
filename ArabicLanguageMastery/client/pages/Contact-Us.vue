<template>
  <v-container class="text-center">
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <v-text-field type="text" name="name" label="Your Name" />
      </p>
      <p><v-text-field type="email" name="email" label="Your Email" /></p>
      <p>
        <v-textarea name="message" label="Message"></v-textarea>
      </p>
      <p>
        <v-btn type="submit">Send</v-btn>
      </p>
    </form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactUs',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
