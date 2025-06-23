// Constants
const todosContainer = document.getElementById('todos');
const paginationContainer = document.getElementById('pagination');
const TODOS_PER_PAGE = 10;
const TOTAL_TODOS = 200; // From API knowledge
const TOTAL_PAGES = Math.ceil(TOTAL_TODOS / TODOS_PER_PAGE);

// Fetch todos with pagination
async function fetchTodos(page = 1) {
  const start = (page - 1) * TODOS_PER_PAGE;
  const url = `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${TODOS_PER_PAGE}`;

  try {
    const response = await fetch(url);
    const todos = await response.json();
    renderTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    todosContainer.innerHTML = "<p>Failed to load todos.</p>";
  }
}

// Render todos in DOM
function renderTodos(todos) {
  todosContainer.innerHTML = ""; // Clear old data

  todos.forEach(todo => {
    const div = document.createElement('div');
    div.className = `todo ${todo.completed ? 'completed' : ''}`;
    div.innerHTML = `
      <strong>${todo.title}</strong><br>
      Completed: ${todo.completed ? '✅' : '❌'}
    `;
    todosContainer.appendChild(div);
  });
}

// Create pagination buttons
function createPagination() {
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.addEventListener('click', () => fetchTodos(i));
    paginationContainer.appendChild(btn);
  }
}

// Initial Load
fetchTodos(1);
createPagination();
