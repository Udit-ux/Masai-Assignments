const userContainer = document.getElementById('user-container');
const paginationContainer = document.getElementById('pagination-buttons');

const USERS_PER_PAGE = 6;
const TOTAL_USERS = 10; // known from API
const TOTAL_PAGES = Math.ceil(TOTAL_USERS / USERS_PER_PAGE);

// Fetch user data for a specific page
async function fetchUsers(page = 1) {
  const url = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${USERS_PER_PAGE}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    renderUsers(data);
  } catch (error) {
    userContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

// Render user data into the DOM
function renderUsers(users) {
  userContainer.innerHTML = ''; // Clear previous users

  users.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('user-card');
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;
    userContainer.appendChild(div);
  });
}

// Create pagination buttons dynamically
function createPaginationButtons() {
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.addEventListener('click', () => fetchUsers(i));
    paginationContainer.appendChild(button);
  }
}

// Initial load
fetchUsers(1);
createPaginationButtons();
