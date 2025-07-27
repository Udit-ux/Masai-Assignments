// Get reference to "Item 2"
const item2 = document.getElementById('item2');

// Add click event listener to Item 2
item2.addEventListener('click', () => {
  // 1. Alert the text content of its parent node (<ul>)
  const parent = item2.parentNode;
  alert(`Parent content: ${parent.textContent.trim()}`);

  // 2. Log the previous sibling (<li>)'s text
  const prevSibling = item2.previousElementSibling;
  if (prevSibling) {
    console.log('Previous Sibling:', prevSibling.textContent);
  }

  // 3. Log the next sibling (<li>)'s text
  const nextSibling = item2.nextElementSibling;
  if (nextSibling) {
    console.log('Next Sibling:', nextSibling.textContent);
  }
});
