export default {
  setCurrentDate(state, result) {
    state.currentResult = result
  },
  setPreviousDate(state, result) {
    state.previousResult = result
  },
  setShowChart(state, show) {
    state.showChart = show
  },
  setChartName(state, name) {
    state.chartName = name
  }
}
