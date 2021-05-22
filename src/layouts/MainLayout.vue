<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-secondary" behavior="mobile">
      <q-list>
        <q-item-label header class="text-grey-1"> My Stuff </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" class="text-grey-1" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import EssentialLink from '../components/EssentialLink.vue';

const linksList = [
  {
    title: 'Twitter',
    caption: 'twitter.com/bvoowo',
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/bvoowo',
  },
  {
    title: 'Github',
    caption: 'github.com/bvoo',
    icon: 'code',
    link: 'https://github.com/bvoo',
  },
  {
    title: 'Discord',
    caption: 'discord.gg/kyBjEY6',
    icon: 'chat',
    link: 'https://discord.gg/kyBjEY6',
  },
  {
    title: 'Patreon',
    caption: 'patreon.com/bvoo',
    icon: 'fab fa-patreon',
    link: 'https://www.patreon.com/bvoo',
  },
];

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
