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
        const userPosts = "User posts received";
        console.log(userPosts);
        callback();
    }, 1500); // 1.5 second delay
}

// Start the sequence
fetchUserData(() => {
    fetchUserPosts(() => {
        console.log("All data loaded successfully!");
    });
});
