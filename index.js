// Your code here
// const dodger = document.getElementById("dodger");
// // dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

function moveDodgerLeft() {
    document.getElementById("dodger").style.left = 
    (parseInt(document.getElementById("dodger").style.left) 
    || 0) - 1 + "px";
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


function moveDodgerRight() {
    var dodger = document.getElementById("dodger");
    dodger.style.left = (parseInt(dodger.style.left) || 0) + 1 + "px";
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

