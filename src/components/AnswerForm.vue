<template>
  <div class="form">
    <form method="post" v-on:submit.prevent="onSubmit">
      <input type="text" :value="answer" @input="updateAnswer" v-on:keypress="isNumber" placeholder="Ответ">
      <br />
      <button id="task-btn-answer">Отправить</button>
    </form>
    {{ answer }}
  </div>
</template>

<script>
  import { UPDATE_ANSWER } from '../store/mutation-types'
  import { mapState } from 'vuex'

  const AnswerForm = {
    computed: mapState({
      answer: state => state.answer
    }),
    methods: {
      updateAnswer (e) {
        this.$store.commit(UPDATE_ANSWER, e.target.value)
      },
      onSubmit (e) {
        this.$store.dispatch('saveAnswer')
      },
      isNumber: function (e) {
        e = e || window.event
        const charCode = (e.which) ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          e.preventDefault()
        } else {
          return true
        }
      }
    }
  }

  export default AnswerForm
</script>
