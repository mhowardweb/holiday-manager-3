import { LocalStorage } from 'quasar';
import Vue from 'vue';

export function loadData(state) {
  if (LocalStorage.has('app')) {
    const data = LocalStorage.getItem('app');
    Vue.set(state, 'app', data);
    this.$router.replace('home');
  } else {
    this.$router.replace('start');
  }
}

export function updateSummary(state, data) {
  Vue.set(state.app, 'totalDaysUsed', data.tdu);
  Vue.set(state.app, 'totalDaysRemaining', data.tdr);
  Vue.set(state.app, 'totalDaysHol', data.tdh);
  LocalStorage.set('app', state);
}

export function deleteHoliday(state, holToDelete) {
  const oldHols = [...state.app.holidays];
  const holidays = oldHols.filter(hols => hols.id !== holToDelete.id);
  Vue.set(state.app, 'holidays', holidays);
  LocalStorage.set('app', state);
}

export function selectHoliday(state, id) {
  Vue.set(state.app, 'holiday', id);
  LocalStorage.set('app', state);
}

export function addHoliday(state, holiday) {
  const addHol = [...state.app.holidays];
  addHol.push(holiday);
  Vue.set(state.app, 'holidays', addHol);
  LocalStorage.set('app', state);
  this.$router.push('holidays');
}

export function updateHoliday(state, holidays) {
  Vue.set(state.app, 'holidays', holidays);
  LocalStorage.set('app', state);
}

export function saveworkDays(state, workDays) {
  Vue.set(state.app, 'workDays', workDays);
  LocalStorage.set('app', state);
}

export function updateCompany(state, data) {
  Vue.set(state.app.settings, 'company', data);
  LocalStorage.set('app', state);
}

export function updateName(state, data) {
  Vue.set(state.app.settings, 'name', data);
  LocalStorage.set('app', state);
}

export function updateDaysHol(state, data) {
  Vue.set(state.app.settings, 'daysHol', data);
  LocalStorage.set('app', state);
}

export function updateBankHols(state, data) {
  Vue.set(state.app.settings, 'bankHols', data);
  LocalStorage.set('app', state);
}

export function updateYearStart(state, data) {
  Vue.set(state.app.settings, 'yearStart', data);
  LocalStorage.set('app', state);
}

export function updateYearEnd(state, data) {
  Vue.set(state.app.settings, 'yearEnd', data);
  LocalStorage.set('app', state);
}

export function updateMon(state, data) {
  Vue.set(state.app.settings, 'mon', data);
  LocalStorage.set('app', state);
}

export function updateTue(state, data) {
  Vue.set(state.app.settings, 'tue', data);
  LocalStorage.set('app', state);
}

export function updateWed(state, data) {
  Vue.set(state.app.settings, 'wed', data);
  LocalStorage.set('app', state);
}

export function updateThu(state, data) {
  Vue.set(state.app.settings, 'thu', data);
  LocalStorage.set('app', state);
}

export function updateFri(state, data) {
  Vue.set(state.app.settings, 'fri', data);
  LocalStorage.set('app', state);
}

export function updateSat(state, data) {
  Vue.set(state.app.settings, 'sat', data);
  LocalStorage.set('app', state);
}

export function updateSun(state, data) {
  Vue.set(state.app.settings, 'sun', data);
  LocalStorage.set('app', state);
}
