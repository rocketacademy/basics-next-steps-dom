// console.log('yay!');

// make the variables out (from html id) of the input & button
var input = document.querySelector("#starter-ex");
var button = document.querySelector("#starter-button");

// call this function
var myButtonClicked = function () {
  // assign value typed from input to the variable
  var typedValue = input.value;
  // create a new h2 element
  var newHTwo = document.createElement("h2");
  // set text inside newHTwo element
  newHTwo.innerText = typedValue;
  // make newHTwo appear on screen
  document.body.appendChild(newHTwo);
  // Empty the HTML input box
  input.value = "";
};
// Activate the function when user *click*
button.addEventListener("click", myButtonClicked);
