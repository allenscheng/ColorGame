var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1BackgroundColor = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  // generate all new colors
  colors = generateRandomColors(numOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1BackgroundColor.style.backgroundColor = "steelblue";
  // remove pulse animation when 'Play Again' is selected
  this.classList.remove("pulse");
  // change from 'PLAY AGAIN' to 'New Color'
  this.textContent = "New Color";
  // when starting a new game the 'correct' or 'try again' will disappear
  message.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
  // add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listener to squares
  squares[i].addEventListener("click", function() {
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
