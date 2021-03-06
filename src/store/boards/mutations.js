import Vue from 'vue'

export function UPDATE_BOARD (state, payload) {
  state.data[payload.board] = payload.data
  state.data[payload.board].timestamp = new Date()
}

export function ADD_BOARD (state, payload) {
  Vue.set(state.data, payload.boardId, {})
  state.boards.push({ name: payload.name, id: payload.boardId })
}

export function DELETE_BOARD (state, boardId) {
  Vue.delete(state.data, boardId)
  if (state.currentBoard === boardId) {
    state.currentBoard = ''
  }
  for (let i = 0; i < state.boards.length; i++) {
    if (state.boards[i].id === boardId) {
      state.boards.splice(i, 1)
    }
  }
}

export function SET_CURRENT_BOARD (state, boardId) {
  state.currentBoard = boardId
}

export function SET_SETTINGS_VISIBLE (state, visible) {
  state.settingsVisible = visible
}
