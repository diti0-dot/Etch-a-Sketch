// ================================
// Selectors
// ================================

const spaceEl = document.querySelector('.space');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const colorPicker = document.getElementById('favcolor');
const randomBtn = document.getElementById('randomBtn');
const clearBtn = document.getElementById('clear');

let createNewGrid = document.querySelector("#createNewGrid");
let formInput = document.getElementById("gridForm");
let createGridButton = document.getElementById("createNewGrid2");
let newGridSize = document.getElementById("gridSize");

// Default values
let pixelValue = 8;
let selectedColor = '#ff0000';


// Event Listeners
// select grid values from dropdown 
dropdownLinks.forEach(link => {
  link.addEventListener('click', event => {
    pixelValue = parseInt(event.target.getAttribute('data-value'));
    createGrid(pixelValue, pixelValue);
  });
});

//color picker
colorPicker.addEventListener('input', () => {
  selectedColor = colorPicker.value;
});

randomBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('.divRow');
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.backgroundColor = getRandomColor();
    });
  });
});
//select grid values from input form
createGridButton.addEventListener("click", (event) => {
  event.preventDefault();
  let gridSizeValue = parseInt(newGridSize.value);

  if (isNaN(gridSizeValue) || gridSizeValue < 1 || gridSizeValue > 100) {
    alert("Please enter a valid grid size between 1 and 100.");
  } else {
    pixelValue = gridSizeValue;
    createGrid(pixelValue, pixelValue);
    formInput.style.display = "none";
  }
});

//display the form for input
createNewGrid.addEventListener("click", () => {
  formInput.style.display = "block";
});

clearBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('.divRow');
  rows.forEach(row => {
    row.style.backgroundColor = "#1e1e1e";
  });
});


// Functions

function createGrid(cols, rows) {
  spaceEl.innerHTML = '';
  for (let i = 0; i < cols; i++) {
    const newCol = document.createElement('div');
    newCol.classList.add('divCol');
    spaceEl.appendChild(newCol);

    for (let j = 0; j < rows; j++) {
      const newRow = document.createElement('div');
      newRow.classList.add('divRow');
      newRow.addEventListener('mouseenter', () => {
        newRow.style.backgroundColor = selectedColor;
      });
      newCol.appendChild(newRow);
    }
  }
}

function getRandomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function random(max) {
  return Math.floor(Math.random() * max);
}

createGrid(pixelValue, pixelValue);
