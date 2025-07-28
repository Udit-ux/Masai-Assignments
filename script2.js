const themeSelector = document.getElementById("themeSelector");
const body = document.body;

// Function to apply the selected theme
function applyTheme(theme) {
  body.className = ""; // Clear existing classes
  body.classList.add(`${theme}-theme`);
}

// Check sessionStorage on page load
window.onload = function () {
  const savedTheme = sessionStorage.getItem("selectedTheme") || "light";
  themeSelector.value = savedTheme;
  applyTheme(savedTheme);
};

// Listen for theme change
themeSelector.addEventListener("change", function () {
  const selectedTheme = themeSelector.value;
  sessionStorage.setItem("selectedTheme", selectedTheme);
  applyTheme(selectedTheme);
});
