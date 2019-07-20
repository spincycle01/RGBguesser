let colors = generateRandomColors(6);
let pickedColor = pickColor();
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
  //generate all new random colors;
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of square
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = '#232323';
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add event listeners to squares
  squares[i].addEventListener('click', function() {
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
      resetBtn.textContent = 'Play Again?';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    //change content to match given color
    squares[i].style.background = color;
  }
}

//random start color
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//random color for all 6 squares
function generateRandomColors(num) {
  //make an array
  const arr = [];
  //repeat num times
  for (let i = 0; i <= num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
