
var snail = document.querySelector("#snail")

// snail.addEventListener("click",moveSnail)

function moveSnail(){
	var totalWidth = window.screen.width;

	var t = new Date();
	var h = t.getHours();

	var totalMin = 24 * 60;
	var currentMin = h * 60 + t.getMinutes();

	var positionX = (totalWidth / totalMin) * currentMin;
	var positionY = 400 + (Math.cos() * positionX) * 100;

	snail.style.left = positionX + "px";
	snail.style.top = positionY + "px";

}

moveSnail()
setInterval(moveSnail,60000)
