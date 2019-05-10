<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        color="primary"
        inverted
      >
        <q-toolbar-title>
          Holiday Manager 3
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs
        v-model="tab"
        class="shadow-up-2"
        animated
        align="justify"
      >
        <q-route-tab
          to="home"
          exact
          name="home"
          icon="home"
          label="Home"
        />
        <q-route-tab
          to="holidays"
          exact
          name="holidays"
          icon="card_travel"
          label="Holidays"
        />
        <q-route-tab
          to="add"
          name="add"
          icon="add_circle"
          label="Add Holiday"
        />
        <q-route-tab
          to="settings"
          name="settings"
          icon="settings"
          label="Settings"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyLayout',
  data() {
    return {
      tab: null,
    };
  },
  computed: {
    ...mapGetters({
      onBoarding: 'HolidayStore/getOnboarding',
    }),
  },
  created() {
    if (this.onBoarding === false) {
      this.$router.replace('start');
    } else {
      this.$router.replace('home');
    }
  },
};
</script>

<style>
</style>
