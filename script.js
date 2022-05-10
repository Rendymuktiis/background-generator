var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

// color1.value = "red";
// color2.value = "yellow";
// css.innerHTML = body.style.background
// body.style.background = color1.value

function changeColor (){
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " +
	color2.value + ")";

	css.textContent = body.style.background + ";"
	// text content bisa juga innerHTML, createTextNode
}

color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)