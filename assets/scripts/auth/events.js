'use strict'
// requiring the necesary files...
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addTask = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addsTask(data)
    .then(ui.addTaskSuccess)
    .catch(ui.addTaskFailure)
}

const showTasks = function (event) {
  event.preventDefault()
  api.showsTasks()
    .then(ui.showTaskSuccess)
    .catch(ui.showTaskFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp).blur()
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-task').on('submit', addTask)
  $('#show-tasks').on('submit', showTasks)
}

module.exports = {
  addHandlers
}
