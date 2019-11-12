<template>
  <div class="card">
    <div v-if="getShowChart" class="card-img-bottom">
      {{getRandomNum}}
      <!-- <canvas id="fooCanvas" count="2" /> -->

      <!-- <chartjs-bar
        v-for="(item, index) in types"
        :key="index"
        :backgroundcolor="item.bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="item.borderColor"
        :data="item.data"
        :datalabel="item.dataLabel"
        :labels="labels"
        target="fooCanvas"
      /> -->
      <chartjs-bar :backgroundcolor="colors" :labels="labels" :data="dataset" :dataentry="dataentry" :datalabel="datalabel" :bind="true" />

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { MY_COLORS } from '@/constants'

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
      labels: [],
      myColors: MY_COLORS
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
        this.formatDate(this.getPreviousResult.fecha),
        this.formatDate(this.getCurrentResult.fecha)

      ]
    },
    setDataSets() {
      this.dataset = [
        this.getPreviousResult.valor,
        this.getCurrentResult.valor
      ]
    },
    setColors() {
      this.colors = [
        this.myColors[this.getRandomNum],
        this.myColors[this.getRandomNum]
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentResult',
      'getPreviousResult',
      'getShowChart'
    ]),
    getRandomNum: function() {
      return Math.floor(Math.random() * (7 - 1))
    }
  },
  mounted () {
    if (this.getCurrentResult != '') {
      this.setLabels()
      this.setDataSets()
      // this.setColors()
    }
  }
}
</script>
