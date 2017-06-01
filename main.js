
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//   btn.onclick = function() {
//     modal.style.display = "none";
// }

//span.onclick = function() {
  //  modal.style.display = "none";
//}

//setTimeout(function() {
  //modal.style.display = "block";
//}, 3000)

btn.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

setTimeout(function(){
  modal.style.display = "block";
}, 3000)
