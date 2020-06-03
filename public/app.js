// Get the modal
var modalOne = document.getElementById("myModalOne");
var modalTwo = document.getElementById("myModalTwo");
var modalThree = document.getElementById("myModalThree");
var modalFour = document.getElementById("myModalFour");
var modalFive = document.getElementById("myModalFive");
var modalSix = document.getElementById("myModalSix");


// Get the button that opens the modal
var btnOne = document.getElementById("myBtnOne");
var btnTwo = document.getElementById("myBtnTwo");
var btnThree = document.getElementById("myBtnThree");
var btnFour = document.getElementById("myBtnFour");
var btnFive = document.getElementById("myBtnFive");
var btnSix = document.getElementById("myBtnSix");

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("close")[1];
var spanThree = document.getElementsByClassName("close")[2];
var spanFour = document.getElementsByClassName("close")[3];
var spanFive = document.getElementsByClassName("close")[4];
var spanSix = document.getElementsByClassName("close")[5];


// When the user clicks the button, open the modal 
btnOne.onclick = function() {
  modalOne.style.display = "block";
}
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}
btnThree.onclick = function() {
  modalThree.style.display = "block";
}
btnFour.onclick = function() {
  modalFour.style.display = "block";
}
btnFive.onclick = function() {
  modalFive.style.display = "block";
}
btnSix.onclick = function() {
  modalSix.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalOne.style.display = "none";
}
spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}
spanThree.onclick = function() {
  modalThree.style.display = "none";
}
spanFour.onclick = function() {
  modalFour.style.display = "none";
}
spanFive.onclick = function() {
  modalFive.style.display = "none";
}
spanSix.onclick = function() {
  modalSix.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  } else if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  } else if (event.target == modalThree) {
    modalThree.style.display = "none";
  } else if (event.target == modalFour) {
    modalFour.style.display = "none";
  } else if (event.target == modalFive) {
    modalFive.style.display = "none";
  } else if (event.target == modalSix) {
    modalSix.style.display = "none";
  } 
}
