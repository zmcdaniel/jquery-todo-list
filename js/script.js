$(document).ready(function() {

  var input = $('#toDo');
  var submit = $('#button');

  $('#button').on('click', function(e) {
    e.preventDefault();
    var newListElem = $('<li></li>').text(input.val());
    var deleteButton = "<button class='x'>  <i class='fa fa-times' aria-hidden='true'></i></button>";
    newListElem.append(deleteButton);
    input.val('');

    $(document).on('click', '.x', function () {
      $(this).parent().remove();
    });

    $('ul').append(newListElem);
  });

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

});