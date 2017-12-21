<template>
    <div class="chests">
        <ul>
            <li v-for="chest in chests"><img src="static/img/chest.png"><span>{{ chest }}</span> пиастров</li>
        </ul>
    </div>
</template>

<script>
const ChestList = {
  computed: {
    chests () {
      return this.$store.state.chests
    }
  }
}

export default ChestList
</script>