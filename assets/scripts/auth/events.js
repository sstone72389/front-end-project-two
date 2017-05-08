'use strict'
// requiring the necesary files...
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// chains sign in to allow auto-sign in functionality
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

// chains showTask to allow list at all times
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => {
      api.showsTasks(data)
      .then(ui.showTaskSuccess)
      .catch(ui.showTaskFailure)
    })
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

const showTasks = function (event) {
  event.preventDefault()
  api.showsTasks()
    .then(ui.showTaskSuccess)
    .catch(ui.showTaskFailure)
}

// chains showTask to allow list at all times
const addTask = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addsTask(data)
    .then(ui.addTaskSuccess)
    .then(() => {
      api.showsTasks(data)
      .then(ui.showTaskSuccess)
      .catch(ui.showTaskFailure)
    })
    .catch(ui.addTaskFailure)
}

// chains showTask to allow list at all times
// const onRemoveTask = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.onRemove(data)
//     .then(ui.removeTaskSuccess)
//     .then(() => {
//       api.showsTasks(data)
//       .then(ui.showTaskSuccess)
//       .catch(ui.showTaskFailure)
//     })
//     .catch(ui.removeTaskFailure)
// }

// chains showTask to allow list at all times
const onUpdateTask = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.onUpdate(data)
    .then(ui.UpdateTaskSuccess)
    .then(() => {
      api.showsTasks(data)
      .then(ui.showTaskSuccess)
      .catch(ui.showTaskFailure)
    })
    .catch(ui.UpdateTaskFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp).blur()
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-task').on('submit', addTask)
  $('#show-tasks').on('submit', showTasks)
  // $('#remove-task').on('submit', onRemoveTask)
  $('#update-task').on('submit', onUpdateTask)
}

module.exports = {
  addHandlers
}
