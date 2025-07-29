// Get references to DOM elements
const form = document.getElementById('postForm');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');
const responseDiv = document.getElementById('response');

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  // Validate fields
  if (!title || !body) {
    alert('Both Title and Body are required.');
    return;
  }

  // Prepare data to send
  const postData = {
    title: title,
    body: body,
    userId: 1  // Simulating a userId
  };

  // Send POST request
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(data => {
    // Show the response on the page
    responseDiv.innerHTML = `
      <h3>Post Created Successfully</h3>
      <p><strong>ID:</strong> ${data.id}</p>
      <p><strong>Title:</strong> ${data.title}</p>
      <p><strong>Body:</strong> ${data.body}</p>
    `;
    form.reset(); // Clear the form
  })
  .catch(err => {
    console.error('Error:', err);
    responseDiv.innerHTML = `<p style="color: red;">Failed to create post.</p>`;
  });
});
