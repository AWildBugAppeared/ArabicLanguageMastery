<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <important-note>
        Phrases are when two or more words combine to create a beneficial
        meaning upon which silence is not approriate.
      </important-note>
      <p>Let&#39;s break this up into 2 parts:</p>
      <ul>
        <li>2 or more words that combine to create a beneficial meaning</li>
        <li>silence is inappropriate</li>
      </ul>
      <p>
        For the first part, let&#39;s take the word &#39;tree&#39; - which has
        one meaning representing a tree entity, and let&#39;s take the word
        &#39;tall&#39; - which has one meaning representing height, and combine
        them in a descriptive phrase, &#39;tall tree&#39; to get a third
        meaning, where the height is attributed to the tree.&nbsp;
      </p>
      <p>
        That&#39;s all there is to the first bit. 2 words, 2 meanings, combine
        them in a phrase -&gt; get a third meaning.
      </p>
      <p>
        The second bit is what seperates a phrase from a sentence. Let&#39;s use
        our previous example. If I came up to you and said, &quot;The tall
        tree,&quot; what would you think? Would you understand completely, nod
        your head and feel like I gave you a piece of information that made
        sense? Or would you be left wanting more? Would you say, &quot;Um. What
        about it? Are you telling me the tree is tall? Or is there something
        else about the tree you want to say?&quot;&nbsp;
      </p>
      <p>
        Compare that instead to: &quot;The tall tree is beautiful.&quot; Does
        that give you a full benefit upon which silence is appropriate? Have you
        received information, a statement, which you can fully understand and
        respond to?&nbsp;
      </p>
      <p>
        That is the difference between a sentence and a phrase. They both take
        words and group them together to enhance the meaning, but only the
        sentence conveys complete information that leaves you satisfied.
      </p>
      <lesson-summary>
        <p>
          A phrase is a combination of two or more words which conveys a
          beneficial meaning upon which silence is not appropriate.
        </p>
        <p>
          A sentence is an utterance which conveys a beneficial meaning upon
          which silence is not appropriate.
        </p>
        <p>
          <strong>Sneak Peak</strong> - &nbsp;Why did we say &#39;utterance&#39;
          for the sentence instead of &#39;combination of two or more words&#39;
          like in phrases? This is because in Arabic a single word can be a
          sentence. That is why we say Arabic is a comprehensive language. What
          is written as one word in Arabic is translated into multiple words in
          English, resulting in a sentence.
        </p>
      </lesson-summary>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';

export default Vue.extend({
  name: 'IntroductionToPhrases',
  components: { BasePage },

  data() {
    return {
      message: '',
    };
  },
});
</script>

<style lang="scss" scoped></style>
