const ul = document.querySelector('#item-list');
const button = document.querySelector('#add-button');

button.addEventListener('click', () => {
  const newItem = document.createElement('li');
  const itemCount = ul.children.length + 1;
  newItem.textContent = `Item ${itemCount}`;

  // Apply style based on even/odd
  if (itemCount % 2 === 0) {
    newItem.classList.add('even');
  } else {
    newItem.classList.add('odd');
  }

  ul.appendChild(newItem);
});
