// Get reference to the select element
const themeSelect = document.getElementById("themeSelect");

// Function to apply theme styles dynamically
function applyTheme(theme) {
  if (theme === "light") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  } else if (theme === "dark") {
    document.body.style.backgroundColor = "#222222";
    document.body.style.color = "#f1f1f1";
  } else if (theme === "blue") {
    document.body.style.backgroundColor = "#007BFF";
    document.body.style.color = "#ffffff";
  }
}

// On page load, check sessionStorage for stored theme
window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = sessionStorage.getItem("selectedTheme");

  // Default to 'light' if no theme is stored
  const currentTheme = storedTheme || "light";

  // Apply the theme
  applyTheme(currentTheme);

  // Set the select value accordingly
  themeSelect.value = currentTheme;
});

// Add event listener to handle theme selection
themeSelect.addEventListener("change", () => {
  const selectedTheme = themeSelect.value;

  // Apply the selected theme
  applyTheme(selectedTheme);

  // Store the selected theme in sessionStorage
  sessionStorage.setItem("selectedTheme", selectedTheme);
});
