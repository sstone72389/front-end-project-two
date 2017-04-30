'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('input').val('')
}

const signUpFailure = () => {
  $('.UAtext').text('Error Signing up!')
  $('#signUpModal').modal('hide')
  $('input').val('')
}

// const autoSignInSuccess = (data) => {
//   $('.UAtext').text("Don't forget to start your list. Double click to remove an item.")
//   $('.container').show()
//   $('.defText').hide()
//   $('.hideOnStart').show()
//   $('.hideOnStartTwo').show()
//   $('.hideOnSignIn').hide()
//   $('.hideOnSignInTwo').hide()
//   $('#signInModal').modal('hide')
//   $('input').val('')
//
//   // store the user object as per below
//   store.user = data.user
// }

// add shows where applicable
const signInSuccess = (data) => {
  $('.UAtext').text("Don't forget to start your list. Double click to remove an item.")
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
  $('.UAtext').text('Sign in failure!')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const autoSignInFailure = () => {
  $('.UAtext').text('Sign in failure!')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.UAtext').text('Password Changed')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const changePasswordFailure = () => {
  $('.UAtext').text('Error Changing Password!')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.UAtext').text("★ Dont't get caught spacing out. Sign in to get started! ★")
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
  $('.UAtext').text('Sign out faulire!')
  $('#signOutModal').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  // autoSignInSuccess,
  autoSignInFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
