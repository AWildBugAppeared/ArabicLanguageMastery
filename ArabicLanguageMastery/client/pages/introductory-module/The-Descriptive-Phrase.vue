<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }} - Mawsoof Sifah
    </template>
    <template #default>
      <p>
        The first thing to note about the descriptive phrase in Arabic is that
        the structure is inverted compared to English. In English, we would say
        'tall boy', when describing a boy who is tall. The word 'tall' is the
        adjective (the description), and the word 'boy' is the noun being
        described. The order of the words is Adjective + Noun.
      </p>
      <p>
        In Arabic, it's the other way around. The noun being described comes
        first, then the adjective. The word for 'boy' in Arabic is
        <span class="arabic">وَلَدٌ</span> and the word for 'tall' is
        <span class="arabic">طَوِيْلٌ</span>. So 'tall boy' in Arabic would be:
      </p>
      <p class="text-center"><span class="arabic">وَلَدٌ طَوِيْلٌ</span></p>
      <p>
        For a descriptive phrase to be valid, the adjective and the noun need to
        match each other in four aspects:
      </p>
      <ol>
        <li>Gender</li>
        <li>Number</li>
        <li>Definiteness</li>
        <li>Grammatical State</li>
      </ol>
      <p>
        For the examples which follow, do not worry about how the correct
        gender, number, state etc. are constructed. That will come later. What's
        important is you remember that both the noun and the adjective need to
        match.
      </p>
      <h2>Gender</h2>
      <p>
        Nouns in Arabic have gender. They are either masculine or feminine. If
        an adjective is to describe a noun, the adjective needs to match in
        gender.
      </p>
      <div class="text-center">
        <p><span class="arabic">وَلَدٌ طَوِيْلٌ</span> - a tall boy</p>
        <p><span class="arabic">بِنْتٌ طَوِيْلَةٌ</span> - a tall girl</p>
      </div>
      <note>
        Here the adjective <span class="arabic">طَوِيْلٌ</span> is made feminine
        by the addition of the <span class="arabic">ة</span>. This is one of the
        ways a word is made feminine.
      </note>
      <h2>Number</h2>
      <p>
        Nouns also have a number. They are either singular, dual or plural. Both
        the noun and the adjective need to match in number.
      </p>
      <div class="text-center">
        <p><span class="arabic">وَلَدٌ طَوِيْلٌ</span> - a tall boy</p>
        <p><span class="arabic">وَلَدَانِ طَوِيْلَانِ</span> - two tall boys</p>
        <p>
          <span class="arabic">مُسْلِمُوْنَ سَاجِدُوْنَ</span> - prostrating
          Muslims
        </p>
      </div>
      <note>
        The <span class="arabic">انِ</span> and
        <span class="arabic">وْنَ</span> suffixes are one method of making words
        dual and plural respectively.
      </note>
      <p>
        <br />
      </p>
      <h2>Definiteness</h2>
      <p>
        When something is definite, it refers to something specific, whereas
        indefinite is when something is generic. It is the difference between
        saying, "The boy," and "A boy." The most common way of making a word
        definite in Arabic is by prefixing <span class="arabic">اَلْ</span> to
        it and removing the tanween. <span class="arabic">وَلَدٌ</span> - a boy,
        becomes <span class="arabic">أَلْوَلَدُ</span> - the boy
      </p>
      <p class="text-center">
        <span class="arabic">وَلَدٌ طَوِيْلٌ</span> - a tall boy <br /><span
          class="arabic"
          >أَلْوَلَدُ الطَّوِيْلُ</span
        >
        - the tall boy
      </p>
      <h2>Grammatical State</h2>
      <p>
        <strong>
          >The grammatical states of words are reflected by the last vowel on
          the word. Dammah, fathah, and kasrah for the grammatical states of
          Raf', Nasb, and Jarr repectively.</strong
        >
      </p>
      <div class="text-center">
        <p>
          <span class="arabic">دَرَسَ الطَالِبُ الذَّكِيُّ</span> - the smart
          student studied
        </p>
        <p>
          <span class="arabic">رَأَيْتُ الطَالِبَ الذَّكِيَّ</span> - I saw the
          smart student
        </p>
        <p>
          <span class="arabic">مَرَرْتُ بِالطَّالِبِ الذَّكِيِّ</span> - I
          passed by the smart student
        </p>
      </div>
      <lesson-summary>
        <ul>
          <li>
            The Arabic descriptive phrase is inverted compared to the English.
            We say, tall boy, in English, in Arabic we would say, boy tall.
          </li>
          <li>
            The noun-adjective pair must match in 4 categories: Gender, Number,
            Definiteness, and Grammatical State.
          </li>
          <li>Small boy -> <span class="arabic">وَلَدٌ صَغِيْرٌ</span></li>
        </ul>
      </lesson-summary>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';

export default Vue.extend({
  name: 'TheDescriptivePhrase',
  components: { BasePage },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
