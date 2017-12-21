<template>
    <div>{{timerDisplay}}</div>
</template>

<script>
  export default {
    computed: {
      timerDisplay () {
        return this.$store.state.timer.minutes + ':' + this.$store.state.timer.seconds
      }
    }
  }
</script>