const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Generate a unique ID for each task
function generateId() {
  return Date.now().toString();
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render tasks to the DOM
function renderTasks(filter = "") {
  taskList.innerHTML = "";

  tasks
    .filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
    .forEach(task => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";
      li.textContent = task.text;

      const completeBtn = document.createElement("button");
      completeBtn.textContent = task.completed ? "Undo" : "Complete";
      completeBtn.className = "complete";
      completeBtn.onclick = () => toggleComplete(task.id);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete";
      deleteBtn.onclick = () => deleteTask(task.id);

      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
}

// Add new task
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return alert("Task cannot be empty.");

  const newTask = {
    id: generateId(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

// Toggle completion status
function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks(searchInput.value);
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks(searchInput.value);
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
searchInput.addEventListener("input", () => renderTasks(searchInput.value));

// Initial render
renderTasks();
