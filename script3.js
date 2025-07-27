// --- EVENT PROPAGATION NOTES ---
// Capturing Phase: Event moves from the document → root → target (top-down).
// Bubbling Phase: Event moves from target → up to root (bottom-up).
// By default, addEventListener() listens in bubbling phase (unless 'capture: true' is specified).

// --- DIV LISTENERS ---

// Outer Div
document.getElementById('outer').addEventListener('click', () => {
  alert('Clicked on Outer Div (Bubbling)');
});

// Capturing listener for Outer Div
document.getElementById('outer').addEventListener('click', () => {
  alert('Captured on Outer Div');
}, true); // 'true' enables capturing phase

// Middle Div
document.getElementById('middle').addEventListener('click', () => {
  alert('Clicked on Middle Div (Bubbling)');
});

document.getElementById('middle').addEventListener('click', () => {
  alert('Captured on Middle Div');
}, true);

// Inner Div
document.getElementById('inner').addEventListener('click', () => {
  alert('Clicked on Inner Div (Bubbling)');
});

document.getElementById('inner').addEventListener('click', () => {
  alert('Captured on Inner Div');
}, true);

// --- BUTTON LISTENERS ---

// Outer Button
document.getElementById('outerBtn').addEventListener('click', (e) => {
  alert('Clicked Outer Button');
  // Allow event to bubble
});

// Middle Button
document.getElementById('middleBtn').addEventListener('click', (e) => {
  alert('Clicked Middle Button');
  // Allow event to bubble
});

// Inner Button
document.getElementById('innerBtn').addEventListener('click', (e) => {
  alert('Clicked Inner Button');

  // STOP PROPAGATION: This prevents the event from reaching parent elements
  e.stopPropagation();
});
