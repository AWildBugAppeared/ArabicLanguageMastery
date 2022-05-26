<template>
  <v-container class="text-center">
    <div>
      This site is still under construction so please bear with us while it is
      being worked on. If you have any suggestions, or have found any bugs,
      please contact us using the form below
    </div>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" value="contact" name="form-name" />
      <v-text-field type="text" name="name" label="Your Name" />
      <v-text-field type="email" name="email" label="Your Email" />
      <v-textarea name="message" label="Message" value=""></v-textarea>
      <v-btn type="submit">Send</v-btn>
    </form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactUs',

  data() {
    return {
      message: '',
    };
  },
});
</script>

<style lang="scss" scoped></style>
