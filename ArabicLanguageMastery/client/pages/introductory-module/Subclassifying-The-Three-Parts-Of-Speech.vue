<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <p>
        In the last lesson you learned about the three parts of speeach, the
        <span class="arabic">اِسْم</span>, the
        <span class="arabic">فِعْل</span>, and the
        <span class="arabic">حَرْف</span>. The purpose of this lesson is to
        further divide these three parts of speech. This lesson is quite
        relaxed, and other than where we draw your attention, don't worry too
        much about needing to learn eveything. We begin with the
        <span class="arabic">اِسْم</span>
      </p>

      <h2 class="text-h5"><span class="arabic">اِسْم</span></h2>

      <p>
        When it comes to words, we can say that they are in families, and what
        makes words be in the same family is that they are all built from the
        same source, 'the ancestor' in our analogy. For example, help, helper,
        helping, helped, helpingly, helpfully we would consider to be from the
        same family. We can consider the word 'help' to be the original source
        from which all the other words in the family are derived.
      </p>

      <p>
        Then there are some words that are the only member of their family. They
        don't derive from any other word nor does anything derive from it. For
        example dimethylbenzene. It is a very specific compound with a very
        specific meaning, which doesn't really allow it to birth new words based
        off of it.
      </p>

      <p>
        This rough English analogy is exactly how we can subdivide the
        <span class="arabic">اِسْم</span> into three categories:
      </p>

      <v-simple-table class="elevation-1 no-hover-highlight">
        <tbody>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0">جَامِد</span>
            </td>
            <td>
              These are your dimethylbenzenes. Words which are not derived, nor
              does anything derive from them eg.
              <span class="arabic">شَجَرَة</span> (tree),
              <span class="arabic">رَجُل</span> (man)
            </td>
          </tr>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0"
                >مَصْدَر</span
              >
            </td>
            <td>
              This is the source word from which others are derived. In English
              they are called the Infinitive/Gerund. They represent actions and
              get a 'to (blank)/(blank)ing' translation eg.
              <span class="arabic">سَمْعٌ</span> (to hear/hearing),
              <span class="arabic">شُرْبٌ</span> (to drink/drinking). Of the
              three types discussed, this one is the most important which you
              should remember.
            </td>
          </tr>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0"
                >مُشْتَق</span
              >
            </td>
            <td>
              Words that are derived from the
              <span class="arabic">مَصْدَر</span> eg.
              <span class="arabic">سَامِعٌ</span> (listener),
              <span class="arabic">مَسْمُوْعٌ</span> (heard/audible),
              <span class="arabic">شَارِبٌ</span> (drinker),
              <span class="arabic">شَرَابٌ</span> (drink/beverage)
            </td>
          </tr>
        </tbody>
      </v-simple-table>

      <h2 class="text-h5"><span class="arabic">فِعْل</span></h2>

      <p>
        The <span class="arabic">فِعْل</span> is quite simple in it's breakdown.
        All 3 are important to learn but you will see them so often there is no
        need to memorise them right now.
      </p>

      <v-simple-table class="elevation-1 no-hover-highlight">
        <tbody>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0">مَاضِي</span>
            </td>
            <td>
              Past tense verb: <span class="arabic">كَتَبَ</span> (he wrote)
            </td>
          </tr>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0"
                >مُضَارِع</span
              >
            </td>
            <td>
              Present/Future tense verb: <span class="arabic">يَكْتُبُ</span>
              (he is writing/he writes/he will write)
            </td>
          </tr>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0">أَمْر</span>
            </td>
            <td>Command verb: <span class="arabic">اُكْتُبْ</span> (write)</td>
          </tr>
        </tbody>
      </v-simple-table>

      <h2 class="text-h5"><span class="arabic">حَرْف</span></h2>

      <p>
        The <span class="arabic">حَرْف</span> just breaks into two types. You
        don't need to remember this.
      </p>

      <v-simple-table class="elevation-1 no-hover-highlight">
        <tbody>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0">عَامِل</span>
            </td>
            <td>Governing agent</td>
          </tr>
          <tr>
            <td>
              <span class="arabic align-self-center flex-shrink-0"
                >غَيْر عَامِل</span
              >
            </td>
            <td>Non-governing agent</td>
          </tr>
        </tbody>
      </v-simple-table>

      <p>
        We will discuss what it means to govern words in much more detail in
        future, but to summarise, when a Harf is a governing agent it influences
        the grammatical state of a word following it. A non-governing agent does
        not and the word it is associated with would look the same whether or
        not the Harf was present.
      </p>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SubclassifyingTheThreePartsOfSpeech',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
