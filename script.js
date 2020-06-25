document.getElementById("header").addEventListener("mouseover", mouseOver);
document.getElementById("header").addEventListener("mouseout", mouseOut);
function mouseOver(){
	document.getElementById("header").innerHTML = "\ sockies \";
	document.getElementById("header").style.color = "red";
}
function mouseOut(){
	document.getElementById("header").innerHTML = "/ sockies /";
	document.getElementById("header").innerHTML = "green";
}
