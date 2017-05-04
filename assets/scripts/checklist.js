// startList to be exported and linked
// const startList = function () {
//   const incompleteTasks = []
//   const completeTasks = []
//   // fucntion that adds input field to ordered list when clicked
//   $(document).ready(
//     function () {
//       $('#button').click(
//         function () {
//           const toAdd = $('.listInput').val()
//           $('ol').append('<li>' + toAdd + '</li>')
//           incompleteTasks.push(toAdd)
//           $('.listInput').val('')
//           console.log(incompleteTasks)
//         })
//       // allows you to hit enter to add items
//       $('.listInput').keypress(function (event) {
//         if (event.which === 13) {
//           $('#button').click()
//           event.preventDefault()
//         }
//       })
//
//       // strikes and fades out clicked list items
//       // adds value of clicked item into completeTasks array
//       $(document).on('click', 'li', function () {
//         $(this).toggleClass('strike').fadeOut('slow')
//         // checks index of list item, may ne unimportant
//         // const index = $(this).index()
//         const text = $(this).text()
//         completeTasks.push(text)
//         console.log(completeTasks)
//       })
//
//       $('input').focus(function () {
//         $(this).val('')
//       })
//     }
//   )
// }
//
// module.exports = {
//   startList
// }
