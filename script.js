const container = document.querySelector('.grid-container');
const clear = document.querySelector('#clear');
const sizeInput = document.querySelector('#gridSize');
const generateBtn = document.querySelector('#generate');
sizeInput.value = 16;
generateCells(sizeInput.value);

const cells = document.querySelectorAll('.cell');

generateBtn.addEventListener('click', (e) => {
  clearBoard();
  removeCells();
  generateCells(sizeInput.value);
});

function generateCells(gridSize) {
  container.style.gridTemplateColumns = `repeat(${sizeInput.value}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${sizeInput.value}, 1fr)`;
  for(let i = 0; i < Math.pow(gridSize, 2); i++){
    const cell = document.createElement('div');
    cell.classList.add(`cell`);
    cell.addEventListener('mouseover', (e) => {
      cell.classList.add('trace');
    });
    container.appendChild(cell);
  }
}

function clearBoard() {
  clear.addEventListener('click', (e) => {
    cells.forEach((cell) => {
      cell.classList.remove('trace');
    });
  });
}

function removeCells() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
