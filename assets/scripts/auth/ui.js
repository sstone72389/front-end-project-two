'use strict'
const store = require('../store.js')
const showTasksTemplate = require('../templates/task-list.handlebars')

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('input').val('')
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

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  $('.UAtext').text('Houston, we have a problem...')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const autoSignInFailure = () => {
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
  $('.UAtext').text("★Dont't get caught spacing out. Sign in to get started!★")
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
  console.log('task added succesfuly')
  $('.UAtext').text('Keep Adding!!')
  $('#newTaskModal').modal('hide')
  $('.center').empty()
}

const addTaskFailure = () => {
  $('input').val('')
  $('#newTaskModal').modal('hide')
  $('.UAtext').text('Houston, we have a problem...')
}

const showTaskSuccess = (response) => {
  // console.log(response.tasks[0].name)
  console.log(response)
  // $('.UAtext').text(response.tasks[1].name)
  const showTasksHtml = showTasksTemplate({ tasks: response.tasks })
  $('.center').append(showTasksHtml)
  $('.UAtext').text('Launch ahead of your day!')
  $('#getTasksModal').modal('hide')
}

const showTaskFailure = () => {
  $('.UAtext').text('Houston, we have a problem...')
  $('#getTasksModal').modal('hide')
}

const removeTaskSuccess = (response) => {
  $('.UAtext').text('Removal Success')
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
  $('.UAtext').text('Task Successfuly Updated')
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
  autoSignInFailure,
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
  UpdateTaskFailure
}
