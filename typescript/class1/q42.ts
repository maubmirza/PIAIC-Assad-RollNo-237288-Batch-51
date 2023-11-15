// Magicians Program
// Author: [Your Name]
// Date: [Current Date]

// Function to show magicians' names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Calling the function to show the magicians' names
show_magicians(magicianNames);
