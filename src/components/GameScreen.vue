<template>
  <div>
    <Timer v-bind="timer()"></Timer>
    <ChestList v-bind="chests()"></ChestList>
    <AnswerForm v-if="isAnswered()"></AnswerForm>
    <AnswerValue v-else v-bind="answer()"></AnswerValue>
  </div>
</template>

<script>
  import Timer from './Timer.vue'
  import ChestList from './ChestList.vue'
  import AnswerForm from './AnswerForm.vue'
  import AnswerValue from './AnswerValue.vue'

  const GameScreen = {
    name: 'gamescreen',
    components: {
      Timer, ChestList, AnswerForm, AnswerValue
    },
    computed: {
      timer () {
        return this.$store.state.timer
      },
      chests () {
        return this.$store.state.chests
      },
      answer () {
        return this.$store.state.answer
      },
      isAnswered () {
        return this.$store.state.isAnswered
      }
    }
  }

  export default GameScreen
</script>
