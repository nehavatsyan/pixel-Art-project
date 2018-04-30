function resetGrid() {
  $('#pixelCanvas').empty();
}
function makeGrid() {
  resetGrid();
  var height = $('#heights').val();
  var weight = $('#widths').val();
  for (var x = 0; x < height ; x++) {
    $('#pixelCanvas').append('<tr></tr>');
  };
  for (var y = 0; y < weight; y++) {
    $('#pixelCanvas tr').append('<td></td>');
  };
return false;
};

$('#pixelCanvas').on("click", "td", function() {
  var selectedColor = $('#colorPicker').val();
  $(this).css('background-color', selectedColor);
});

$('#pixelCanvas').on("dblclick", "td", function(){
  $(this).css("background-color", "white");
});