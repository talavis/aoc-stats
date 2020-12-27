<template>
  <q-dialog>
    <q-card>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'SettingsDialog',
  props: {
    value: {
      // visibility for v-model
      type: Boolean,
      required: true,
    },
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
    }
  }
}
</script>
