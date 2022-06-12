<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }} (Past Tense Verb)
    </template>
    <template #default>
      <p>Verbs come in 3 tenses, past, present, and future.</p>
      <table>
        <tbody>
          <tr>
            <td>
              Past Tense
              <br />
            </td>
            <td>
              I said
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Present Tense
              <br />
            </td>
            <td>
              I am saying/I say
              <br />
            </td>
          </tr>
          <tr>
            <td>
              Future Tense
              <br />
            </td>
            <td>
              I will say
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <note>
        The present tense can be split into two types: Simple Present, and
        Present Continuous. The Present Continuous is exactly what it says, it
        is something that is happening right now, and the action is still
        ongoing. 'I am saying..., I am walking..., I am listening....'. The
        simple present is used to refer to a habitual action that isn't
        necessarily going on right now, 'I say...., I do......, I write...'
      </note>
      <p>
        This is our first Sarf lesson. Our aim is to take the most basic verb,
        ((فَعَلَ)) and be able to fully conjugate it's Maadhi (past tense) form.
      </p>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';

export default Vue.extend({
  name: 'TheMaadhiVerb',
  components: { BasePage },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
