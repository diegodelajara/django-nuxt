

const initialState = {
  currentResult: null,
  previousResult: null,
  showChart: false,
  chartName: 'ChartBar',
  labels: []
}

export default () => {
  return {
    ...initialState
  }
}
