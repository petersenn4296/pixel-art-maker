document.addEventListener('DOMContentLoaded', function () {
// ---------------------Select Color----------------------------
let color;
$(".palette").click(function () {
  color = $(event.target).css("background-color")
})


// -------------------Paint current color on grid----------------------
function paintColor (event) {
$(event.target).css("background-color", color)
}
$(".cangrid").click(paintColor);


})
