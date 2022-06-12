<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }} - Mawsoof Sifah
    </template>
    <template #default>
      <h3 class="text-center">
        Mudaaf Mudaaf Ilayhi - ((مُضَافٌ مُضَافٌ إْلَيْهِ))
      </h3>
      <p>
        The possessive phrase is made up of two parts, the possessed
        ((مُضَافٌ)), and the possessor ((مُضَافٌ إْلَيْهِ)). In English, there
        are two ways of making this phrase. We can either say, &#39;Zaid&#39;s
        book,&#39; or we can say, &#39;the book of Zaid.&#39; Both mean the
        same. In Arabic, the structure is that of the latter, where the
        possessed (book) comes first, and then the possessor (Zaid). So we would
        say:
      </p>
      <p style="text-align: center">((كِتَابُ زَيْدٍ))</p>
      <p>
        Now, from our example above we can notice 2 rules that go into
        constructing the Mudaaf - Madaaf Ilayh phrase:
      </p>
      <ul>
        <li>The Mudaaf is absent of both al ((ال)) and tanween.&nbsp;</li>
        <li>The Mudaaf Ilayhi is the state of Jarr.</li>
      </ul>
      <p>
        Delving a little deeper, the fact that the Mudaaf is absent of both al
        and tanween is interesting. Remember that all nouns are either
        indefinite or indefinite. We say either &#39;a cat,&#39; or &#39;the
        cat.&#39; We say either &#39;a house&#39; or &#39;the house&#39;. In
        Arabic, the tanween is the equivalent of saying &#39;a&#39; something,
        and the al is the equivalent of saying &#39;the&#39; something. You
        either have one or the other. But in the case where a noun is coming as
        a Mudaaf, it has neither.
      </p>
      <p>
        This characteristic of the Mudaaf is unique. The lack of tanween and al
        is a tell tale sign that you are dealing with a Mudaaf Mudaaf Ilayh
        phrase.
      </p>
      <p>
        Finally, the Mudaaf Ilayh will always be in the state of Jarr. It is one
        of two causes for an Ism to be in the state of Jarr. Notice the state of
        the Mudaaf is not mentioned, and that is because it&#39;s state is
        determined by how it is being used. It could be in any state, Raf&#39;,
        Nasb, or Jarr.
      </p>
      <lesson-summary>
        []
        <ul>
          <li>
            The Mudaaf (possessed) comes first, followed by the Mudaaf Ilayhi
            (possessor)
          </li>
          <li>The Mudaaf will not have Al or tanween</li>
          <li>The Mudaaf Ilayhi will be in the state of Jarr.</li>
          <li>Zaid&#39;s shirt -&gt; ((قَمِيْصُ زَيْدٍ))</li>
        </ul>
      </lesson-summary>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';

export default Vue.extend({
  name: 'ThePossessivePhrase',
  components: { BasePage },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
