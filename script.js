const container = document.querySelector('#grid-container');
const clear = document.querySelector('#clear');
const sizeInput = document.querySelector('#gridSize');
const generateBtn = document.querySelector('#generate');
sizeInput.value = 16;
const colors = ["#fff", "#ddd", "#bbb", "#999", "#777", "#555", "#333", "#111"];
generateCells(sizeInput.value);
let cells = document.querySelectorAll('.cell');
clear.addEventListener('click', clearBoard);

generateBtn.addEventListener('click', (e) => {
  clearBoard();
  if(sizeInput.value < 1 || sizeInput.value > 64) {
    alert('Size must be between 1 and 64');
    return false;
  }
  removeCells();
  generateCells(sizeInput.value);
});

function generateCells(gridSize) {
  changeGridSize(sizeInput.value);
  for(let i = 0; i < Math.pow(gridSize, 2); i++){
    const cell = document.createElement('div');
    cell.classList.add(`cell`);
    cell.setAttribute('data-count', '0');
    cell.addEventListener('mouseover', (e) => {
      if(cell.getAttribute('data-count') < colors.length) {
        cell.setAttribute('data-count', `${parseInt(cell.getAttribute('data-count')) + 1}`);
        cell.style.backgroundColor = colors[cell.getAttribute('data-count')];
      }
    });
    container.appendChild(cell);
  }
}

function changeGridSize(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearBoard() {
  cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.classList.remove('trace');
  });
}

function removeCells() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
