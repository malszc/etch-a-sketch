const container = document.querySelector('.grid-container');
let gridSize = 16;

for(let i = 0; i < Math.pow(gridSize, 2); i++){
  const cell = document.createElement('div');
  cell.classList.add(`cell`);
  container.appendChild(cell);
}