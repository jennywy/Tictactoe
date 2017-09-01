'use strict'

// !!!! create an authevents page! Moves the auth events!!!

const getFormFields = require('/Users/jennyyee/wdi/projects/tictactoe/lib/get-form-fields.js')
const api = require('/Users/jennyyee/wdi/projects/tictactoe/assets/scripts/api.js')
const ui = require('./ui')

// push the click events into the gamearray
const gameMoves = [null, null, null, null, null, null, null, null, null]

const checkWinner = function () {
  if ((gameMoves[0] === gameMoves[1] && gameMoves[1] === gameMoves[2] && gameMoves[2] !== null) ||
  (gameMoves[0] === gameMoves[4] && gameMoves[4] === gameMoves[8] && gameMoves[8] !== null) ||
  (gameMoves[0] === gameMoves[3] && gameMoves[3] === gameMoves[6] && gameMoves[6] !== null) ||
  (gameMoves[3] === gameMoves[4] && gameMoves[4] === gameMoves[5] && gameMoves[5] !== null) ||
  (gameMoves[6] === gameMoves[7] && gameMoves[7] === gameMoves[8] && gameMoves[8] !== null) ||
  (gameMoves[1] === gameMoves[4] && gameMoves[4] === gameMoves[7] && gameMoves[7] !== null) ||
  (gameMoves[2] === gameMoves[5] && gameMoves[5] === gameMoves[8] && gameMoves[8] !== null) ||
  (gameMoves[2] === gameMoves[4] && gameMoves[4] === gameMoves[6] && gameMoves[6] !== null)) {
    console.log('Winner!')
  } else {
    console.log('Draw')
  }
}

let turn = 0
const game = function (event) {
  if (gameMoves[$(this).data('id')] === null) {
    if (turn % 2 === 1) {
      $(event.target).text('O')
      turn += 1
    } else {
      $(event.target).text('X')
      turn += 1
    }
  } else {
    console.log('pick another cell')
  }
  gameMoves[$(this).data('id')] = $(this).text()
  checkWinner()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function () {}

module.exports = {
  game,
  turn,
  gameMoves,
  checkWinner,
  onSignUp
}
