// Get reference to the UL where we will show the users
const userList = document.getElementById('userList');

// Fetch users from the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Convert response to JSON
  .then(users => {
    // Iterate through each user
    users.forEach(user => {
      // Create a list item
      const li = document.createElement('li');
      li.textContent = user.name;

      // Add a click event listener to show email in an alert
      li.addEventListener('click', () => {
        alert(`Email: ${user.email}`);
      });

      // Append the list item to the UL
      userList.appendChild(li);
    });
  })
  .catch(error => {
    // Handle any error that occurs while fetching data
    console.error('Error fetching users:', error);
  });
