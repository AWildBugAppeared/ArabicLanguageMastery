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
          :items="tenseItems"
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
        Verbs also have a command form. This is where you are speaking and
        commanding someone else to carry out the action: eat, sleep, sit etc.
      </p>

      <important-note>
        In Arabic, there are only 3 kinds of verbs. The past tense verb which is
        called Maadiy <span class="arabic">مَاضِي</span>, the present tense and
        future tense are grouped together and called Mudaari'
        <span class="arabic">مُضَارِعٌ</span>, and the command verb called Amr
        <span class="arabic">أَمْرٌ</span>
      </important-note>

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
          :items="personItems"
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

      <p>
        To give you some time to think about the question above, let's discuss
        another concept regarding verbs which is their 'voice'. Verbs are either
        Active or Passive. The active voice is when the subject of the sentence
        (remember the subject refers to the thing we are talking about) is the
        one doing the verb, and the passive voice is when the subject of the
        sentence is the one receiving the action. Take the sentence, 'I ate the
        apple'. 'I' is the subject of the sentence and the verb - the one we are
        talking about. If we instead shifted our focus to the object of the verb
        instead, the apple, we could say: 'The apple was eaten', or even, 'The
        apple was eaten by me,' if we still wished to preserve the information
        about who was doing the eating. 'The apple' went from being the object
        of the verb in the first sentence, to being the subject in the second.
        This can be tricky to wrap your head around at first, and don't worry
        too much about getting it 100%. You will see plenty of examples in the
        future which will solidify the active and passive voices in your mind.
      </p>

      <important-note>
        The Active Voice is when the focus is on the one doing the verb. The
        Passive Voice is when the focus is on the one receiving/experiencing the
        verb. 'I saved him' vs 'He was saved by me'.
      </important-note>

      <p>
        Now we are ready to see the Arabic conjugation table. The total number
        of rows will be 14. The third person differentiates between masculine
        and feminine giving 2. It differentiates between number also, singular,
        dual, and plural, giving 2x3 = 6 conjugations for the 3rd person. The
        second person works just like the third giving another 6. We now have
        12. And for the 1st person, we have no gender, and no dual, just the
        singular 'I' and plural 'We' giving us 14.
      </p>

      <p>
        The verb <span class="arabic">فَعَلَ</span> literally means, 'he did',
        and it is the word chosen by default that is used to practice Sarf. The
        idea being if you can conjugate <span class="arabic">فَعَلَ</span>, then
        you can conjugate any other word that follows the same pattern, such as
        <span class="arabic">ضَرَبَ</span>. You just substitute the letters and
        follow the learned pattern.
      </p>

      <v-data-table
        :headers="conjugationHeaders"
        :items="conjugationItems"
        :items-per-page="14"
        hide-default-footer
        class="text-center elevation-5"
      >
        <template #[`header.conjugation`]="{ header }">
          <span class="arabic">صِيْغَة</span><br />
          <span class="conjugation-number-header">{{ header.text }}</span>
        </template>

        <template #item="{ item, index }">
          <tr :class="conjugationTableRowClass(item.person, item.gender)">
            <td>{{ item.person }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.plurality }}</td>
            <td>{{ item.english }}</td>
            <td class="arabic">{{ item.active }}</td>
            <td class="arabic">{{ item.passive }}</td>
            <td>{{ index + 1 }}</td>
          </tr>
        </template>
      </v-data-table>

      <p>
        You should learn this table fully and be able to recite it from memory
        fluently. There is no need to rush and have it perfect before moving on
        to other lessons however, so take your time. And if you look carefully,
        you will notice that the only difference between the active and passive
        is the beginning. Instead of
        <span class="arabic">-فَعَ</span> it is
        <span class="arabic">-فُعِ</span>, with the rest of the word being
        unchanged. Therefore don't think of it as having to remember 28
        conjugations. Instead it is just 14, with the beginning changed slightly
        for the passive.
      </p>

      <note>
        <p class="text-center pa-0 arabic">
          تَ تُمَا تُمْ تِ تُمَا تُنَّ تُ نَا
        </p>
        <p>
          Memorise the above until you can recite it fluently. They are the
          endings to conjugations number 7-14. Because conjugations 7-14 all
          same and only differ in their endings, many people find learning the
          endings on their own and then applying it to the full table is easier
          than trying to learn each line.
        </p>
      </note>

      <lesson-summary>
        <ul>
          There are 3 kinds of verbs in Arabic:
          <ol>
            <li>
              The Past Tense Verb <span class="arabic">مَاضِي</span> eg: He ate.
            </li>
            <li>
              The Present/Future Tense Verb
              <span class="arabic">مُضَارِع</span> eg Present continuous: I am
              eating. Simple Present: I eat, Future: I will eat.
            </li>
            <li>The Command Verb <span class="arabic">أَمْر</span> eg: Eat</li>
          </ol>

          <li>
            Verbs are either active or passive. Active is where the focus is on
            the one doing the verb, passive is where the focus is on the one
            upon whom the action is being done. I ate the apple vs The apple was
            eaten.
          </li>

          <li>
            In Arabic, you have Gender in addition to Singular, Dual, and Plural
            to account for with the 2nd and 3rd Person. For the first person,
            you only have Singular and Plural, no Gender.
          </li>

          <li>
            The active and passive conjugations are almost identical, with the
            only change being at the start where instead of
            <span class="arabic">-فَعَ</span> it is
            <span class="arabic">-فُعِ</span>
          </li>
        </ul>
      </lesson-summary>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheMaadhiVerb',

  data() {
    return {
      tenseHeaders: [
        { text: 'Tense', value: 'tense', sortable: false },
        { text: 'Example', value: 'example', sortable: false },
      ],
      tenseItems: [
        { tense: 'Past', example: 'I went' },
        { tense: 'Present', example: 'I am going/I go' },
        { tense: 'Future', example: 'I will go' },
      ],
      personHeaders: [
        { text: 'Person', value: 'person', sortable: false },
        { text: 'Example', value: 'example', sortable: false },
      ],
      personItems: [
        { person: 'Third Person Singular Masculine', example: 'He went' },
        { person: 'Third Person Singular Feminine', example: 'She went' },
        { person: 'Third Person Singular Neutral', example: 'It/One went' },
        { person: 'Third Person Plural', example: 'They went' },
        { person: 'Second Person', example: 'You went' },
        { person: 'First Person Singular', example: 'I went' },
        { person: 'First Person Plural', example: 'We went' },
      ],
      conjugationHeaders: [
        {
          text: 'Person',
          value: 'person',
          align: 'center',
          class: 'conjugation-table-header',
          sortable: false,
        },
        {
          text: 'Gender',
          value: 'gender',
          align: 'center',
          class: 'conjugation-table-header',
          sortable: false,
        },
        {
          text: 'Plurality',
          value: 'plurality',
          align: 'center',
          class: 'conjugation-table-header',
          sortable: false,
        },
        {
          text: 'English',
          value: 'english',
          align: 'center',
          class: 'conjugation-table-header',
          sortable: false,
        },
        {
          text: 'Active',
          value: 'active',
          align: 'center',
          class: 'conjugation-table-header',
          sortable: false,
        },
        {
          text: 'Passive',
          value: 'passive',
          align: 'center',
          class: 'conjugation-table-header',
          sortable: false,
        },
        {
          text: 'Conjugation #',
          value: 'conjugation',
          align: 'center',
          class: 'conjugation-table-header',
          sortable: false,
        },
      ],
      conjugationItems: [
        {
          person: '3rd',
          gender: 'Masculine',
          plurality: 'Singular',
          english: 'He',
          active: 'فَعَلَ',
          passive: 'فُعِلَ',
        },
        {
          person: '3rd',
          gender: 'Masculine',
          plurality: 'Dual',
          english: 'They (2 males)',
          active: 'فَعَلَا',
          passive: 'فُعِلَا',
        },
        {
          person: '3rd',
          gender: 'Masculine',
          plurality: 'Plural',
          english: 'They (3/more males)',
          active: 'فَعَلُوْا',
          passive: 'فُعِلُوْا',
        },
        {
          person: '3rd',
          gender: 'Feminine',
          plurality: 'Singular',
          english: 'She',
          active: 'فَعَلَتْ',
          passive: 'فُعِلَتْ',
        },
        {
          person: '3rd',
          gender: 'Feminine',
          plurality: 'Dual',
          english: 'They (2 females)',
          active: 'فَعَلَتَا',
          passive: 'فُعِلَتَا',
        },
        {
          person: '3rd',
          gender: 'Feminine',
          plurality: 'Plural',
          english: 'They (2/more females)',
          active: 'فَعَلْنَ',
          passive: 'فُعِلْنَ',
        },
        {
          person: '2nd',
          gender: 'Masculine',
          plurality: 'Singular',
          english: 'You',
          active: 'فَعَلْتَ',
          passive: 'فُعِلْتَ',
        },
        {
          person: '2nd',
          gender: 'Masculine',
          plurality: 'Dual',
          english: 'You (2 males)',
          active: 'فَعَلْتُمَا',
          passive: 'فُعِلْتُمَا',
        },
        {
          person: '2nd',
          gender: 'Masculine',
          plurality: 'Plural',
          english: 'You (3/more males)',
          active: 'فَعَلْتُمْ',
          passive: 'فُعِلْتُمْ',
        },
        {
          person: '2nd',
          gender: 'Feminine',
          plurality: 'Singular',
          english: 'You',
          active: 'فَعَلْتِ',
          passive: 'فُعِلْتِ',
        },
        {
          person: '2nd',
          gender: 'Feminine',
          plurality: 'Dual',
          english: 'You (2 females)',
          active: 'فَعَلْتُمَا',
          passive: 'فُعِلْتُمَا',
        },
        {
          person: '2nd',
          gender: 'Feminine',
          plurality: 'Plural',
          english: 'They (3/more females)',
          active: 'فَعَلْتُنَّ',
          passive: 'فُعِلْتُنَّ',
        },
        {
          person: '1st',
          gender: 'Masculine/Feminine',
          plurality: 'Singular',
          english: 'I',
          active: 'فَعَلْتُ',
          passive: 'فُعِلْتُ',
        },
        {
          person: '1st',
          gender: 'Masculine/Feminine',
          plurality: 'Plural',
          english: 'We',
          active: 'فَعَلْنَا',
          passive: 'فُعِلْنَا',
        },
      ],
    };
  },

  methods: {
    conjugationTableRowClass(person: string, gender: string): string {
      let personClassPart = '';

      switch (person) {
        case '3rd':
          personClassPart = 'third';
          break;
        case '2nd':
          personClassPart = 'second';
          break;
        default:
          personClassPart = 'first';
          break;
      }

      let genderClassPart = '';

      switch (gender) {
        case 'Masculine/Feminine':
          genderClassPart = 'neutral';
          break;
        default:
          genderClassPart = gender.toLowerCase();
          break;
      }

      return `${personClassPart}-person-${genderClassPart}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.conjugation-number-header {
  font-size: 10px;
}

::v-deep .conjugation-table-header {
  color: white !important;
  background-color: black;
  vertical-align: middle;
}

.first-person-neutral {
  background-color: #81d4fa;
}

.tense-table,
.person-table {
  width: 40%;
}

thead > th:first-child.conjugation-table-header {
  padding-left: 15px;
}

.third-person-masculine {
  background-color: #ef9a9a;
}

.third-person-feminine {
  background-color: #ffcdd2;
}

.second-person-masculine {
  background-color: #80cbc4;
}

.second-person-feminine {
  background-color: #b2dfdb;
}
</style>

<style lang="scss">
.sconjugation-table-header {
  color: white !important;
  background-color: black;
  vertical-align: middle;
}
</style>
