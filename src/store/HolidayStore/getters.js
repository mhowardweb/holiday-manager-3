export function calcSummary(state) {
  const { yearEnd } = state.settings || '';
  const { name } = state.settings || '';
  const { totalDaysHol } = state || 0;
  const { totalDaysRemaining } = state || 0;
  const { totalDaysUsed } = state || 0;
  const { totalDaysBooked } = state || 0;
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
  return state.holidays;
}

export function getHoliday(state) {
  return state.holiday;
}

export function getWorkDays(state) {
  const data = state.workDays;
  return data;
}

export function getSettings(state) {
  const data = state.settings;
  return data;
}

export function getOnboarding(state) {
  const data = state.onboarding;
  return data;
}
