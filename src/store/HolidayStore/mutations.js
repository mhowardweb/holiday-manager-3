import Vue from 'vue';

export function updateSummary(state, data) {
  Vue.set(state, 'totalDaysUsed', data.tdu);
  Vue.set(state, 'totalDaysRemaining', data.tdr);
  Vue.set(state, 'totalDaysHol', data.tdh);
}

export function deleteHoliday(state, holToDelete) {
  const oldHols = [...state.holidays];
  const holidays = oldHols.filter(hols => hols.id !== holToDelete.id);
  Vue.set(state, 'holidays', holidays);
}

export function selectHoliday(state, id) {
  Vue.set(state, 'holiday', id);
}

export function addHoliday(state, holiday) {
  const addHol = [...state.holidays];
  addHol.push(holiday);
  Vue.set(state, 'holidays', addHol);
  this.$router.push('holidays');
}

export function updateHoliday(state, holidays) {
  Vue.set(state, 'holidays', holidays);
}

export function onboarding(state, data) {
  Vue.set(state, 'onboarding', data);
}

export function saveworkDays(state, workDays) {
  Vue.set(state, 'workDays', workDays);
}

export function updateCompany(state, data) {
  Vue.set(state.settings, 'company', data);
}

export function updateName(state, data) {
  Vue.set(state.settings, 'name', data);
}

export function updateDaysHol(state, data) {
  Vue.set(state.settings, 'daysHol', data);
}

export function updateBankHols(state, data) {
  Vue.set(state.settings, 'bankHols', data);
}

export function updateYearStart(state, data) {
  Vue.set(state.settings, 'yearStart', data);
}

export function updateYearEnd(state, data) {
  Vue.set(state.settings, 'yearEnd', data);
}

export function updateMon(state, data) {
  Vue.set(state.settings, 'mon', data);
}

export function updateTue(state, data) {
  Vue.set(state.settings, 'tue', data);
}

export function updateWed(state, data) {
  Vue.set(state.settings, 'wed', data);
}

export function updateThu(state, data) {
  Vue.set(state.settings, 'thu', data);
}

export function updateFri(state, data) {
  Vue.set(state.settings, 'fri', data);
}

export function updateSat(state, data) {
  Vue.set(state.settings, 'sat', data);
}

export function updateSun(state, data) {
  Vue.set(state.settings, 'sun', data);
}
