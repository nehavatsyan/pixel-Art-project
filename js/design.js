function resetGrid() {
  $('#pixelCanvas').empty();
}
function makeGrid() {
 resetGrid();
const height=$("#inputHeight").val();
const weight=$("#inputWeight").val();
for(let i=0;i<height;i++){
 $("#pixelCanvas").append("<tr></tr>");
}
for(let i=0;i<weight;i++){
 $("#pixelCanvas tr").append("<td></td>");
}
return false;
}

$('#pixelCanvas').on("click mouseover", "td", function() {
  var selectedColor = $('#colorPicker').val();
  $(this).css('background-color', selectedColor);
});

$('#pixelCanvas').on("click  mousedown", "td", function(){
  $(this).css("background-color", "black");
});