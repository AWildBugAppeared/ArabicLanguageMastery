<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <p>
        Sarf (Morphology) is the Arabic science which assigns meanings to words
        through patterns and endings. We will demonstrate this with an example,
        but it is important to keep in mind that the concepts here are
        <strong><em>not</em></strong
        >intended to be remembered. This lesson is just to give you an idea of
        what and how Sarf is used.
      </p>
      <div class="text-center">((arabic-l اِسْتَنْصَرُوْا))</div>
      <p>
        The Arabic word ((اِسْتَنْصَرُوْا)) is one word in Arabic and is best
        translated as, "They sought help". Notice how it required 3 English
        words to translate the one word from Arabic. This will often be the case
        as Arabic words are structured to convey additional meanings via vowels,
        patterns and endings.
      </p>
      <p data-darkreader-inline-outline="">
        From this translation we are in fact understand a total of 7 unique
        meanings, all of which serve to add an additional layer of
        understanding. Before we jump into these, it is useful to know that
        Arabic words are based on 3 (sometimes 4) root letters, and from these
        root letters we can apply certain conventions to enhance the meaning.
      </p>
      <p>
        Take the word "help" in English, which we can consider to be root
        letters. We can then apply the pattern of adding an "-ing" suffix to
        convey the additional meaning of present tense, or "-ed" for past, or
        "-s" to imply a continuous action.
      </p>
      <p>
        We can change the root letters to "cook" and use the same rules and get:
        cooking, cooked and cooks. The meaning from the suffixes don't change,
        but the root meaning changes since we changed the root letters. The
        meaning of these root letters are what we would use a dictionary for,
        and the additional meanings from the patterns and endings we would not
        find in a dictionary as they are standards of the language which we
        would be expected to already know.
      </p>
      <p>
        Now we can analyse all 7 of the meanings we understand with the word
        ((اِسْتَنْصَرُوْا)), "they sought help".
      </p>
      <note>
        Do not attempt to remember the mechanisms discussed below. They covered
        in more detail in future lessons. This lesson is just to give give you
        an idea of what Sarf is and how it is used.
      </note>
      <p>
        <br />
      </p>
      <h2>
        <strong
          ><span
            data-darkreader-inline-color=""
            style="color: rgb(85, 57, 130); --darkreader-inline-color: #9c81c8"
            >1. Help</span
          ></strong
        >
      </h2>
      <p>
        The dictionary meaning of help comes from the 3 root letters ((ن ص ر))
      </p>
      <p class="text-center">
        <img
          src="~/assets/introduction-to-sarf/Istansaroo-1-Help.png"
          style="width: 300px"
          class="fr-fic fr-dib"
        />
      </p>
      <h2>
        <strong
          ><span
            data-darkreader-inline-color=""
            style="color: rgb(41, 105, 176); --darkreader-inline-color: #6ca9dd"
            >2. The notion of seeking</span
          ></strong
        >
      </h2>
      <p>
        The additional meaning of "seeking" the action (help), comes from the
        addition of the ((ست)) suffix.
      </p>
      <p class="text-center">
        <img
          src="~/assets/introduction-to-sarf/Istansaroo-2-Seeking.png"
          style="width: 300px"
          class="fr-fic fr-dib"
        />
      </p>
      <h2>
        <strong
          ><span
            data-darkreader-inline-color=""
            style="color: rgb(235, 107, 86); --darkreader-inline-color: #ec6f5b"
            >3. The Past Tense</span
          ></strong
        >
      </h2>
      <p>
        Arabic verbs that are in the present/future tense must start with 1 of 4
        letters: ((أ ت ي ن)) and can be remembered using the word ((أَتَيْنَ)).
        Since the verb does not start with one of these letters, we know it is
        in the past tense (they sought help vs they are seeking help).
      </p>
      <p class="text-center">
        <img
          src="~/assets/introduction-to-sarf/Istansaroo-3-Past-Tense.png"
          style="width: 300px"
          class="fr-fic fr-dib"
        />
      </p>
      <note>
        The letter at the beginning is
        <strong
          ><em><u>not</u></em></strong
        >
        a proper vowelled Hamza but is instead a special type of Hamza called
        Hamzatul Wasl - The Connecting/Enabling Hamza. It is there purely to
        solve a pronunciation issue that will be discussed more when Sarf is
        actually taught. The actual hamza usually has a little hamza on top
        whereas this connecting hamza is usually written like an Alif with a
        vowel to differentiate.
      </note>
      <h2>
        <strong
          ><span
            data-darkreader-inline-color=""
            style="color: rgb(65, 168, 95); --darkreader-inline-color: #65c380"
            >4. The Active Voice</span
          ></strong
        >
      </h2>
      <p>
        The active voice (they sought help) vs the passive voice (help was
        sought from them) comes from a vowel pattern configuration.
      </p>
      <p class="text-center">
        <img
          src="~/assets/introduction-to-sarf/Istansaroo-4-Active-Voice.png"
          style="width: 300px"
          class="fr-fic fr-dib"
        />
      </p>
      <h2>
        <strong
          ><span
            data-darkreader-inline-color=""
            style="color: rgb(251, 160, 38); --darkreader-inline-color: #fba735"
            >5. 6. 7. Gender, Plurality, and Person</span
          ></strong
        >
      </h2>
      <p>
        The fact that a group of men (or men and women) are being spoken about
        (third person) comes from the Waw suffix. All 3 of these things are
        determined by the way a verb ends.
      </p>
      <p class="text-center">
        <img
          src="~/assets/introduction-to-sarf/Istansaroo-5-6-7-Gender-Plurality-Person.png"
          style="width: 300px"
          class="fr-fic fr-dib"
        />
      </p>
      <h2>Final Takeaway</h2>
      <p>
        The purpose of this lesson was to introduce the science of Sarf. It was
        to demonstrate that out of the 7 meanings we understand from the word
        ((اِسْتَنْصَرُوْا)), only one comes from the dictionary. The remaining 6
        come from Sarf, where patterns, vowels, and endings convey the extra
        meanings.
      </p>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';

export default Vue.extend({
  name: 'IntroductionToSarf',
  components: { BasePage },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
