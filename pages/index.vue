<template>
  <div>
      <h1>Dollar variation</h1>

      <v-layout>
        <v-flex xs3>

          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                v-on="on"
                label="Date"
                persistent-hint
                prepend-icon=""
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="onChangeFilter"></v-date-picker>
          </v-menu>

        </v-flex>
      </v-layout>


      <div class="grid">
        <!-- {{getShowChart}}--{{getChartName}} -->
        <component v-if="getShowChart" :is="getChartName"></component>
        <!-- <ChartBar v-if="getShowChart" /> -->

      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapMutations, mapGetters } from 'vuex'

import ChartBar from '@/components/chart-bar'

export default {
  components: {
    ChartBar
  },
  data () {
    return {
      chart: null,
      menu1: false,
      date: '2019-01-02',
      dateFormatted: this.formatDate('2019-01-02'),
      API: 'https://mindicador.cl/api/dolar/'
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    ...mapActions([
      'getDollar'
    ]),
    ...mapMutations([
      'setCurrentDate',
      'setShowChart',
      'setChartName'
    ]),
    async onChangeFilter() {
      await this.setChartName('')
      await this.setShowChart(false)
      this.menu = true
      const selectedDate = await this.parseDate(this.date)
      const url = `${this.API}${selectedDate}`
      await this.getDollar(url)
    },
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`
    }
  },
  computed: {
    ...mapGetters([
      'getShowChart',
      'getChartName'
    ])
  },
  async mounted () {
    this.getDollar(`${this.API}02-01-2019`)
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  row-gap: 2rem;
}
</style>
