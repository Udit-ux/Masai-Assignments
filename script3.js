// Select elements
const colorInput = document.getElementById('color-input');
const textInput = document.getElementById('text-input');
const changeBgButton = document.getElementById('change-bg-btn');
const updateTextButton = document.getElementById('update-text-btn');
const mainBox = document.getElementById('main-box');

// Change background color
changeBgButton.addEventListener('click', () => {
  const color = colorInput.value.trim();

  // Create a temporary element to test if color is valid
  const test = document.createElement('div');
  test.style.backgroundColor = color;

  if (test.style.backgroundColor) {
    mainBox.style.backgroundColor = color;
  } else {
    alert('Invalid color name!');
  }
});

// Update text content
updateTextButton.addEventListener('click', () => {
  const text = textInput.value.trim();

  if (text === '') {
    alert('Please enter some text!');
  } else {
    mainBox.textContent = text;
  }
});
