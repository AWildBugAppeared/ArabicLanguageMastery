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
        first, then the adjective. The word for 'boy' in Arabic is ((وَلَدٌ))
        and the word for 'tall' is ((طَوِيْلٌ)). So 'tall boy' in Arabic would
        be:
      </p>
      <p class="text-center">((وَلَدٌ طَوِيْلٌ))</p>
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
        <p>((وَلَدٌ طَوِيْلٌ)) - a tall boy</p>
        <p>((بِنْتٌ طَوِيْلَةٌ)) - a tall girl</p>
      </div>
      <note>
        Here the adjective ((طَوِيْلٌ)) is made feminine by the addition of the
        ((ة)). This is one of the ways a word is made feminine.
      </note>
      <h2>Number</h2>
      <p>
        Nouns also have a number. They are either singular, dual or plural. Both
        the noun and the adjective need to match in number.
      </p>
      <div class="text-center">
        <p>((وَلَدٌ طَوِيْلٌ)) - a tall boy</p>
        <p>((وَلَدَانِ طَوِيْلَانِ)) - two tall boys</p>
        <p>((مُسْلِمُوْنَ سَاجِدُوْنَ)) - prostrating Muslims</p>
      </div>
      <note>
        The ((انِ)) and ((وْنَ)) suffixes are one method of making words dual
        and plural respectively.
      </note>
      <p>
        <br />
      </p>
      <h2>Definiteness</h2>
      <p>
        When something is definite, it refers to something specific, whereas
        indefinite is when something is generic. It is the difference between
        saying, "The boy," and "A boy." The most common way of making a word
        definite in Arabic is by prefixing ((اَلْ)) to it and removing the
        tanween. ((وَلَدٌ)) - a boy, becomes ((أَلْوَلَدُ)) - the boy
      </p>
      <p class="text-center">
        ((وَلَدٌ طَوِيْلٌ)) - a tall boy <br />((أَلْوَلَدُ الطَّوِيْلُ)) - the
        tall boy
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
        <p>((دَرَسَ الطَالِبُ الذَّكِيُّ)) - the smart student studied</p>
        <p>((رَأَيْتُ الطَالِبَ الذَّكِيَّ)) - I saw the smart student</p>
        <p>
          ((مَرَرْتُ بِالطَّالِبِ الذَّكِيِّ)) - I passed by the smart student
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
          <li>Small boy -> ((وَلَدٌ صَغِيْرٌ))</li>
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
