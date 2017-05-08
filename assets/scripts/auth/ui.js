'use strict'
const store = require('../store.js')
const showTasksTemplate = require('../templates/task-list.handlebars')
const api = require('./api.js')
// const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('input').val('')
  $('.center').empty()
}

const signUpFailure = () => {
  $('.UAtext').text('Houston, we have a problem...')
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
  $('.UAtext').text('Houston, we have a problem...')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.UAtext').text('Password Changed')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const changePasswordFailure = () => {
  $('.UAtext').text('Houston, we have a problem...')
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
  $('.UAtext').text('Houston, we have a problem...')
  $('#signOutModal').modal('hide')
}

const addTaskSuccess = () => {
  $('input').val('')
  $('#newTaskModal').modal('hide')
  $('.center').empty()
}

const addTaskFailure = () => {
  $('input').val('')
  $('#newTaskModal').modal('hide')
  $('.UAtext').text('Houston, we have a problem...')
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

// const onUpdateId = (event) => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const findId = $(event.target).attr('data-id')
//   console.log(findId)
//   api.onUpdateById(data, findId)
//     .then(UpdateTaskSuccess)
  // .then(() => {
  //   api.showsTasks()
  //   .then(showTaskSuccess)
  //   .catch(showTaskFailure)
  // })
  // .catch(UpdateTaskFailure)
// }

const showTaskSuccess = (response) => {
  const showTasksHtml = showTasksTemplate({ tasks: response.tasks })
  $('.center').append(showTasksHtml)
  $('.UAtext').text('Launch ahead with Space-Out!')
  $('#getTasksModal').modal('hide')
  $('.remove-task-button').on('click', onRemoveId)
  // $('.edit-task-button').on('click', onUpdateId)
}

const showTaskFailure = () => {
  $('.UAtext').text('Houston, we have a problem...')
  $('#getTasksModal').modal('hide')
}

const removeTaskSuccess = (response) => {
  $('input').val('')
  $('#removeTaskModal').modal('hide')
  $('.center').empty()
}

const removeTaskFailure = (response) => {
  $('.UAtext').text('Houston, we have a problem...')
  $('input').val('')
  $('#removeTaskModal').modal('hide')
}

const UpdateTaskSuccess = (response) => {
  $('input').val('')
  $('#updateTaskModal').modal('hide')
  $('.center').empty()
}

const UpdateTaskFailure = (response) => {
  $('.UAtext').text('Houston, we have a problem...')
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
  onRemoveId
  // onUpdateId
}
