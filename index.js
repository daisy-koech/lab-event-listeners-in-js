// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const btn = document.getElementById("changeColorButton");
  btn.addEventListener("click", function() {
    console.log("button clicked")
    document.body.style.backgroundColor = "pink";
  })
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  const btn = document.getElementById("resetColorButton");
  btn.addEventListener("dblclick", function() {
    console.log("button double-clicked!")
    document.body.style.backgroundColor = "white";
  })
}

// Capture Keyboard Input

// Function to display the key pressed by the user
// function displayKeyPress (event) {
//   const keyPress = document.getElementById("keyPressDisplay")
// keyPress.addEventListener("keydown", function(event){
//   console.log(event.key);
//   keyPress.textContent = "Key pressed: " + event.key;
//   if (event.key === "Enter") {
//     console.log("Key pressed: ", event.key)
//   }
// });
// }
// displayKeyPress();

function displayKeyPress() {
  const keyPress = document.getElementById("keyPressDisplay");
  document.addEventListener("keydown", function(event){
    console.log(event.key);
    keyPress.textContent = "Key pressed: " + event.key;
   
  })
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const userInput = document.getElementById("textInput");
  const displayInput = document.getElementById("textInputDisplay");

  userInput.addEventListener("input",function(event) {
    const value = event.target.value;
    console.log(value);
    displayInput.textContent = value;
  })
}

// // Attach Event Listeners
// function setupEventListeners() {
// // Attach event listener to change background color when the button is clicked
//   document
//     .getElementById('changeColorButton')
//     .addEventListener('click', changeBackgroundColor)

//   // Attach event listener to reset background color when the body is double-clicked
//   document
//     .getElementById('resetColorButton')
//     .addEventListener('dblclick', resetBackgroundColor)

//   // Attach event listener to display key pressed when a key is pressed down
//   document.addEventListener('keydown', displayKeyPress)

//   // Attach event listener to display user input in real-time as they type
//   document.getElementById('textInput').addEventListener('input', displayUserInput)
// }

// // Initialize event listeners when the DOM is loaded
// if (typeof window !== 'undefined') {
//   document.addEventListener('DOMContentLoaded', setupEventListeners)
// }

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  // setupEventListeners,
}