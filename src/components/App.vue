<template>
  <InitScreen v-if="status === 'init'"></InitScreen>
  <BeforeScreen v-else-if="status === 'before'"></BeforeScreen>
  <AfterScreen v-else-if="status === 'after'"></AfterScreen>
  <GameScreen v-else></GameScreen>
</template>

<script>
import InitScreen from './InitScreen.vue'
import BeforeScreen from './BeforeScreen.vue'
import AfterScreen from './AfterScreen.vue'
import GameScreen from './GameScreen.vue'

const App = {
  name: 'app',
  components: {
    InitScreen, BeforeScreen, AfterScreen, GameScreen
  },
  computed: {
    status () {
      return this.$store.state.status
    }
  }
}

export default App
</script>

<style>
  body {
    background-color: #494444;
    color: #f1f1f1;
    font-family: 'Lato', sans-serif;
  }
</style>
