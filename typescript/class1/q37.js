// Large Shirts Program
// Author: [Your Name]
// Date: [Current Date]
// Function to create a T-shirt with default values
function make_shirt1(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("T-shirt summary: Size - ".concat(size, ", Message - \"").concat(message, "\""));
}
// Call the function with different scenarios
make_shirt1(); // Large shirt with default message
make_shirt1("Medium"); // Medium shirt with default message
make_shirt1("Small", "Hello, World!"); // Small shirt with a custom message
