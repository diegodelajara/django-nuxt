import axios from 'axios'

export default {
  async getDollar(context, url) {
    try {

      context.commit('setShowChart', false)
      context.commit('setChartName', '')

      // Verificar si existe data en el estado currentDate, para guardarlo en previousDate
      if (context.getters.getCurrentResult != '') {
        const currentData = await context.getters.getCurrentResult
        context.commit('setPreviousDate', currentData)

        // Obtengo nuevos datos, desde la API
        const result = await axios.get(url)
        if (result.status == 200 || result.status == 201) {
          if (result.data.serie != '' && result.data.serie !== undefined) {
            // Guardo la respuesta en Vuex
            context.commit('setCurrentDate', result.data.serie[0])

            // Si es la primera vez que pido los datos, no tengo un previousDate,
            // por lo tanto, guardo el mismo resultado en ese state
            if (!context.getters.getPreviousResult) {

              context.commit('setPreviousDate', result.data.serie[0])
            }

            context.commit('setChartName', 'ChartBar')
            context.commit('setShowChart', true)
          } else {
            context.commit('setChartName', 'ChartBar')
            context.commit('setShowChart', false)
          }
          return
        }
      }

    } catch (error) {
      console.log('%c error', 'color:tomato;', error)
    }
  }
}
