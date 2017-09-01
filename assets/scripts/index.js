'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // all the event listeners for click inside a div go here
  $('.box').on('click', events.game)
// event listeners for sign functions
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
