// Simulating a browser-like environment for demonstration
const simulatedDocument = {
    addEventListener: function (eventName, handler) {
        // Simulate mouseover event listener
        if (eventName === 'mouseover') {
            // Simulate mouse movement
            setInterval(() => {
                // Simulate mouse event object
                const event = {
                    clientX: Math.floor(Math.random() * 100), // Random X coordinate
                    clientY: Math.floor(Math.random() * 100)  // Random Y coordinate
                };
                handler(event); // Call the handler with simulated mouse event
            }, 500); // Simulate mouse movement every 500ms
        }
    }
};

// Throttle function implementation
function throttle(func, delay) {
    let lastExecTime = 0;
    let timeoutId;

    return function () {
        const context = this;
        const args = arguments;
        const currentTime = new Date().getTime();

        if (currentTime - lastExecTime < delay) {
            // Still within the delay period, do nothing
            return;
        }

        // Execute the function
        func.apply(context, args);
        lastExecTime = currentTime;
    };
}

// Example usage: Throttling a function that displays mouse coordinates
const displayCoordinates = throttle(function (event) {
    console.log(`Mouse coordinates: (${event.clientX}, ${event.clientY})`);
}, 100); // Adjust the delay (in milliseconds) as needed

// Add event listener to track mouse movements (mouseover)
simulatedDocument.addEventListener('mouseover', displayCoordinates);
