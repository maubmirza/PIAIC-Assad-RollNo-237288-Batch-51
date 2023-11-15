// Seeing the World Program
// Author: [Your Name]
// Date: [Current Date]

// Array of places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Machu Picchu", "Sydney"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);

// Reverse the order of the list
console.log("\nReversed Order:");
placesToVisit.reverse();
console.log(placesToVisit);

// Reverse the order of the list again
console.log("\nReversed Order Again:");
placesToVisit.reverse();
console.log(placesToVisit);

// Sort the array in alphabetical order
console.log("\nSorted in Alphabetical Order:");
placesToVisit.sort();
console.log(placesToVisit);

// Sort to change the array in reverse alphabetical order
console.log("\nSorted in Reverse Alphabetical Order:");
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log(placesToVisit);
