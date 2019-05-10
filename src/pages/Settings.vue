<template>
  <q-page class="q-pa-md">
    <div class="text-h6">Holiday Settings</div>
    <q-form class="q-gutter-md">
      <q-input
        clearable
        type="text"
        v-model="company"
        label="Company Name"
        lazy-rules
        :rules="[ val => val.length >= 4 || 'Please type a valid Company name']"
      >
        <template v-slot:prepend>
          <q-icon name="business" />
        </template>
      </q-input>

      <q-input
        clearable
        type="text"
        v-model="name"
        label="Your Name"
        lazy-rules
        :rules="[ val => val.length >= 4 || 'Please type a name']"
      >
        <template v-slot:prepend>
          <q-icon name="account_box" />
        </template>
      </q-input>

      <q-input
        clearable
        type="number"
        v-model.number="daysHol"
        label="Days Holiday"
        lazy-rules
        :rules="[ val => val >= 10 && val <= 40 || 'Must be between 10 and 40']"
      >
        <template v-slot:prepend>
          <q-icon name="calendar_today" />
        </template>
      </q-input>

      <q-input
        clearable
        type="number"
        v-model.number="bankHols"
        label="Bank Holidays"
        lazy-rules
        :rules="[ val => val >= 0 && val <= 10 || 'Must be between 0 and 10']"
      >
        <template v-slot:prepend>
          <q-icon name="calendar_today" />
        </template>
      </q-input>

      <q-input
        type="date"
        v-model="yearStart"
        label="Holiday Year Start"
        lazy-rules
        :rules="[ val => val !== null || 'Please enter a Date']"
      >
        <template v-slot:prepend>
          <q-icon name="calendar_today" />
        </template>
      </q-input>

      <q-input
        type="date"
        v-model="yearEnd"
        label="Holiday Year End"
        lazy-rules
        :rules="[ val => val !== null || 'Please enter a Date']"
      >
        <template v-slot:prepend>
          <q-icon name="calendar_today" />
        </template>
      </q-input>

    </q-form>

    <p class="caption">Normal Working Days</p>
    <q-list>
      <q-item tag="label">
        <q-item-section>
          <q-checkbox v-model="mon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Monday</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-checkbox v-model="tue" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Tuesday</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-checkbox v-model="wed" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Wednesday</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-checkbox v-model="thu" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Thursday</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-checkbox v-model="fri" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Friday</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-checkbox v-model="sat" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Saturday</q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-checkbox v-model="sun" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Sunday</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-btn
      color="red"
      icon="delete"
      label="delete all data"
      @click="confirm"
      class="full-width q-mt-md"
    />
  </q-page>
</template>

<script>
export default {
  name: 'Settings',
  computed: {
    company: {
      get() {
        return this.$store.state.HolidayStore.settings.company;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateCompany', value);
      },
    },
    name: {
      get() {
        return this.$store.state.HolidayStore.settings.name;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateName', value);
      },
    },
    daysHol: {
      get() {
        return this.$store.state.HolidayStore.settings.daysHol;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateDaysHol', value);
      },
    },
    bankHols: {
      get() {
        return this.$store.state.HolidayStore.settings.bankHols;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateBankHols', value);
      },
    },
    yearStart: {
      get() {
        return this.$store.state.HolidayStore.settings.yearStart;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateYearStart', value);
      },
    },
    yearEnd: {
      get() {
        return this.$store.state.HolidayStore.settings.yearEnd;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateYearEnd', value);
      },
    },
    mon: {
      get() {
        return this.$store.state.HolidayStore.settings.mon;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateMon', value);
      },
    },
    tue: {
      get() {
        return this.$store.state.HolidayStore.settings.tue;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateTue', value);
      },
    },
    wed: {
      get() {
        return this.$store.state.HolidayStore.settings.wed;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateWed', value);
      },
    },
    thu: {
      get() {
        return this.$store.state.HolidayStore.settings.thu;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateThu', value);
      },
    },
    fri: {
      get() {
        return this.$store.state.HolidayStore.settings.fri;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateFri', value);
      },
    },
    sat: {
      get() {
        return this.$store.state.HolidayStore.settings.sat;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateSat', value);
      },
    },
    sun: {
      get() {
        return this.$store.state.HolidayStore.settings.sun;
      },
      set(value) {
        this.$store.commit('HolidayStore/updateSun', value);
      },
    },
  },
  methods: {
    confirm() {
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Are you sure you wish to DELETE all Data ?',
          ok: {
            push: true,
          },
          cancel: {
            color: 'negative',
          },
          persistent: true,
        })
        .onOk(() => {
          this.$q.localStorage.clear();
        })
        .onDismiss(() => {});
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('HolidayStore/saveworkDaysAction');
    next();
  },
};
</script>
