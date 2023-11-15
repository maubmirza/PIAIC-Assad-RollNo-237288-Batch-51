// Seeing the World Program
// Author: [Your Name]
// Date: [Current Date]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of places to visit
var placesToVisit = ["Tokyo", "Paris", "New York", "Machu Picchu", "Sydney"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order
console.log("\nStill in Original Order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log(placesToVisit);
