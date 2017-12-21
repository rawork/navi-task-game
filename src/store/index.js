import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
// import { IMPORT_CHESTS } from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    status: 'init',
    error: '',
    timer: {},
    answer: false,
    isAnswered: false,
    startTime: 0,
    duration: 0,
    chests: [1000, 1550, 750, 950, 800, 900]
  },
  mutations
})

export default store
