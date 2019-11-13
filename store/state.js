

const initialState = {
  currentResult: null,
  previousResult: null,
  showChart: false,
  chartName: 'ChartBar'
}

export default () => {
  return {
    ...initialState
  }
}
