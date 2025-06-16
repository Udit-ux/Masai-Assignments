// Get references to DOM elements
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

// KEY used for localStorage
const NOTES_KEY = "userNotes";

// Function to load notes on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedNotes = localStorage.getItem(NOTES_KEY);
  if (savedNotes) {
    noteInput.value = savedNotes;
  }
});

// Save notes to localStorage
saveBtn.addEventListener("click", () => {
  const notes = noteInput.value.trim();

  // Validate that the textarea is not empty
  if (notes === "") {
    alert("Cannot save empty notes.");
    return;
  }

  localStorage.setItem(NOTES_KEY, notes);
  alert("Notes saved successfully!");
});

// Load notes manually using the button
loadBtn.addEventListener("click", () => {
  const savedNotes = localStorage.getItem(NOTES_KEY);
  if (savedNotes) {
    noteInput.value = savedNotes;
    alert("Notes loaded.");
  } else {
    alert("No notes found in storage.");
  }
});

// Clear notes from localStorage
clearBtn.addEventListener("click", () => {
  localStorage.removeItem(NOTES_KEY);
  noteInput.value = "";
  alert("Notes cleared.");
});
