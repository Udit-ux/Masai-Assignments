function fetchUserData(callback) {
  console.log("Fetching user data...");

  setTimeout(() => {
    const userData = "User data received";
    console.log(userData);
    callback();
  }, 1000); // 1 second delay
}

function fetchUserPosts(callback) {
  console.log("Fetching user posts...");

  setTimeout(() => {
    const postsData = "User posts received";
    console.log(postsData);
    callback();
  }, 1500); // 1.5 seconds delay
}

// Calling the functions with nested callbacks
fetchUserData(() => {
  fetchUserPosts(() => {
    console.log("All data loaded successfully!");
  });
});
