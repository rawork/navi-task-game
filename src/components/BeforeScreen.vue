<template>
    <div>
        <h2 class="before-message">Время начала игры<br>#time#</h2><br><button class="btn" v-on:click="reloadPage">Обновить страницу</button>
    </div>
</template>

<script>
export default {
  methods: {
    reloadPage: function () {
      window.location.reload()
    }
  }
}
</script>

export default BeforeScreen;