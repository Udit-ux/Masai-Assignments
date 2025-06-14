// Select DOM elements
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const bgBtn = document.getElementById("bg-btn");
const textBtn = document.getElementById("text-btn");
const displayDiv = document.getElementById("display-div");

/**
 * Checks if a given color string is a valid CSS color.
 * @param {string} color - The color name or value to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function isValidColor(color) {
  const temp = document.createElement("div");
  temp.style.color = color;
  return temp.style.color !== '';
}

// Event listener for background color change
bgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (isValidColor(color)) {
    displayDiv.style.backgroundColor = color;
  } else {
    alert("Invalid color name!");
  }
});

// Event listener for text update
textBtn.addEventListener("click", () => {
  const newText = textInput.value.trim();
  if (newText === "") {
    alert("Please enter some text!");
  } else {
    displayDiv.textContent = newText;
  }
});
