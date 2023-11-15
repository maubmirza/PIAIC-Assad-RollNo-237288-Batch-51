// More Conditional Tests Program
// Author: [Your Name]
// Date: [Current Date]

// Example variables for testing
let string1: string = "apple";
let string2: string = "orange";
let numericValue1: number = 42;
let numericValue2: number = 25;
let arrayItems: string[] = ["apple", "banana", "cherry"];

// Tests for equality and inequality with strings
console.log("Test 5: String Equality");
if (string1 === string2) {
    console.log("Prediction: The strings are equal.");
} else {
    console.log("Prediction: The strings are not equal.");
}

// Tests using the lowercase function
console.log("\nTest 6: String Lowercase");
if (string1.toLowerCase() === "apple") {
    console.log("Prediction: The string is 'apple' in lowercase.");
} else {
    console.log("Prediction: The string is not 'apple' in lowercase.");
}

// Numerical tests
console.log("\nTest 7: Numeric Tests");
console.log("Prediction: Numeric Value 1 is greater than Numeric Value 2.");
console.log("Prediction: Numeric Value 1 is not equal to Numeric Value 2.");
console.log("Prediction: Numeric Value 1 is greater than or equal to Numeric Value 2.");
console.log("Prediction: Numeric Value 1 is not less than or equal to Numeric Value 2.");

// Tests using "and" and "or" operators
console.log("\nTest 8: Logical Operators");
if (numericValue1 > 30 && numericValue2 < 30) {
    console.log("Prediction: Both conditions are true.");
} else {
    console.log("Prediction: At least one condition is false.");
}

if (numericValue1 > 30 || numericValue2 > 30) {
    console.log("Prediction: At least one condition is true.");
} else {
    console.log("Prediction: Both conditions are false.");
}

// Test whether an item is in an array
console.log("\nTest 9: Item in Array");
if (arrayItems.includes("banana")) {
    console.log("Prediction: 'banana' is in the array.");
} else {
    console.log("Prediction: 'banana' is not in the array.");
}

// Test whether an item is not in an array
console.log("\nTest 10: Item not in Array");
if (!arrayItems.includes("kiwi")) {
    console.log("Prediction: 'kiwi' is not in the array.");
} else {
    console.log("Prediction: 'kiwi' is in the array.");
}
