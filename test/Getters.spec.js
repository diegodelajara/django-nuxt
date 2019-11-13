import getters from "@/store/getters"

import {
  getChartName,
  getCurrentResult,
  getPreviousResult
} from '@/store/getters.types'

// test 1
const chart = {chartName: 'ChartBar'}

// test 2
const previousResult = [{ fecha: '2019-01-02T03:00:00.000Z', valor: 694.77 }]
const prev = { previousResult }

// test 3
const currentResult = [{ fecha: '2019-01-02T03:00:00.000Z', valor: 694.77 }]
const curr = { currentResult }

// Si el nombre del componente coincide
describe("Chart Name", () => {
  test("returns chart name", async () => {
    const actual = await getters[getChartName](chart)
    expect(actual).toEqual('ChartBar')
  })
})

// Si mi objeto de fecha y valor coincide con getPreviousResult
describe("Previous Result", () => {
  test("returns Previous Result", async () => {
    const actual = await getters[getPreviousResult](prev)
    console.log(actual)

    expect(actual).toEqual(previousResult)
  })
})

// Si mi objeto de fecha y valor coincide con getCurrentResult
describe("current Result", () => {
  test("returns current Result", async () => {
    const actual = await getters[getCurrentResult](curr)
    console.log(actual)

    expect(actual).toEqual(currentResult)
  })
})
