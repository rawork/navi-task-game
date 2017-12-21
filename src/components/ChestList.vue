<template>
    <div class="chests">
        <ul id="task-chests">
            <li v-for="chest in chests"><img src="../assets/chest.png"><span>{{ chest }}</span> пиастров</li>
        </ul>
    </div>
</template>

<script>
const ChestList = {
  computed: {
    chest () {
      return this.$store.state.chests
    }
  }
}

export default ChestList
</script>