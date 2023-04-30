function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const firstElSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    const nextElSize = firstElSize + i * 10;

    newBox.style.width = `${nextElSize}px`;
    newBox.style.height = `${nextElSize}px`;
    newBox.style.backgroundColor  = getRandomHexColor();
    divBoxesEl.append(newBox);
  }
 
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes();
});

