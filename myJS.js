/*
 * Excercise 1
 *
 */
var colorBlock = document.getElementById("color-block");
var colorName = document.getElementById("color-name");
let currentcolor;
let originalColor = (currentcolor = colorName.textContent);

colorBlock.addEventListener("click", changeColor);

/*
 * Then write a function that changes the text and the color inside the div
 *
 */

function changeColor() {

  currentcolor = currentcolor === originalColor ? "violet" : originalColor;

  colorName.textContent = colorBlock.style.backgroundColor = currentcolor;
}

/*
 * For excercise 2, you need to write an event handler for the button id "convertbtn"
 * on mouse click. For best practice use addEventListener.
 *
 */

var input = document.getElementById("f-input");
var convertbtn = document.getElementById("convertbtn");
convertbtn.addEventListener("click", convertTemp);
var cOutput = document.getElementById("c-output");
/*
 * Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
 *
 */

function convertTemp() {
    cOutput.textContent = (input.value - 32) * (5 / 9)
}
