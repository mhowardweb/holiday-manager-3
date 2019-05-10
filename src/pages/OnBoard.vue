<template>
  <q-page padding>
    <q-card>
      <h6 class="text-center">
        Welcome to the Holiday Manager
      </h6>
      <q-separator />
      <q-card-section>
        <p>Please complete the steps below to configure the Holiday Manager.</p>
      </q-card-section>
    </q-card>
    <q-form>
      <q-stepper
        color="primary"
        animated
        v-model="step"
        ref="stepper"
      >

        <q-step
          default
          title="Step 1"
          :name="1"
          :done="step > 1"
        >
          <q-input
            clearable
            type="text"
            v-model="company"
            label="Company Name"
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
            :rules="[ val => val.length >= 4 || 'Please type a name']"
          >
            <template v-slot:prepend>
              <q-icon name="account_box" />
            </template>
          </q-input>
          <q-stepper-navigation>
            <q-btn
              color="secondary"
              @click="$refs.stepper.next()"
              label="Continue"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          title="Step 2"
          name="2"
          icon="settings"
          :done="step > 2"
        >
          <q-input
            clearable
            type="number"
            v-model.number="daysHol"
            label="Days Holiday"
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
            :rules="[ val => val !== null || 'Please enter a Date']"
          >
            <template v-slot:prepend>
              <q-icon name="calendar_today" />
            </template>
          </q-input>
          <q-stepper-navigation>
            <q-btn
              color="secondary"
              @click="$refs.stepper.previous()"
              label="Back"
            />
            <q-btn
              class="q-ml-md"
              color="secondary"
              @click="$refs.stepper.next()"
              label="Continue"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          title="Step 3"
          name="3"
          icon="assignment"
        >
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

          <q-stepper-navigation>
            <q-btn
              color="secondary"
              @click="$refs.stepper.previous()"
              label="Back"
            />
            <q-btn
              class="q-ml-md"
              color="secondary"
              @click="saveSettings()"
              label="Save & Finish"
            />
          </q-stepper-navigation>
        </q-step>

      </q-stepper>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'OnBoard',
  data() {
    return {
      step: 1,
      stepsComplete: false,
    };
  },
  computed: {
    ...mapGetters({
      onBoarding: 'HolidayStore/getOnboarding',
    }),
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
    ...mapActions({
      calcWorkDays: 'HolidayStore/saveworkDaysAction',
      updateSummary: 'HolidayStore/updateSummaryAction',
      onboardComplete: 'HolidayStore/onboardingStatus',
    }),
    saveSettings() {
      this.calcWorkDays();
      this.updateSummary();
      this.onboardComplete(true);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.onBoarding) {
      next();
    } else {
      next(false);
    }
  },
};
</script>
