// Store at least three different animals that have a common characteristic
const animals = ["Dog", "Cat", "Rabbit"];

// Use a for loop to print out the name of each animal
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

// Modify the program to print a statement about each animal
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

// Add a line at the end of the program stating what these animals have in common
console.log("Any of these animals would make a great pet!");
