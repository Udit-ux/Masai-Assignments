const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Generate unique ID
function generateId() {
  return Date.now().toString();
}

// Render all tasks
function renderTasks(taskArray) {
  taskList.innerHTML = "";
  taskArray.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = task.text;

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    // Toggle Complete Button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = task.completed ? "Undo" : "Done";
    toggleBtn.classList.add("toggle");
    toggleBtn.onclick = () => toggleTask(task.id);

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => deleteTask(task.id);

    actions.append(toggleBtn, deleteBtn);
    li.append(span, actions);
    taskList.appendChild(li);
  });
}

// Add new task
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Task cannot be empty.");
    return;
  }
  const newTask = {
    id: generateId(),
    text,
    completed: false
  };
  tasks.push(newTask);
  saveAndRender();
  taskInput.value = "";
});

// Toggle task status
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveAndRender();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveAndRender();
}

// Search functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(query)
  );
  renderTasks(filteredTasks);
});

// Save to localStorage and render
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(tasks);
}

// Initial render
renderTasks(tasks);
