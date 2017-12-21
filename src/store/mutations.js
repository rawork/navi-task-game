import { IMPORT_CHESTS, SET_STATUS, SET_TIMER } from './mutation-types'

export const mutations = {
  [IMPORT_CHESTS] (state, chests) {
    state.chests = chests
  },
  [SET_STATUS] (state, status) {
    state.status = status
  },
  [SET_TIMER] (state, timer) {
    state.timer = timer
  }
}
