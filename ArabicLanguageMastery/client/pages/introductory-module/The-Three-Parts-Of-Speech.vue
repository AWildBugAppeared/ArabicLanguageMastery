<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <p>
        Language is made of words, and words can be grouped together into
        categories that share characteristics. In this lesson we will take a
        look at the most popular English parts of speech, and see how the map to
        the Arabic parts of speech.
      </p>

      <h2>Noun</h2>
      <p>First up are nouns. A noun is a word that refers to</p>
      <ul>
        <li>an entity - a book, a person, an animal</li>
        <li>an idea - justice, freedom</li>
        <li>a quality - hardness, softness</li>
        <li>an action - sleeping, eating, driving</li>
      </ul>

      <h2>Pronoun</h2>

      <p>
        Pronouns are words that are used to refer to a noun that has already
        been mentioned, that relieves you from having to repeat the noun again.
        If we say, "David woke up today at 5am. David felt ill so David didn't
        go to school." That would sound rather odd. And what makes it sound odd
        is saying David over and over again. Instead, once we have made the
        initial reference to David, we would then use the pronoun 'he' in future
        references to David. "David woke up today at 5am. He felt ill so he
        didn't go to school." That sounds much better and more natural. Some
        other examples of pronouns are: she, her, him, it, they.
      </p>

      <h2>Adjective</h2>

      <p>
        Adjectives are words that describe nouns. Tall, short, skinny, scrawny
        etc.
      </p>

      <h2>Adverb</h2>
      <p>
        Adverbs are like adjectives, except where adjectives describe a noun,
        adverbs describe anything other than a noun. For example, 'Zaid is very
        tall.' Tall is an adjective used to describe Zaid here. The word 'very'
        is describing the world 'tall'. Zaid isn't a little tall, or regular
        tall, he is very tall. So very here is an adverb as it is describe
        something that is other than a noun, in this case an adjective.
      </p>

      <p>
        Here is another example, 'Zaid is speaking loudly.' Speaking here is a
        present tense (present continuous in fact) verb, and the loudly is
        describing the manner in which this verb is occurring. As the word being
        described is not a noun (it is a verb), the word 'loudly' is an adverb.
      </p>

      <h2>Verb</h2>

      <p>
        We will go into more detail as to what verbs are later, but briefly, a
        verb is an action that is linked with time. He ate = The action of
        eating + occuring in the past
      </p>

      <h2>Article</h2>

      <p>
        The words 'the', 'an', and 'a' are articles which are used to show
        whether a noun is specific (also referred to as definite or proper) or
        general. The apple vs an apple. The boy vs a boy.
      </p>

      <h2>Conjunction</h2>
      <p>
        Words which are used to connect two words, phrases, or sentences
        together eg. I like apples and oranges. I went to the cafe and I ate
        lunch
      </p>

      <h2>Preposition</h2>
      <p>
        These are words which are used before nouns and pronouns, in order to
        indicate upon time, place, direction, location. For example, I sat on
        the chair. The word 'on' is a preposition and it indicates on the
        location of my sitting in relation to the chair. If you say, "I
        travelled from England to France," the word from indicates on origin of
        the upcoming word, 'England', and the word 'to' indicates on destination
        of the upcoming word 'France'.
      </p>

      <h2>How do they all fit with the Arabic parts of speech?</h2>

      <p>
        We have covered 8 of the most popular parts of speech of English. Below,
        we are going to give you the 3 parts of speech of Arabic and their
        precise definitions, and then see where the English parts of speech fit
      </p>

      <important-note>
        <h3 class="text-center">The 3 Parts of Speech</h3>
        <p>
          <span class="arabic">اِسْم</span> - a word which indicates on a
          meaning in and of itself which is unattached to time
        </p>
        <p>
          <span class="arabic">فِعْل</span> - a word which indicates on a
          meaning in and of itself which is attached to time
        </p>
        <p>
          <span class="arabic">حَرْف</span> - a word which indicates on a
          meaning to an upcoming word
        </p>
      </important-note>

      <p>
        Let's tackle the first part of speech, the
        <span class="arabic">اِسْم</span>. What does it mean for a word to have
        a meaning in and of itself? Let's compare two words, 'tree' and 'from'.
        When you think about the word 'tree', while you might struggle to give a
        dictionary level definition, your mind automatically knows exactly what
        is meant by a tree. You picture a big brown vertical wooden structure
        with branches, leaves and a big bushy green top. And that image you have
        in your mind is associated to the tree itself, not to something else.
      </p>

      <p>
        Compare that with the word 'from'. If you really think about the word,
        you might define it as: 'a word which indicates on origin.' And that is
        a pretty fine definition. But that meaning of origin, is it the word
        'from' itself that is associated with that origin meaning, or is it
        another word? What if I said, 'from England'? Which of those two words
        is the origin meaning actually being attributed to? The answer of course
        is England. 'I am from England', means my place of origin is England,
        not 'from'.
      </p>

      <p>
        This is what we mean when we say a word indicates on a meaning in and of
        itself. The word 'tree' indicates on a meaning - that big bushy green
        thing on top of a brown thing - that <em>is</em> the tree itself. The
        word 'from' also indicates on a meaning - that of origin - but that
        meaning isn't associated to the word itself but instead to the
        <strong>upcoming</strong> word.
      </p>

      <p>
        Let's take two more examples, the words, 'freedom', and 'the'. We chose
        freedom because it is not as easier to picture as a tree. But it still
        has a precise definition in our mind, even if it isn't something we can
        paint a pretty picture of. We can think a bit, and define freedom as the
        ability to say, think and do as one wishes. That definition
        <em>is</em> what freedom represents.
      </p>

      <p>
        What about the word 'the'? We can say the word 'the' represents
        specificity, definiteness. But are those meanings associated to the word
        'the' itself? Or to another word? If I said, 'the apple', where is the
        specificity being implied? Is it the word 'the' that is specific, or the
        word 'apple'? Clearly we are referring to the apple as being a specific
        apple and not a generic one.
      </p>

      <eliciting-question
        >From the precise definitions of the 3 parts of speech, and having
        explained what it means for a word to have meaning in and of itself, can
        you map the English parts of speech to the Arabic parts of speech?
        <template #answer>
          <span class="arabic">اِسْم</span> - Nouns, Pronouns, Adjectives,
          Adverbs <span class="arabic">فِعْل</span> - Verbs
          <span class="arabic">حَرْف</span> - Articles, Conjunctions,
          Prepositions
        </template>
      </eliciting-question>

      <p>
        The second part of the definition is quite straightforward. If the
        meaning has no time connotation to it, then it is an
        <span class="arabic">اِسْم</span>, otherwise it is a
        <span class="arabic">فِعْل</span>. We can then see that the
        <span class="arabic">اِسْم</span> consists of Nouns, Pronouns,
        Adjectives, and Adverbs. All of these parts of speech have meanings in
        and of themselves, and none are connected to time.
      </p>

      <note>
        <p>
          Recall from our Noun section, that actions like 'speaking' are nouns.
          But wait, isn't speaking a verb? The answer is no. Care should be
          taken to distinguish between 'speaking', which is an action devoid of
          time, and 'is speaking', which is a present tense verb. The 'is' makes
          all the difference and takes the speaking action and makes it occur in
          the present, linking it to time and changing it to a verb.
        </p>

        <p>
          Here is another angle. If we say, 'Speaking aloud in a library is bad
          manners.' Is 'speaking' here a verb? Are we referring to the action
          itself being bad in the library, or are we saying the action at a
          particular time, yesterday, today, or tomorrow, is bad in the library?
          We of course mean the action itself in the library is bad manners
          irrespective of the time it is happening.
        </p>
      </note>

      <p>
        <span class="arabic">حَرْف</span> only contains the verb, as it is the
        only one with an intrinsic meaning that is connected to time - past,
        present, future.
      </p>

      <p>
        <span class="arabic">حَرْف</span> contains the rest. Articles,
        prepositions, and conjunctions come here. All of these indicate on a
        meaning on an upcoming word.
      </p>

      <lesson-summary>
        <ul>
          <li>
            <span class="arabic">اِسْم</span> - a word which indicates on a
            meaning in and of itself which is unattached to time. (Nouns, Pronouns, Adjectives, Adverbs)
          </li>
          <li>
            <span class="arabic">فِعْل</span> - a word which indicates on a
            meaning in and of itself which is attached to time. (Verbs)
          </li>
          <li>
            <span class="arabic">حَرْف</span> - a word which indicates on a
            meaning to an upcoming word. (Articles, Prepositions, Conjunctions)
          </li>
        </ul>
      </lesson-summary>
      <span class="arabic"></span>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheThreePartsOfSpeech',

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
