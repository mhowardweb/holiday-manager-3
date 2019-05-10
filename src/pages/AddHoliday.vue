<template>
  <q-page padding>
    <h3 class="text-center">Add Holiday</h3>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
      ref="holidayForm"
    >
      <q-input
        type="text"
        clearable
        v-model="holiday.holName"
        label="Holiday Name"
        lazy-rules
        :rules="[ val => val && val.length > 4 || 'Holiday Name must be more than 4 characters']"
      >
        <template v-slot:prepend>
          <q-icon name="business" />
        </template>
      </q-input>

      <q-input
        type="date"
        clearable
        v-model="holiday.holStart"
        @input="calcDays"
        label="Holiday Start"
        lazy-rules
        :rules="[ val => val !== null || 'Please enter a Date']"
      >
        <template v-slot:prepend>
          <q-icon name="calendar_today" />
        </template>
      </q-input>

      <q-input
        type="date"
        clearable
        v-model="holiday.holEnd"
        @input="calcDays"
        label="Holiday End"
        lazy-rules
        :rules="[ val => val !== null || 'Please enter a Date']"
      >
        <template v-slot:prepend>
          <q-icon name="calendar_today" />
        </template>
      </q-input>

      <q-input
        type="text"
        clearable
        v-model="holiday.details"
        label="Details"
        lazy-rules
        :rules="[ val => val.length >= 4 || 'Details must be more than 4 characters']"
      >
        <template v-slot:prepend>
          <q-icon name="business" />
        </template>
      </q-input>

      <q-chip
        icon="bookmark"
        color="negative"
        text-color="white"
      >
        Days Booked: {{holiday.daysBooked}}
      </q-chip>
      <q-chip
        class="float-right"
        icon="bookmark_border"
        color="positive"
        text-color="white"
      >
        Days to Book: {{summary.totalDaysHol - summary.totalDaysUsed - holiday.daysBooked}}
      </q-chip>

      <div
        class="text-center q-mt-md"
        v-if="summary.totalDaysHol - summary.totalDaysUsed - holiday.daysBooked < 0"
      >
        YOU HAVE NO HOLIDAY LEFT TO BOOK !!
      </div>
      <div>
        <q-btn
          color="primary"
          icon="save"
          label="Save"
          class="full-width q-mt-md"
          type="submit"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="red"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import { date } from 'quasar';
import calcDaysHol from '../helpers/calcDaysHol.js';

export default {
  name: 'AddHoliday',
  data() {
    return {
      holiday: {
        holName: '',
        holStart: date.formatDate(Date.now(), 'YYYY-MM-DD'),
        holEnd: date.formatDate(Date.now(), 'YYYY-MM-DD'),
        daysBooked: 0,
        details: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      summary: 'HolidayStore/calcSummary',
      workDays: 'HolidayStore/getWorkDays',
    }),
  },
  methods: {
    calcDays() {
      this.holiday.daysBooked = calcDaysHol(
        new Date(this.holiday.holStart),
        new Date(this.holiday.holEnd),
        this.workDays,
      );
    },
    onSubmit() {
      this.$store
        .dispatch('HolidayStore/saveHolidayAction', this.holiday)
        .then(() => {
          this.$store.dispatch('HolidayStore/updateSummaryAction');
        });

      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'save',
        message: 'Holiday has been Saved',
      });
    },

    onReset() {
      this.holiday = {
        holName: '',
        holStart: date.formatDate(Date.now(), 'YYYY-MM-DD'),
        holEnd: date.formatDate(Date.now() + 7, 'YYYY-MM-DD'),
        daysBooked: 0,
        details: '',
      };
    },
  },
};
</script>

<style>
</style>
