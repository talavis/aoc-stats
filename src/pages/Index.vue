<template>
<q-page class="flex flex-center">
  <q-table>
  </q-table>
  <settings-dialog v-model="settingsVisible"/>
</q-page>
</template>

<script>
import SettingsDialog from 'components/SettingsDialog.vue'

export default {
  name: 'PageIndex',
  components: {
    'settings-dialog': SettingsDialog
  },
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
    },
    settingsVisible: {
      get () {
        return this.$store.state.boards.settingsVisible
      },
      set (isVisible) {
        this.$store.dispatch('boards/showSettings', isVisible)
      }
    }
  }
}
</script>
