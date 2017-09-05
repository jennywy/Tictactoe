'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
// require the auth events page once it's created

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('.board').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#start-game').hide()
  $('#reset').hide()
  $('#join-game').hide()
  $('#get-games').hide()
  $('#get-game').hide()
  $('.box').on('click', events.game)
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#reset').on('submit', events.reset)
  $('#start-game').on('click', events.reset)
  $('#join-game').on('submit', events.onJoin)
  $('#get-games').on('submit', events.onGetGames)
  $('#get-game').on('submit', events.onGetGame)
  $('#change-password').on('submit', events.onChangePassword)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
