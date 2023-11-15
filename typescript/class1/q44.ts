// Function to summarize the sandwich order
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with:");

    for (let item of items) {
        console.log(`- ${item}`);
    }

    console.log("Sandwich order complete!\n");
}

// Making different sandwiches by calling the function with varying numbers of arguments
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Ham", "Mustard");
makeSandwich("Turkey", "Bacon", "Avocado", "Onion");
