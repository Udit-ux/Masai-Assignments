// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Handle Add Task button click
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create <li> element
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create "Complete" button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.classList.add('task-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed'); // Toggle completed class
  });

  // Create "Delete" button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('task-btn');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li); // Remove the task
  });

  // Append buttons to li
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Add li to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';
});
