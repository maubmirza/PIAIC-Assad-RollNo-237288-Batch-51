// Large Shirts Program
// Author: [Your Name]
// Date: [Current Date]

// Function to create a T-shirt with default values
function make_shirt1(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`T-shirt summary: Size - ${size}, Message - "${message}"`);
}

// Call the function with different scenarios
make_shirt1(); // Large shirt with default message
make_shirt1("Medium"); // Medium shirt with default message
make_shirt1("Small", "Hello, World!"); // Small shirt with a custom message
