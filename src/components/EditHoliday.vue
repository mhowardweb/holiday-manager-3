<template>
  <q-page padding>
    <h3 class="text-center">Edit Holiday</h3>
    <q-form
      @submit="onSubmit"
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
        label="Holiday Start"
        @input="calcDays"
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
        label="Holiday End"
        @input="calcDays"
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
        Days to Book: {{summary.totalDaysRemaining}}
      </q-chip>

      <div
        class="text-center q-mt-md"
        v-if="summary.totalDaysRemaining < 0"
      >
        YOU HAVE NO HOLIDAY LEFT TO BOOK !!
      </div>
      <div>
        <q-btn
          color="primary"
          icon="save"
          label="Update & Save"
          class="full-width q-mt-md"
          type="submit"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import calcDaysHol from '../helpers/calcDaysHol.js';

export default {
  name: 'EditHoliday',
  data() {
    return {
      holiday: {
        id: null,
        holName: '',
        holStart: null,
        holEnd: null,
        daysBooked: 0,
        details: '',
      },
      isSaved: false,
    };
  },
  methods: {
    onSubmit() {
      this.isSaved = true;
      this.$store
        .dispatch('HolidayStore/updateHolidayAction', this.holiday)
        .then(() => {
          this.$store.dispatch('HolidayStore/updateSummaryAction');
        });
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'save',
        message: 'Holiday has been Updated',
      });
    },
    calcDays() {
      this.holiday.daysBooked = calcDaysHol(
        new Date(this.holiday.holStart),
        new Date(this.holiday.holEnd),
        this.workDays,
      );
    },
  },
  mounted() {
    this.holiday.id = this.holidayFromStore.id;
    this.holiday.holName = this.holidayFromStore.holName;
    this.holiday.holStart = this.holidayFromStore.holStart;
    this.holiday.holEnd = this.holidayFromStore.holEnd;
    this.holiday.daysBooked = this.holidayFromStore.daysBooked;
    this.holiday.details = this.holidayFromStore.details;
  },
  computed: {
    ...mapGetters({
      summary: 'HolidayStore/calcSummary',
      workDays: 'HolidayStore/getWorkDays',
      holidayFromStore: 'HolidayStore/getHoliday',
    }),
  },
  beforeRouteLeave(to, from, next) {
    if (!this.isSaved) {
      this.$q
        .dialog({
          title: 'WARNING',
          message: 'Do you really want to leave without Saving ?',
          ok: true,
          cancel: true,
          preventClose: true,
        })
        .onOk(() => {
          next();
        });
    } else {
      next();
    }
  },
};
</script>
