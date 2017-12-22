import { IMPORT_CHESTS, SET_STATUS, SET_TIMER, SET_START_TIME, SET_DURATION, SET_ANSWER, UPDATE_ANSWER, SET_ERROR, CHOOSE_CHEST } from './mutation-types'

export const mutations = {
  [IMPORT_CHESTS] (state, chests) {
    state.chests = chests
  },
  [SET_STATUS] (state, status) {
    state.status = status
  },
  [SET_TIMER] (state, timer) {
    state.timer = timer
  },
  [SET_START_TIME] (state, startTime) {
    state.startTime = startTime
  },
  [SET_DURATION] (state, duration) {
    state.duration = duration
  },
  [SET_ANSWER] (state, value) {
    state.isAnswered = value
  },
  [UPDATE_ANSWER] (state, value) {
    state.answer = value
  },
  [SET_ERROR] (state, error) {
    state.error = error
    state.status = 'error'
  },
  [CHOOSE_CHEST] (state, chest) {
    state.chests = state.chests.map(function (item, index) {
      item.checked = item.value === chest.value
      return item
    })
    state.answer = chest.value
  }
}
