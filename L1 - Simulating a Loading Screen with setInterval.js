// Start logging "Loading..." every 1 second
let intervalId = setInterval(function() {
    console.log("Loading...");
}, 1000);

// Stop logging after 5 seconds and print "Loaded successfully!"
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
}, 5000);
