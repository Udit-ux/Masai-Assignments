// Get references to the container and buttons
const container = document.getElementById('paragraph-container');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');

// Handle Add Paragraph button click
addBtn.addEventListener('click', () => {
  // Create a new paragraph element
  const para = document.createElement('p');
  
  // Set the text content of the paragraph
  para.textContent = 'This is a new paragraph.';

  // Add the paragraph to the container
  container.appendChild(para);
});

// Handle Remove Last Paragraph button click
removeBtn.addEventListener('click', () => {
  // Get the last paragraph in the container
  const lastPara = container.lastElementChild;

  // If there's a paragraph, remove it
  if (lastPara) {
    container.removeChild(lastPara);
  }
});
