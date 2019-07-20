let numOfSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetBtn = document.querySelector('#reset');
const modeBtns = document.querySelectorAll('.mode');

init();

function init() {
  //mode buttons event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener('click', () => {
      modeBtns[0].classList.remove('selected');
      modeBtns[1].classList.remove('selected');
      modeBtns[i].classList.add('selected');

      //determine how many squares to show
      //pick new colors
      //pick new pickedColor
      //update page to reflect changes
      modeBtns[i].textContent === 'Easy'
        ? (numOfSquares = 2)
        : (numOfSquares = 5);
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add event listeners to squares
    squares[i].addEventListener('click', function() {
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
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
}

function reset() {
  //generate all new random colors;
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change reset button and remove message
  messageDisplay.textContent = '';
  resetBtn.textContent = 'new colors';
  //change colors of square
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
}

resetBtn.addEventListener('click', () => {
  reset();
});

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

//
//
//
//
// const easyBtn = document.querySelector('#easyBtn');
// const hardBtn = document.querySelector('#hardBtn');
// easyBtn.addEventListener('click', () => {
//   easyBtn.classList.add('selected');
//   hardBtn.classList.remove('selected');
//   numOfSquares = 2;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = 'none';
//     }
//   }
// });

// hardBtn.addEventListener('click', () => {
//   hardBtn.classList.add('selected');
//   easyBtn.classList.remove('selected');
//   numOfSquares = 5;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = 'block';
//   }
// });
