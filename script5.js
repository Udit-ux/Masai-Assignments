// References
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const sortBtn = document.getElementById('sortBtn');
const taskList = document.getElementById('taskList');
const allBtn = document.getElementById('allBtn');
const completedBtn = document.getElementById('completedBtn');
const incompleteBtn = document.getElementById('incompleteBtn');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const incompleteCount = document.getElementById('incompleteCount');

// Task Array (holds task objects)
let tasks = [];

// Current filter mode
let currentFilter = 'all';

// --- Add Task ---
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();

  if (text === '') {
    alert('Task cannot be empty!');
    return;
  }

  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(newTask);
  taskInput.value = '';
  renderTasks();
});

// --- Event Delegation for Toggle/Delete ---
taskList.addEventListener('click', (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains('delete')) {
    // Delete task
    tasks = tasks.filter(task => task.id !== id);
  } else if (e.target.classList.contains('toggle')) {
    // Toggle completed
    tasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  }

  renderTasks();
});

// --- Filter Buttons ---
allBtn.addEventListener('click', () => {
  currentFilter = 'all';
  renderTasks();
});

completedBtn.addEventListener('click', () => {
  currentFilter = 'completed';
  renderTasks();
});

incompleteBtn.addEventListener('click', () => {
  currentFilter = 'incomplete';
  renderTasks();
});

// --- Sort Alphabetically ---
sortBtn.addEventListener('click', () => {
  tasks.sort((a, b) => a.text.localeCompare(b.text));
  renderTasks();
});

// --- Render Tasks Based on Filter ---
function renderTasks() {
  // Filter based on current state using HOF `filter`
  let filteredTasks = tasks;

  if (currentFilter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (currentFilter === 'incomplete') {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  // Clear existing UI
  taskList.innerHTML = '';

  // Re-render tasks
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task';
    if (task.completed) li.classList.add('completed');

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="toggle" data-id="${task.id}">
          ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="delete" data-id="${task.id}">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });

  updateCounters();
}

// --- Update Counters ---
function updateCounters() {
  const completedTasks = tasks.filter(task => task.completed);
  const incompleteTasks = tasks.filter(task => !task.completed);

  totalCount.textContent = tasks.length;
  completedCount.textContent = completedTasks.length;
  incompleteCount.textContent = incompleteTasks.length;
}
