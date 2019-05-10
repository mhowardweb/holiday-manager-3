import { uid } from 'quasar';

export function loadDataAction({ commit }) {
  commit('loadData');
}

export function updateSummaryAction({ state, commit }) {
  const { daysHol, bankHols } = state.app.settings;
  let totals = 0;
  state.app.holidays.forEach((holiday) => {
    totals += holiday.daysBooked;
  });
  const totalDaysHol = parseInt(daysHol, 10) + parseInt(bankHols, 10);
  const totalDaysUsed = totals;
  const totalDaysRemaining = totalDaysHol - totalDaysUsed;
  commit('updateSummary', { tdh: totalDaysHol, tdr: totalDaysRemaining, tdu: totalDaysUsed });
}

export function updateHolidayAction({ state, commit }, data) {
  const myHolidays = [...state.app.holidays];
  const index = myHolidays.findIndex(obj => obj.id === data.id);
  myHolidays[index] = data;
  commit('updateHoliday', myHolidays);
  this.$router.replace('holidays');
}

export function deleteHolidayAction({ commit }, holiday) {
  commit('deleteHoliday', holiday);
}

export function selectHolidayAction({ commit }, id) {
  commit('selectHoliday', id);
  this.$router.replace('edit');
}

export function saveHolidayAction({ commit }, holiday) {
  const setId = uid();
  holiday = { ...holiday, id: setId };
  commit('addHoliday', holiday);
  this.$router.replace('holidays');
}

export function saveworkDaysAction({ state, commit }) {
  const workDays = [];
  const {
    mon, tue, wed, thu, fri, sat, sun,
  } = state.app.settings;
  if (sun) {
    workDays.push(0);
  }

  if (mon) {
    workDays.push(1);
  }

  if (tue) {
    workDays.push(2);
  }

  if (wed) {
    workDays.push(3);
  }

  if (thu) {
    workDays.push(4);
  }

  if (fri) {
    workDays.push(5);
  }

  if (sat) {
    workDays.push(6);
  }

  commit('saveworkDays', workDays);
}
