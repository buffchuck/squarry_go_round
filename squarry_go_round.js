var blueSquare;
var redSquare;
var yellowSquare;
var greenSquare;
var go = false;
var btn = document.getElementById("gob");

function toggle() {
	go = !go;
	if (go) {
		btn.innerHTML = "No Go";
		blueSquare = setInterval(function () { move("sq1") }, 1);
		redSquare = setInterval(function () { move("sq2") }, 1);
		yellowSquare = setInterval(function () { move("sq3") }, 1);
		greenSquare = setInterval(function () { move("sq4") }, 1);
	} else {
		btn.innerHTML = "Go Round";
		clearInterval(blueSquare);
		clearInterval(redSquare);
		clearInterval(yellowSquare);
		clearInterval(greenSquare);
	}
}

function move(square) {
	var sq = document.getElementById(square);
	var pos = sq.getBoundingClientRect();
	if (pos.left == 20 && pos.top == 20) {
		sq.style.left = "150px";

	} else if (pos.top == 20 && pos.left == 150) {
		sq.style.top = "150px";

	} else if (pos.top == 150 && pos.left == 150) {
		sq.style.left = "20px";

	} else if (pos.left == 20 && pos.top == 150) {
		sq.style.top = "20px";
	}
}