<template>
  <q-page padding>
    <q-card>
      <q-card-section class="col name">
        {{summary.name}}'s
        <div class="col title">Holiday Manager</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon
                color="primary"
                name="date_range"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Total Days</q-item-label>
            </q-item-section>
            <q-item-label right>{{summary.totalDaysHol}}</q-item-label>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon
                color="warning"
                name="flight_land"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Days Used</q-item-label>
            </q-item-section>
            <q-item-label right>{{summary.totalDaysUsed}}</q-item-label>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon
                color="green"
                name="flight_takeoff"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Days Remaining</q-item-label>
            </q-item-section>
            <q-item-label right>{{summary.totalDaysRemaining}}</q-item-label>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon
                color="red"
                name="event_busy"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Use By</q-item-label>
            </q-item-section>
            <q-item-label right>{{summary.yearEnd | formatDate}}</q-item-label>
          </q-item>

          <q-item>
            <q-item-section>
              <q-btn
                class="full-width"
                outline
                color="secondary"
                label="HOLIDAY SUMMARY"
                to="holidays"
              >
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <div class="row">
      <div class="col">

      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      summary: 'HolidayStore/calcSummary',
    }),
  },
};
</script>

<style scoped>
.title {
  padding-bottom: 49px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 19px;
  text-align: center;
  color: #1f2041;
}

.name {
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 42px;
  text-align: center;
  color: #6fcf97;
}
</style>
