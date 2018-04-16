var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1BackgroundColor = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();
function init() {
  // modeButton event listener
  setUpModeButton();
  setUpSquares();
  reset();
}

function setUpModeButton() {
  for (var i = 0; i < modeButton.length; i++) {
    // adds the selected css to easy and hard buttons
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numOfSquares = 3) : (numOfSquares = 6);
      reset();
    });
  }
}

function setUpSquares() {
  for (var j = 0; j < squares.length; j++) {
    // add initial color to squares
    squares[j].style.backgroundColor = colors[j];
    // add click listener to squares
    squares[j].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        resetButton.classList.add("pulse");
        changeColor(clickedColor);
        h1BackgroundColor.style.backgroundColor = clickedColor;
      } else {
        this.style.background = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1BackgroundColor.style.backgroundColor = "steelblue";
  // remove pulse animation when 'Play Again' is selected
  resetButton.classList.remove("pulse");
  // change from 'PLAY AGAIN' to 'New Color'
  resetButton.textContent = "New Color";
  // when starting a new game the 'correct' or 'try again' will disappear
  message.textContent = "";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColor(color) {
  // loop through all sqaures
  for (var i = 0; i < colors.length; i++) {
    // change each color to match correct color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make array
  var array = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color push into array
    array.push(randomColor());
  }
  // return the array
  return array;
}

function randomColor() {
  // pick a red
  var r = Math.floor(Math.random() * 256);
  // pick green
  var g = Math.floor(Math.random() * 256);
  // pick blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
