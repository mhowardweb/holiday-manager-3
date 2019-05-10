import Vue from 'vue';
import Vuex from 'vuex';
import { date } from 'quasar';
import HolidayStore from './HolidayStore';

Vue.filter('formatDate', (value) => {
  if (value) {
    const formatted = date.formatDate(value, 'DD/MM/YYYY');
    return formatted;
  }
  return null;
});

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      HolidayStore,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
