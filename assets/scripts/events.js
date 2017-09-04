'use strict'

// !!!! create an authevents page! Moves the auth events!!!

const getFormFields = require('/Users/jennyyee/wdi/projects/tictactoe/lib/get-form-fields.js')
const api = require('/Users/jennyyee/wdi/projects/tictactoe/assets/scripts/api.js')
const ui = require('./ui')

// push the click events into the gamearray
let gameMoves = [null, null, null, null, null, null, null, null, null]
let gameStatus = false

const checkWinner = function () {
  if ((gameMoves[0] === gameMoves[1] && gameMoves[1] === gameMoves[2] && gameMoves[2] !== null) ||
  (gameMoves[0] === gameMoves[4] && gameMoves[4] === gameMoves[8] && gameMoves[8] !== null) ||
  (gameMoves[0] === gameMoves[3] && gameMoves[3] === gameMoves[6] && gameMoves[6] !== null) ||
  (gameMoves[3] === gameMoves[4] && gameMoves[4] === gameMoves[5] && gameMoves[5] !== null) ||
  (gameMoves[6] === gameMoves[7] && gameMoves[7] === gameMoves[8] && gameMoves[8] !== null) ||
  (gameMoves[1] === gameMoves[4] && gameMoves[4] === gameMoves[7] && gameMoves[7] !== null) ||
  (gameMoves[2] === gameMoves[5] && gameMoves[5] === gameMoves[8] && gameMoves[8] !== null) ||
  (gameMoves[2] === gameMoves[4] && gameMoves[4] === gameMoves[6] && gameMoves[6] !== null)) {
    gameStatus = true
    ui.declareWinner()
  } else if (turn === 9) {
    gameStatus = true
    ui.declareDraw()
  }
}

let turn = 0
const game = function (event) {
  if (gameMoves[$(this).data('id')] === null && gameStatus === false) {
    let player
    if (turn % 2 === 1) {
      player = 'O'
      $(event.target).text(player)
      turn += 1
      $('#message').text('Player X turn')
    } else {
      player = 'X'
      $(event.target).text(player)
      turn += 1
      $('#message').text('Player O turn')
    }
    gameMoves[$(this).data('id')] = $(this).text()
    checkWinner()
    updateMove($(this).data('id'), player)
  } else {
    $('#message').text('Pick another cell')
  }
}

const updateMove = function (index, value) {
  const over = gameStatus
  const cell = {}
  cell.index = index
  cell.value = value
  const gameObj = {}
  gameObj.cell = cell
  gameObj.over = over
  const updateObj = {}
  updateObj.game = gameObj
  api.update(updateObj)
    .then(ui.updateMoveSuccess)
    .catch(ui.updateMoveFail)
}

const reset = function (event) {
  gameMoves = [null, null, null, null, null, null, null, null, null]
  gameStatus = false
  $('.box').text(null)
  $('#message').text(null)
  turn = 0
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreate = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.createSuccess)
    .catch(ui.createFail)
}

const onJoin = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.update(data)
    .then(ui.joinSuccess)
    .catch(ui.joinFail)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFail)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = data.id
  console.log(id)
  api.show(id)
    .then(ui.showSuccess)
    .catch(ui.showFail)
}

module.exports = {
  game,
  turn,
  gameMoves,
  checkWinner,
  onSignUp,
  onSignIn,
  onSignOut,
  reset,
  onCreate,
  onJoin,
  updateMove,
  onGetGame,
  onGetGames
}
