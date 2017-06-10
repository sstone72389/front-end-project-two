'use strict'
const store = require('../store.js')
const showTasksTemplate = require('../templates/task-list.handlebars')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('input').val('')
  $('.center').empty()
}

const signUpFailure = () => {
  $('.UAtext').text('Houston, we have a problem...errr sign-up failure')
  $('#signUpModal').modal('hide')
  $('input').val('')
}

// add shows where applicable
const signInSuccess = (data) => {
  $('.UAtext').text("Don't forget to start your task list.")
  $('.container').show()
  $('.defText').hide()
  $('.hideOnStart').show()
  $('.hideOnStartTwo').show()
  $('.hideOnSignIn').hide()
  $('.hideOnSignInTwo').hide()
  $('#signInModal').modal('hide')
  $('input').val('')
  $('.center').empty()

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  $('.UAtext').text('Houston, we have a problem...errr sign-in failure')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('#password-succ').text('Password Changed').fadeIn().delay(2000).fadeOut('slow')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const changePasswordFailure = () => {
  $('#password-succ').text('Houston, we have a problem...failure changing password').fadeIn().delay(2000).fadeOut('slow')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.UAtext').text("Dont't get caught spacing out. Sign in to get started!")
  $('.container').hide()
  $('.defText').show()
  $('.hideOnStart').hide()
  $('.hideOnStartTwo').hide()
  $('.hideOnSignIn').show()
  $('.hideOnSignInTwo').show()
  $('.UAtext').show()
  $('#signOutModal').modal('hide')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.UAtext').text('Houston, we have a problem...errr sign-out failure')
  $('#signOutModal').modal('hide')
}

const addTaskSuccess = () => {
  $('input').val('')
}

const addTaskFailure = () => {
  $('input').val('')
  $('.UAtext').text('Houston, we have a problem...failure adding task')
}

const onRemoveId = (event) => {
  const findId = $(event.target).attr('data-id')
  api.onRemoveById(findId)
    .then(removeTaskSuccess)
  .then(() => {
    api.showsTasks()
    .then(showTaskSuccess)
    .catch(showTaskFailure)
  })
  .catch(removeTaskFailure)
}

// requires store and when first edit button is clicked
// this is used to pass on to the modals click handler in events
// (onUpdateTask function)
const onUpdateId = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const findId = $(event.target).attr('data-id')
  store.currentId = findId
}

// edit task button launches the above code
const showTaskSuccess = (response) => {
  const showTasksHtml = showTasksTemplate({ tasks: response.tasks })
  $('.center').html(showTasksHtml)
  $('.UAtext').text('Launch ahead with Space-Out!')
  $('.remove-task-button').on('click', onRemoveId)
  $('.edit-task-button').on('click', onUpdateId)
}

const showTaskFailure = () => {
  $('.UAtext').text('Houston, we have a problem... cannot show tasks')
}

const removeTaskSuccess = (response) => {
  $('input').val('')
  // $('.center').empty()
}

const removeTaskFailure = (response) => {
  $('.UAtext').text('Houston, we have a problem...failure removing task')
  $('input').val('')
}

const UpdateTaskSuccess = (response) => {
  $('input').val('')
  $('#updateTaskModal').modal('hide')
  // $('.center').empty()
}

const UpdateTaskFailure = (response) => {
  $('.UAtext').text('Houston, we have a problem... cannot update task')
  $('input').val('')
  $('#updateTaskModal').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  addTaskSuccess,
  addTaskFailure,
  showTaskSuccess,
  showTaskFailure,
  removeTaskSuccess,
  removeTaskFailure,
  UpdateTaskSuccess,
  UpdateTaskFailure,
  onRemoveId,
  onUpdateId
}
