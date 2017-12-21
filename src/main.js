import axios from 'axios'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import {IMPORT_CHESTS, SET_TIMER} from './store/mutation-types'

Vue.config.productionTip = false

/* eslint-disable no-new */
let taskApp = new Vue({
  el: '#task-app',
  store,
  template: '<app></app>',
  components: { App },
  mounted () {
    axios.get('/vue/task/test.json?_=' + new Date().getTime())
      .then(response => store.commit(IMPORT_CHESTS, response.data))
      .catch(error => console.log(error))
  }
})

window.taskApp.$store.commit(SET_TIMER, {minutes: '25', seconds: '00'})
