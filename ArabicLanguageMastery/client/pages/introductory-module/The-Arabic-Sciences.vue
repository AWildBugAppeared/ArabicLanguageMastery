<template>
  <base-page>
    <template #heading>
      {{ $convertPascalToNormalCase($options.name) }}
    </template>
    <template #default>
      <p>There are 3 Arabic Sciences:</p>
      <div>
        <ul>
          <li>Sarf ((صَرْفٌ)) - Morphology</li>
          <li>Nahw ((نَحْوٌ)) - Grammar</li>
          <li>Balaagha ((بَلَاغَةٌ)) - Rhetoric/Eloquence</li>
        </ul>
      </div>
      <p>
        Knowledge in all of these sciences are required in order to communicate
        effectively in Arabic. The first two, Sarf and Nahw, are fundamental and
        understanding Arabic is impossible without them. They are taught at the
        beginner stage right through to the advanced stage.
      </p>
      <p>
        Balaagha on the other hand is considered an advanced topic, and it's
        teaching is delayed until the student is very deep in their studies.
      </p>
      <p>
        Below we introduce these Arabic sciences by looking at English examples.
        Arabic examples will come in subsequent lessons.
      </p>
      <h2>Sarf</h2>
      <p>
        Sarf (Morphology) is the most fundamental of the 3 sciences. It's scope
        is limited to the word, how it is constructed, and how it can be
        manipulated through patterns and endings in order to change or enhance
        the meaning.
      </p>
      <p>
        For example, let's take the word 'help'. In English 'Sarf' or
        Morphology, we know that if we add the suffix 'ed' to the word 'help'
        (helped), then we add an additional meaning of having occured in the
        past. It takes the original meaning of aid, and adds the additional
        connotation that this action occured in the past.
      </p>
      <p>
        We can instead add the suffix 'er' instead. And this time we add the
        meaning of an entity, a thing, which is doing the action (helper).
      </p>
      <p>
        This is what Sarf in Arabic does. It takes the base form of a word and
        gives us rules, patterns, and endings which we can use to change or
        enhance the base meaning.
      </p>
      <h2>Nahw</h2>
      <p>
        Thanks to the dictionary, you get the base form of words and their
        meaning (help, love, hate, drink).
      </p>
      <p>
        Thanks to Sarf, you can take those base forms and enhance the base
        meanings through patterns and endings (helper, loved, hated, drinks).
      </p>
      <p>
        Nahw takes it a step further. Where Sarf changes the word itself to add
        meanings, Nahw takes a group of words and defines rules which allow the
        words to combine into phrases and sentences in order to achieve the
        same.
      </p>
      <p>
        Let's take the word 'book', and the person 'David'. On their own they
        represent two separate things in our minds. English grammar tells us, by
        inserting the word 'of', or through the use of an apostrophee and 's',
        we get:&nbsp;
      </p>
      <ul>
        <li>book of David</li>
        <li>David's book</li>
      </ul>
      <p>
        Both of these are English grammatical rules that combine the two words,
        book, and David, which have a meaning each (for a total of 2 meanings),
        and assigns the third meaning of ownership. We now understand that these
        two entities are linked through ownership. This was only possible
        through the grammar rule which allows us to construct this phrase.
      </p>
      <p>
        We can also use grammar to construct a full sentence. 'This book is
        old', is a full sentence. It takes a subject, 'This book', and conveys
        some information about it, namely that it is 'old' (the fancy name for
        the information is Predicate). English grammar states that for this to
        be a sentence, we need to take the subject 'This book', and the
        predicate 'old', and separate the two with the word 'is'. This book
        <strong>is</strong> old.
      </p>
      <h2>Balaagha</h2>
      <p>
        Finally we come to the last science. We now have the base meaning from
        the dictionary, we can manipulate the word through patterns and endings
        to enhance the meaning, we can combine words through grammatical rules
        to enhance the meaning further and create sentences.
      </p>
      <p>
        But how do we determine which way of saying something is the most
        appropriate for the situation we are in? What will be the most
        persuasive, the most eloquent? This is the purpose of Balaagha
        (Rhetoric).
      </p>
      <p>For a simple example, take the following two sentences:</p>
      <ul>
        <li>Zaid hit Amr</li>
        <li>Amr was hit by Zaid</li>
      </ul>
      <p>
        Both sentences here are conveying the same 3 fundamental pieces of
        information:
      </p>
      <ol>
        <li>Zaid carried out an action</li>
        <li>The action was that of hitting</li>
        <li>Amr was the one who recieved the action</li>
      </ol>
      <p>
        But if they are conveying the same information is it just a matter of
        preference which to use? And the answer is no. For example, let's say
        the first sentence, 'Zaid hit Amr' is the standard, normal way to say
        this. But what if you are speaking to Amr's mother? A mother's concern
        for her child can mean that the information of Amr being hit is far more
        important and relevent than the information about who hit him. Maybe he
        was missing? So you bring the information about Amr forward and mention
        that first.
      </p>
      <p>
        This is the role of Balaagha. It takes perfectly valid speech, and tells
        you what techniques and methods of speaking will be the most effective,
        the most persuasive and impactful for the situation you are in.
      </p>
      <v-alert border="left" color="blue darken-1" class="ma-2" dark>
        <h2 class="mt-n1 pb-2">Summary</h2>
        The 3 Arabic Sciences are:
        <ul>
          <li>
            Sarf ((صَرْفٌ)) - the science of using patterns and endings to words
            to enhance the meaning
          </li>
          <li>
            Nahw ((نَحْوٌ)) - the science of grouping words together in order to
            enhance the meaning
          </li>
          <li>
            Balaagha ((بَلَاغَةٌ)) - the science which aims to create the most
            eloquent speech that will be the most impactful in a given situation
          </li>
        </ul>
      </v-alert>
    </template>
  </base-page>
</template>

<script lang="ts">
import Vue from 'vue';
import BasePage from '~/components/Base-Page.vue';

export default Vue.extend({
  name: 'TheArabicSciences',
  components: { BasePage },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
