// Function to add "the Great" to magician names without modifying the original array
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }

    return greatMagicians;
}

// Function to show magicians' names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Original array of magician's names
let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Creating a new array with 'the Great' added to each magician's name without modifying the original array
let greatMagicianNames: string[] = make_great([...magicianNames]); // Use spread operator to create a copy

// Showing the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);

console.log("\nModified Magicians with 'the Great':");
show_magicians(greatMagicianNames);
