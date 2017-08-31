'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // all the event listeners for click inside a div go here
  $('#0').on('click', function () {
    console.log('You clicked 0')
  })
  $('#1').on('click', function () {
    console.log('You clicked 1')
  })
  $('#2').on('click', function () {
    console.log('You clicked 2')
  })
  $('#3').on('click', function () {
    console.log('You clicked 3')
  })
  $('#4').on('click', function () {
    console.log('You clicked 4')
  })
  $('#5').on('click', function () {
    console.log('You clicked 5')
  })
  $('#6').on('click', function () {
    console.log('You clicked 6')
  })
  $('#7').on('click', function () {
    console.log('You clicked 7')
  })
  $('#8').on('click', function () {
    console.log('You clicked 8')
  })
// event listeners for sign functions
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
