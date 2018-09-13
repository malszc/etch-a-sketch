const container = document.querySelector('.grid-container');
const clear = document.querySelector('#clear');

generateCells(16);

const cells = document.querySelectorAll('.cell');

clear.addEventListener('click', (e) => {
  cells.forEach((cell) => {
    cell.classList.remove('trace');
  });
});



cells.forEach((cell) => {
  cell.addEventListener('mouseover', (e) => {
    cell.classList.add('trace');
  });
});

function generateCells(gridSize) {
  for(let i = 0; i < Math.pow(gridSize, 2); i++){
    const cell = document.createElement('div');
    cell.classList.add(`cell`);
    container.appendChild(cell);
  }
}
