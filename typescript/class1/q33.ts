// Store the numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    // Use an if-else chain to print the proper ordinal ending
    let ordinalEnding;

    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    // Print the result
    console.log(`${number}${ordinalEnding}`);
}
