<template>
  <q-dialog :value="value" @input="updateVisibility">
    <q-card>
      <q-card-section>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Cancel" color="grey-6" v-close-popup />
        <q-btn label="Save"
               color="positive"
               @click="saveSettings"
               v-close-popup />
      </q-card-actions>
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
      required: true
    }
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
  },
  methods: {
    saveSettings () {
    },
    updateVisibility (value) {
      this.$emit('input', value)
    }
  }
}
</script>
