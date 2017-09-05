'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#start-game').show()
  $('#join-game').show()
  $('#get-game').show()
  $('#get-games').show()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('.board').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#start-game').hide()
  $('#reset').hide()
  $('#join-game').hide()
  $('#get-games').hide()
  $('#get-game').hide()
  $('#scoreboard').text(null)
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failure')
}

const createSuccess = function (data) {
  $('#message').text('Created Successfully')
  store.game = data.game
  $('#gameidtag').text('This is game #' + store.game.id)
  $('#start-game').hide()
  $('.board').show()
  $('#reset').show()
}

const createFail = function () {
  $('#message').text('Not created')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function () {
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
  store.game = data.game
}

const updateMoveFail = function () {
  $('#message').text('Error on move update')
}

const getGamesSuccess = function (data) {
  store.games = data.games
  $('#scoreboard').text('You have played ' + store.games.length + ' games')
}

const getGamesFail = function () {
  $('#scoreboard').text('Error Retrieving Games')
}

const showSuccess = function (data) {
  store.game = data.game
  $('#scoreboard').text(JSON.stringify(store.game))
}

const showFail = function () {
  $('#scoreboard').text('Error Retrieving Game')
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
  getGamesSuccess,
  getGamesFail,
  showSuccess,
  showFail,
  changePasswordSuccess,
  changePasswordFailure
}
