const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const listItems = ingredients.map((ingredient) => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item'); 
  return newItem;
});


  listEl.append(...listItems);


