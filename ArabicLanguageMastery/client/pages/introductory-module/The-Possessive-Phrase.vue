<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <div class="text-center">
        <h2>Mudaaf Mudaaf Ilayhi</h2>
        <div><span class="arabic">مُضَافٌ مُضَافٌ إْلَيْهِ</span></div>
      </div>
      <p>
        The possessive phrase is made up of two parts, the possessed
        <span class="arabic">مُضَافٌ</span>, and the possessor
        <span class="arabic">مُضَافٌ إْلَيْهِ</span>. In English, there are two
        ways of making this phrase. We can either say, 'Zaid's book,' or we can
        say, 'the book of Zaid.' Both mean the same. In Arabic, the structure is
        that of the latter, where the possessed (book) comes first, and then the
        possessor (Zaid). So we would say:
      </p>
      <p class="text-center"><span class="arabic">كِتَابُ زَيْدٍ</span></p>
      <p>
        Now, from our example above we can notice 2 rules that go into
        constructing the Mudaaf - Madaaf Ilayh phrase:
      </p>
      <ul>
        <li>
          The Mudaaf is absent of both al <span class="arabic">ال</span> and
          tanween.
        </li>
        <li>The Mudaaf Ilayhi is the state of Jarr.</li>
      </ul>
      <p>
        Delving a little deeper, the fact that the Mudaaf is absent of both al
        and tanween is interesting. Remember that all nouns are either
        indefinite or indefinite. We say either 'a cat,' or 'the cat.' We say
        either 'a house' or 'the house'. In Arabic, the tanween is the
        equivalent of saying 'a' something, and the al is the equivalent of
        saying 'the' something. You either have one or the other. But in the
        case where a noun is coming as a Mudaaf, it has neither.
      </p>
      <p>
        This characteristic of the Mudaaf is unique. The lack of tanween and al
        is a tell tale sign that you are dealing with a Mudaaf Mudaaf Ilayh
        phrase.
      </p>
      <p>
        Finally, the Mudaaf Ilayh will always be in the state of Jarr. It is one
        of two causes for an Ism to be in the state of Jarr. Notice the state of
        the Mudaaf is not mentioned, and that is because it's state is
        determined by how it is being used. It could be in any state, Raf',
        Nasb, or Jarr.
      </p>
      <lesson-summary>
        <ul>
          <li>
            The Mudaaf (possessed) comes first, followed by the Mudaaf Ilayhi
            (possessor)
          </li>
          <li>The Mudaaf will not have Al or tanween</li>
          <li>The Mudaaf Ilayhi will be in the state of Jarr.</li>
          <li>Zaid's shirt -> <span class="arabic">قَمِيْصُ زَيْدٍ</span></li>
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
