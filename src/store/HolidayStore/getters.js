export function calcSummary(state) {
  const { yearEnd } = state.app.settings || '';
  const { name } = state.app.settings || '';
  const { totalDaysHol } = state.app || 0;
  const { totalDaysRemaining } = state.app || 0;
  const { totalDaysUsed } = state.app || 0;
  const { totalDaysBooked } = state.app || 0;
  return {
    totalDaysHol,
    totalDaysRemaining,
    totalDaysUsed,
    totalDaysBooked,
    yearEnd,
    name,
  };
}

export function getHolidays(state) {
  // Get holidays array and sort by holStart
  const data = [...state.app.holidays];
  console.log(data);
  data.sort((a, b) => a[data.holStart] > b[data.holStart]);
  return data;
}

export function getHoliday(state) {
  return state.app.holiday;
}

export function getWorkDays(state) {
  const data = state.app.workDays;
  return data;
}

export function getSettings(state) {
  const data = state.app.settings;
  return data;
}
