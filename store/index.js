

import actionsFile from './actions'
import mutationsFile from './mutations'
import gettersFile from './getters'
import stateFile from './state'

export const strict = false

export const state = () => stateFile
export const getters = gettersFile
export const actions = actionsFile
export const mutations = mutationsFile
