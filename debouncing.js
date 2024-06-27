// Debounce function implementation
function debounce(func, delay) {
    let timerId;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Example usage: Debouncing a function that logs input value after a delay
const logInput = debounce(function (value) {
    console.log('Input value:', value);
}, 500);

// Simulating input events (e.g., user typing)
function simulateInput(value) {
    logInput(value);
}

// Simulating user input (e.g., typing in an input field)
simulateInput('First input');
simulateInput('Second input');
simulateInput('Third input');

// Only 'Third input' will be logged after 500ms from the last input
