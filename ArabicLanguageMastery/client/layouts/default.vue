<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      temporary
      :right="isMobile"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="text-wrap" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-col :order="isMobile ? 'first' : 'last'">
        <v-toolbar-title v-text="title" />
      </v-col>
      <v-spacer v-if="isMobile"></v-spacer>
      <v-col xs="2" sm="1" :order="isMobile ? 'last' : 'first'">
        <v-app-bar-nav-icon class="text-right" @click.stop="drawer = !drawer"
          ><v-icon>{{ menuIcon }}</v-icon></v-app-bar-nav-icon
        >
      </v-col>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import { mdiMenu } from '@mdi/js';
import { Routes } from '~/constants/routes';

export default Vue.extend({
  data() {
    return {
      clipped: false,
      drawer: true,
      menuIcon: mdiMenu,
      items: [
        {
          title: 'The Three Parts of Speech',
          to: Routes.introductoryModule.theThreePartsOfSpeech,
        },
        {
          title: 'The Arabic Sciences',
          to: Routes.introductoryModule.theArabicSciences,
        },
        {
          title: 'Introduction to Sarf',
          to: Routes.introductoryModule.introductionToSarf,
        },
        {
          title: 'Introduction to Phrases',
          to: Routes.introductoryModule.introductionToPhrases,
        },
        {
          title: 'The Maadhi Verb (Past Tense)',
          to: Routes.introductoryModule.theMaadhiVerb
        },
        {
          title: 'Introduction to Nahw Part 1 - The Two Types of Sentences',
          to: Routes.introductoryModule.introductionToNahwPart1,
        },
        {
          title: 'The Descriptive Phrase - Mawsoof Sifah',
          to: Routes.introductoryModule.theDescriptivePhrase,
        },
        {
          title: 'The Possessive Phrase - Mudaaf Mudaaf Ilayhi',
          to: Routes.introductoryModule.thePossessivePhrase,
        },
        {
          title: 'Write Arabic',
          to: Routes.englishToArabic,
        },
        {
          title: 'Contact Us',
          to: Routes.contactUs,
        },
      ],
      miniVariant: false,
      title: 'Master Arabic',
    };
  },

  computed: {
    isMobile(): boolean {
      return this.$vuetify.breakpoint.xs;
    },
  },

  created() {
    this.drawer = !this.$vuetify.breakpoint.xs;
  },
});
</script>
