const notesArea = document.getElementById("notesArea");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

// Load notes from localStorage on page load
window.onload = function () {
  const savedNotes = localStorage.getItem("userNotes");
  if (savedNotes) {
    notesArea.value = savedNotes;
  }
};

// Save notes to localStorage
saveBtn.addEventListener("click", function () {
  const noteText = notesArea.value.trim();
  if (noteText === "") {
    alert("Cannot save empty notes!");
  } else {
    localStorage.setItem("userNotes", noteText);
    alert("Notes saved successfully!");
  }
});

// Load notes from localStorage when button clicked
loadBtn.addEventListener("click", function () {
  const savedNotes = localStorage.getItem("userNotes");
  if (savedNotes) {
    notesArea.value = savedNotes;
    alert("Notes loaded!");
  } else {
    alert("No saved notes found.");
  }
});

// Clear notes from localStorage and textarea
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("userNotes");
  notesArea.value = "";
  alert("Notes cleared.");
});
