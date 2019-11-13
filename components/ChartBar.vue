<template>
  <div class="card">
    <div v-if="getShowChart" class="card-img-bottom">

      <chartjs-bar :backgroundcolor="colors" :labels="labels" :data="dataset" :dataentry="dataentry" :datalabel="datalabel" :bind="true" />

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      colors: [
        '#de98ab',
        '#A9F1DF'
      ],
      dataentry: 'null1',
      datalabel: 'Dollar variation',
      dataset: [],
      labels: []
    }
  },
  methods: {
    formatDate(longDate) {
      const date = longDate.split('T')[0]
      const [year, month, day] = date.split('-')
      return `${day}-${month}-${year}`
    },
    setLabels() {
      this.labels = [
        this.formatDate(this.getCurrentResult.fecha),
        this.formatDate(this.getPreviousResult.fecha)

      ]
    },
    setDataSets() {
      this.dataset = [
        this.getCurrentResult.valor,
        this.getPreviousResult.valor
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentResult',
      'getPreviousResult',
      'getShowChart'
    ])
  },
  mounted () {
    // console.log('%c var', 'color:cyan;', 'var')
    if (this.getCurrentResult) {
      if (this.getCurrentResult != '') {
        this.setLabels()
        this.setDataSets()
      }
    }
  }
}
</script>
