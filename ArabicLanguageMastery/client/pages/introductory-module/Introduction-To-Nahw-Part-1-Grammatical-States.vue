<template>
  <base-page>
    <template #heading>
      {{ title }}
    </template>
    <template #default>
      <p>Look at the following three sentences:</p>

      <ol>
        <li>Zaid prostrated to the idols.</li>
        <li>Amr hit Zaid.</li>
        <li>I passed by Zaid.</li>
      </ol>

      <p>
        What is the role of Zaid in each of these three sentences? Is it the
        same? Or is it different?
      </p>

      <p>
        In the first case, Zaid is used as the subject of the verb 'prostrate'.
        Zaid is the one doing the verb. Compare that to 2, where Zaid is the
        object of the verb. Zaid is the one upon whom the verb is being done.
        Number 3 is a bit more difficult. Recall from
        <NuxtLink :to="threePartsOfSpeechLessonPath"
          >The 3 Parts of Speech</NuxtLink
        >
        lesson that the word 'by' <span class="arabic">(بِ)</span> is a
        preposition which enters on another word. In our example, the
        preposition 'by' is entering on Zaid, which makes Zaid the object of the
        preposition.
      </p>

      <p>
        Let's focus more on 1 and 2. How do we know that Zaid is the subject in
        1 but the object in 2? Why isn't it the other way around? That's because
        in English, sequence determines the subject and object. The subject
        always comes before the verb and the object after. Changing the order
        around and saying 'Zaid hit Amr' completely changes who did the hitting
        and who was hit.
      </p>

      <p>
        Arabic however does not have this restriction and the subject, verb, and
        object can come in any order. Since the sequence does not determine the
        role Zaid and Amr play in the sentence, we need some other mechanism by
        which we can identify the subject and object. This is done by The Method
        of Reflection.
      </p>

      <h2>The Method of Reflection</h2>

      <p>
        In Arabic, the role a word plays in a sentence is often reflected on the
        end of a word. There are a few different methods of reflection, but the
        most popular is the method of using the Arabic vowels, Dammah
        <span class="arabic">(ضمّة)</span>, Fathah
        <span class="arabic">(فتحة)</span>, and Kasrah
        <span class="arabic">(كسرة)</span> to demonstrate the states of Raf'
        <span class="arabic">(رفع)</span>, Nasb
        <span class="arabic">(نصب)</span>, and Jarr
        <span class="arabic">(جرّ)</span> respectively.
      </p>

      <p>
        When a word is the subject of a verb, we say that the word is
        <span class="arabic">مَرْفُوْع</span>, which means it is in the state of
        <span class="arabic">رَفْع</span>. When a word is the object of a verb,
        we say that the word is <span class="arabic">مَنْصُوْب</span>, which
        means it is in the state of <span class="arabic">نَصْب</span>. Finally,
        when a word is the object of a preposition, we say that the word is
        <span class="arabic">مَجْرُوْر</span>, which means it is in the state of
        <span class="arabic">جَرّ</span>.
      </p>

      <p>
        Let's take our 3 English examples above and translate them into Arabic
        and see this methods of reflection in action.
      </p>

      <v-data-table
        :headers="reflectionTableHeaders"
        :items="reflectionTableItems"
        :items-per-page="14"
        hide-default-footer
        class="text-center elevation-5"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.english }}</td>
            <td class="arabic">{{ item.arabic }}</td>
            <td>{{ item.zaidRole }}</td>
            <td class="arabic">{{ item.grammaticalState }}</td>
            <td class="arabic">{{ item.reflectionMethod }}</td>
          </tr>
        </template>
      </v-data-table>

      <note>
        You may be wondering why we said the method of reflection is Fathah and
        Kasrah in the last two examples instead of Kasratain and Dammatain.
        While technically correct, we tend to just stick with Dammah, Fathah,
        Kasrah because whether or not a word ends in a tanween, is determined by
        whether or not the word is definite by having the 'Al' prefix. Whereas
        the vowel category the word ends in (Dammah/Fathah/Kasrah) is determined
        by the grammatical state.
      </note>

      <lesson-summary>
        <ul>
          <li>
            Words can be used in different ways in a sentence. A word can be the
            subject of a verb in one sentence, and the object of a verb in
            another.
          </li>
          <li>
            English differentiates between subjects and objects of a word
            through sequence. But Arabic has it's own mechanism for
            differentiating between the subject and object.
          </li>
          <li>
            There are 3 grammatical states in Arabic,
            <span class="arabic">رَفْع</span> (Raf'),<span class="arabic"
              >نَصْب</span
            >
            (Nasb), and <span class="arabic">جَرّ</span> (Jarr). Arabic words
            have different methods to reflect which grammatical state they are
            in. The most popular method is for a word to end in
            Dammah/Fathah/Kasrah to reflect Raf'/Nasb/Jarr respectively.
          </li>
          <li>
            The subject of a verb will be <span class="arabic">مَرْفُوْع</span>,
            the object of a verb <span class="arabic">مَنْصُوْب</span>, and the
            object of a preposition <span class="arabic">مَجْرُوْر</span>.
          </li>
        </ul>
      </lesson-summary>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';
import { Routes } from '~/constants/routes';

export default Vue.extend({
  name: 'IntroductionToNahwPart1GrammaticalStates',
  components: { BasePage },

  data() {
    return {
      reflectionTableHeaders: [
        {
          text: 'English',
          value: 'english',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Arabic',
          value: 'arabic',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Role of the word Zaid',
          value: 'zaidRole',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Grammatical State',
          value: 'grammaticalState',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Method of Reflection',
          value: 'reflectionMethod',
          align: 'center',
          sortable: false,
        },
      ],
      reflectionTableItems: [
        {
          english: 'Zaid prostrated to the idols',
          arabic: 'سَجَدَ زَيْدٌ لِلْأَصْنَامِ',
          zaidRole: 'Subject of a verb',
          grammaticalState: 'رفع',
          reflectionMethod: '\u064F',
        },
        {
          english: 'Amr hit Zaid',
          arabic: 'ضَرَبَ عَمَرٌ زَيْدًا',
          zaidRole: 'Object of a verb',
          grammaticalState: 'نصب',
          reflectionMethod: '\u064E',
        },
        {
          english: 'I passed by Zaid',
          arabic: 'مَرَرْتُ بِزَيْدٍ',
          zaidRole: 'Object of a preposition',
          grammaticalState: 'جرّ',
          reflectionMethod: '\u0650',
        },
      ],
      threePartsOfSpeechLessonPath:
        Routes.introductoryModule.subclassifyingTheThreePartsOfSpeech,
      title: 'Introduction To Nahw Part 1 - Grammatical States',
    };
  },
});
</script>

<style lang="scss" scoped>
.inline-heading {
  display: inline;
}
</style>
