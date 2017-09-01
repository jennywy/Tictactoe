// this is a sandbox

const getFormFields = require(`../../../lib/get-form-fields`)

// const api = require('./api')
// const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  api.signUp(data)
    .then(
      console.log('yes')
    )
    .catch(
      console.log('no')
    )
  const data = getFormFields
}
