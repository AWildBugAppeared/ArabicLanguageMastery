<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }} (Past Tense Verb)
    </template>
    <template #default>
      <p>Verbs come in 3 tenses, past, present, and future.</p>

      <div class="tense-table mx-auto">
        <v-data-table
          class="elevation-1"
          :headers="tenseHeaders"
          :items="tenseData"
          hide-default-footer
        >
        </v-data-table>
      </div>

      <note>
        The present tense can be split into two types: Simple Present, and
        Present Continuous. The Present Continuous is exactly what it says, it
        is something that is happening right now, and the action is still
        ongoing. 'I am saying..., I am walking..., I am listening....'. The
        simple present is used to refer to a habitual action that isn't
        necessarily going on right now, 'I say...., I do......, I write...'
      </note>
      <p>
        In our first Sarf lesson, our aim is to take the most basic verb,
        <span class="arabic">فَعَلَ</span> and be able to fully conjugate it's
        Maadhi (past tense) form.
      </p>
      <p>
        Verbs have a 'Person'. This refers to whether the one doing the verb
        (the subject of the verb) is absent and being spoken about (Third
        Person), is present and being spoken to (Second Person), or is present
        and is the one speaking (First Person). In English, we use pronouns to
        convey the Person, and in so doing can also provide extra information
        regarding the gender, plurality, and presence of the subject. You will
        be familiar with the following, which we call a
        <strong>Verb Conjugation Table</strong>:
      </p>

      <div class="person-table mx-auto">
        <v-data-table
          class="elevation-1"
          :headers="personHeaders"
          :items="personData"
          hide-default-footer
        >
        </v-data-table>
      </div>

      <note>
        It is a good idea to refer to this table again when the Arabic version
        is given further down. Two particularly interesting things of note:
        <ul>
          <li>
            We only specify the gender in the case of the Third Person Singular.
          </li>
          <li>
            The Second Person has only one entry. We do not differentiate
            between Gender or Plurality.
          </li>
        </ul>
      </note>

      <p>
        Arabic has it's own version with three considerable differences. First,
        it has the concept of dual. Where in English we say 'he/she' for
        singular, and use 'they' for 2 or more, in Arabic the equivalent of
        'they' is only used if there are 3 or more. If there are only 2, a dual
        form is used.
      </p>

      <p>
        Second, unlike the second person in English which just has 'you'
        regardless of gender and number, in Arabic both gender and number are
        taken into account. The only direct similarity between the two languages
        lies in the first person, where both languages do not express the
        gender, nor do they have a special form for the dual.
      </p>

      <p>
        The final difference is that there is no neutral in Arabic. A pen in
        English has no gender, so we would say, "It broke." But a pen, and in
        fact every noun, in Arabic has a gender. It is either masculine, or
        feminine, and in the case of the pen it is masculine. This means when it
        comes to using pronouns, a pen, and a man would be treated exactly the
        same and we would say for both, "He broke." When translating back to
        English though, we would of course say, "It broke," in reference to the
        pen to satisfy English grammar.
      </p>

      <eliciting-question>
        Given the differences betweeen English and Arabic highlighted above, can
        you figure out how many lines our Arabic Conjugation table will have?
        <template #answer>14</template>
      </eliciting-question>
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
    return {
      tenseHeaders: [
        { text: 'Tense', value: 'tense' },
        { text: 'Example', value: 'example' },
      ],
      tenseData: [
        { tense: 'Past', example: 'I went' },
        { tense: 'Present', example: 'I am going/I go' },
        { tense: 'Future', example: 'I will go' },
      ],
      personHeaders: [
        { text: 'Person', value: 'person' },
        { text: 'Example', value: 'example' },
      ],
      personData: [
        { person: 'Third Person Singular Masculine', example: 'He went' },
        { person: 'Third Person Singular Feminine', example: 'She went' },
        { person: 'Third Person Singular Neutral', example: 'It/One went' },
        { person: 'Third Person Plural', example: 'They went' },
        { person: 'Second Person', example: 'You went' },
        { person: 'First Person Singular', example: 'I went' },
        { person: 'First Person Plural', example: 'We went' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.tense-table,
.person-table {
  width: 40%;
}
</style>
