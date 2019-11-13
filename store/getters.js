import {
  getChartName,
  getCurrentResult,
  getPreviousResult
} from './getters.types'

export default {
  [getPreviousResult](state) {
    return state.previousResult
  },
  [getCurrentResult] (state) {
    return state.currentResult
  },
  getShowChart(state) {
    return state.showChart
  },
  // getChartName(state) {
  //   return state.chartName
  // }
  [getChartName]: (state) => {
    return state.chartName
  },
}
