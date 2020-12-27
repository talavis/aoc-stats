<template>
<q-page class="flex flex-center">
  <q-select filled v-model="currentBoard" :options="Object.keys(boards)" label="Leaderboard" />
  
</q-page>
</template>

<script>
import SettingsDialog from 'components/SettingsDialog.vue'
  
export default {
  name: 'PageIndex',
  components: {settings: SettingsDialog}
  data: {
  }
  computed: {
    boards: {
      get () {
        return this.$store.state.boards.data
      }
    },
    currentBoard: {
      get () {
        return this.$store.state.boards.current
      },
      set (newBoard) {
        this.$store.dispatch('boards/setCurrent', newBoard)
      }
    }
  }
}
</script>
