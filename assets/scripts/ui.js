'use strict'
const store = require('./store')
const events = require('./events')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failure')
}

const createSuccess = function (data) {
  $('#message').text('Created Successfully')
  store.game = data.game
  $('#gameidtag').text('This is game #' + store.game.id)
}

const createFail = function (error) {
  console.error(error)
  $('#message').text('Nope')
}

const changePasswordSuccess = function () {
  console.log('password changed')
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on change password')
}

const joinSuccess = function (data) {
  store.game.id = data.game.id
  $('#message').text('Joined Successfully')
  $('#gameidtag').text('You joined game #' + store.game.id)
}

const joinFail = function () {
  $('#message').text('Joined Failed')
}

const updateMoveSuccess = function (data) {
  // console.log(data)
  store.game = data.game
}

const updateMoveFail = function (error) {
  console.error(error)
}

const getGamesSuccess = function (data) {
  store.games = data.games
  console.log(store.games)
  $('#scoreboard').text(JSON.stringify(store.games))
}

const getGamesFail = function (error) {
  console.error(error)
  $('#scoreboard').text('Error Retrieving Games')
}

const showSuccess = function (data) {
  store.game = data.game
  console.log(store.game)
  // console.log(store.games)
  $('#scoreboard').text(JSON.stringify(store.game))
}

const showFail = function (error) {
  console.error(error)
  $('#scoreboard').text('Error Retrieving Game')
}

const declareWinner = function () {
  let winner
  if (events.turn % 2 === 1) {
    winner = 'Player O'
    $('#message').text(winner + ' is the winner!')
  } else {
    winner = 'Player X'
    $('#message').text(winner + ' is the winner!')
  }
}

const declareDraw = function () {
  $('#message').text('Draw')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createSuccess,
  createFail,
  joinSuccess,
  joinFail,
  updateMoveSuccess,
  updateMoveFail,
  declareWinner,
  declareDraw,
  getGamesSuccess,
  getGamesFail,
  showSuccess,
  showFail,
  changePasswordSuccess,
  changePasswordFailure
}
