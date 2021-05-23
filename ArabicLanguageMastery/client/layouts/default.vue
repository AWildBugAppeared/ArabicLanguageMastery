<template>
  <v-app dark>
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
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
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

import { mdiEmailOutline, mdiLeadPencil, mdiMenu } from '@mdi/js';

export default Vue.extend({
  data() {
    return {
      clipped: false,
      drawer: true,
      menuIcon: mdiMenu,
      items: [
        {
          icon: mdiLeadPencil,
          title: 'Write Arabic',
          to: '/english-to-arabic',
        },
        {
          icon: mdiEmailOutline,
          title: 'Contact Us',
          to: '/contact-us',
        },
      ],
      miniVariant: false,
      title: 'Phonetic English to Arabic',
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
