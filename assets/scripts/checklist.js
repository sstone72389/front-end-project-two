// startList to be exported and linked
const startList = function () {
  // fucntion that adds input field to ordered list when clicked
  $(document).ready(
    function () {
      $('#button').click(
        function () {
          const toAdd = $('input[name=ListItem]').val()
          $('ol').append('<li>' + toAdd + '</li>')
        })
      // allows you to hit enter to add items
      $('input[name=ListItem]').keypress(function (event) {
        if (event.which === 13) {
          $('#button').click()
          event.preventDefault()
        }
      })

      // strikes and fades out clicked list items
      $(document).on('dblclick', 'li', function () {
        $(this).toggleClass('strike').fadeOut('slow')
      })

      $('input').focus(function () {
        $(this).val('')
      })
    }
  )
}

module.exports = {
  startList
}
