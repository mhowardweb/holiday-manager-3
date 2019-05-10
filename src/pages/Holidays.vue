<template>
  <q-page padding>
    <q-toolbar class="bg-secondary text-center text-white shadow-2">
      <q-toolbar-title>Summary for {{summary.name}}</q-toolbar-title>
    </q-toolbar>
    <q-list
      bordered
      separator
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar
            color="purple"
            text-color="white"
            icon="calendar_today"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Total Days</q-item-label>
          <q-item-label caption>for current year</q-item-label>
        </q-item-section>
        <q-item-label right>{{summary.totalDaysHol}} </q-item-label>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar
            color="orange"
            text-color="white"
            icon="flight_land"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Days Used</q-item-label>
          <q-item-label caption>in the current year</q-item-label>
        </q-item-section>
        <q-item-label right>{{summary.totalDaysUsed}} </q-item-label>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar
            color="green"
            text-color="white"
            icon="flight_takeoff"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Days Remaining</q-item-label>
          <q-item-label caption>in the current year</q-item-label>
        </q-item-section>
        <q-item-label right>{{summary.totalDaysRemaining}} </q-item-label>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar
            color="red"
            text-color="white"
            icon="calendar_view_day"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Use By</q-item-label>
          <q-item-label caption>end of holiday year</q-item-label>
        </q-item-section>
        <q-item-label right>{{summary.yearEnd | formatDate}} </q-item-label>
      </q-item>
    </q-list>

    <div v-if="holidays <= 0">
      <q-btn
        class="full-width q-mt-xl q-pa-md"
        color="warning"
        icon="add"
        label="Add Your First Holiday"
        to="add"
      />
    </div>

    <q-card
      v-for="holiday in holidays"
      :key="holiday.id"
      inline
      class="bigger q-mt-md full-width"
    >
      <q-img src="statics/nautical.jpg">
        <div class="absolute-bottom h6 text-center q-pa-xs">
          {{holiday.holName}}
        </div>
      </q-img>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-avatar
              rounded
              color="blue"
              text-color="white"
              icon="fas fa-luggage-cart"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Days Holiday</q-item-label>
            <q-item-label caption>Total days you have booked.</q-item-label>
          </q-item-section>
          <q-item-label right>{{holiday.daysBooked}}</q-item-label>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar
              rounded
              color="green"
              text-color="white"
              icon="fas fa-plane-departure"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Start</q-item-label>
            <q-item-label caption>The first day of your Holiday</q-item-label>
          </q-item-section>
          <q-item-label right>{{holiday.holStart | formatDate}}</q-item-label>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar
              rounded
              color="red"
              text-color="white"
              icon="fas fa-plane-arrival"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>End</q-item-label>
            <q-item-label caption>The last day of your Holiday.</q-item-label>
          </q-item-section>
          <q-item-label right>{{holiday.holEnd | formatDate}}</q-item-label>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar
              rounded
              color="yellow"
              text-color="white"
              icon="fas fa-user-edit"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Notes</q-item-label>
            <q-item-label caption>Details about your Holiday</q-item-label>
          </q-item-section>
          <q-item-label right>{{holiday.details}}</q-item-label>
        </q-item>
      </q-list>

      <q-separator />

      <q-card-actions>
        <q-btn
          outline
          label="Edit"
          color="positive"
          icon="edit"
          @click="handleSelect(holiday)"
        />
        <q-btn
          outline
          label="Delete"
          color="negative"
          icon="delete"
          @click="handleDelete(holiday)"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Holidays',
  methods: {
    ...mapActions({
      deleteHoliday: 'HolidayStore/deleteHolidayAction',
      handleSelect: 'HolidayStore/selectHolidayAction',
    }),
    handleDelete(data) {
      this.$q
        .dialog({
          title: 'Confirm Delete',
          message: 'Are you sure you would like to delete this Holiday ?',
          ok: true,
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.deleteHoliday(data);
        });
    },
  },
  computed: {
    ...mapGetters({
      summary: 'HolidayStore/calcSummary',
      holidays: 'HolidayStore/getHolidays',
    }),
  },
};
</script>

<style>
</style>
