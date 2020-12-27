<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          AoC Leaderboards
        </q-toolbar-title>
        <q-btn v-if="boards.length === 0"
               flat
               label="Add boards in settings"/>
        <div v-else>
          <q-select standout
                    bg-color="white"
                    v-model="currentBoard"
                    :options="boards"
                    label="Leaderboard" />
          <q-btn flat round icon="cached" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: { },
  computed: {
    boards: {
      get () {
        return this.$store.state.boards.boards
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
  data () {
    return {
      currentYear: 2020
    }
  }
}
</script>
