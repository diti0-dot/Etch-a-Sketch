// Selectors
const spaceEl = document.querySelector('.space');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const colorPicker = document.getElementById('favcolor');
const randomBtn = document.getElementById('randomBtn');
const clearBtn = document.getElementById('clear');

// Default values
let pixelValue = 8; // Grid size
let selectedColor = '#ff0000'; // Initial color
let sides = 8;

// Event Listeners

// Update grid size from dropdown
dropdownLinks.forEach(link => {
  link.addEventListener('click', event => {
    pixelValue = parseInt(event.target.getAttribute('data-value'));
    createGrid(pixelValue, pixelValue);
  });
});
let createNewGrid = document.querySelector("#createNewGrid");

createNewGrid.addEventListener("click", () => {
	 sides = prompt("Enter prefered pixels(max is 100):");
	if (sides > 100){
    alert("max is 100")
  }else if(sides ==="" ||  sides === null){
    sides = 8;
  }
  else{

  pixelValue = sides;
  }
	createGrid(pixelValue, pixelValue);
});


// Update selected color from color picker
colorPicker.addEventListener('input', () => {
  selectedColor = colorPicker.value;
});

// Apply random colors on mouse enter when random button is clicked
randomBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('.divRow');
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      const rndColor = getRandomColor();
      row.style.backgroundColor = rndColor;
    });
  });
});

// Clear all grid cell colors
clearBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('.divRow');
  rows.forEach(row => {
    row.style.backgroundColor = "#1e1e1e"; // Reset to default color
  });
});

// Functions

// Create grid
function createGrid(cols, rows) {
  spaceEl.innerHTML = ''; // Clear previous grid

  for (let i = 0; i < cols; i++) {
    const newCol = document.createElement('div');
    newCol.classList.add('divCol');
    spaceEl.appendChild(newCol);

    for (let j = 0; j < rows; j++) {
      const newRow = document.createElement('div');
      newRow.classList.add('divRow');

      // Default coloring behavior
      newRow.addEventListener('mouseenter', () => {
        newRow.style.backgroundColor = selectedColor;
      });

      newCol.appendChild(newRow);
    }
  }
}

// Generate a random RGB color
function getRandomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

// Generate random number up to max
function random(max) {
  return Math.floor(Math.random() * max);
}

// Initial grid creation
createGrid(pixelValue, pixelValue);
