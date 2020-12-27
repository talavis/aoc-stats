import axios from 'axios'

export function updateBoard (context, data) {
  return new Promise((resolve, reject) => {
    axios
      .get('https://adventofcode.com/' + data.year + '/leaderboard/private/view/' + data.boardId + '.json')
      .then((response) => {
        context.commit('UPDATE_BOARD', { board: data.boardId, data: response.data.members })
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function setCurrentBoard (context, boardId) {
  context.commit('SET_CURRENT_BOARD', boardId)
}

export function addBoard (context, boardId) {
  context.commit('ADD_BOARD', boardId)
}

export function deleteBoard (context, boardId) {
  context.commit('DELETE_BOARD', boardId)
}

export function showSettings (context, visible) {
  context.commit('SET_SETTINGS_VISIBLE', visible)
}
