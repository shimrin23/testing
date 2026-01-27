let counter = 0;
let isDarkTheme = false;

function greet() {
    const output = document.getElementById('output');
    output.textContent = 'Hello from the main branch!';
}

function calculateSum(a, b) {
    return a + b;
}

function displayMessage(message) {
    console.log(message);
}

// Counter functions
function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    document.getElementById('counter').textContent = counter;
}

// Theme toggle
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme');
}
