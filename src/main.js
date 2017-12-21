import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#task-app',
  store,
  render: h => h(App),
  components: { App },
  mounted () {
    store.dispatch('initTask')
  }
})
