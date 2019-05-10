export default {
  app: {
    settings: {
      company: null,
      name: null,
      daysHol: 20,
      bankHols: 8,
      yearStart: '2019-04-01',
      yearEnd: '2020-03-31',
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: false,
      sun: false,
    },
    holiday: {
      id: '',
      holName: '',
      holStart: '',
      holEnd: '',
      daysBooked: 0,
      details: '',
    },
    holidays: [],
    workDays: [],
    totalDaysHol: 0,
    totalDaysRemaining: 0,
    totalDaysBooked: 0,
    totalDaysUsed: 0,
  },
};
