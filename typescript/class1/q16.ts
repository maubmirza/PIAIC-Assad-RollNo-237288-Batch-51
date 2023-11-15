// More Guests Program
// Author: [Your Name]
// Date: [Current Date]

// Original guest list
let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Print original invitation messages
console.log("Original Dinner Invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner. Please join us for a wonderful evening!`);
}

// Assume more space is available, and inform people about the bigger table
console.log("\nGreat news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
let newGuestAtBeginning: string = "Marie Curie";
guestList.unshift(newGuestAtBeginning);

// Add one new guest to the middle of the array
let newGuestInMiddle: string = "Leonardo da Vinci";
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);

// Use push() to add one new guest to the end of the array
let newGuestAtEnd: string = "Galileo Galilei";
guestList.push(newGuestAtEnd);

// Print new invitation messages
console.log("\nNew Dinner Invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner. Please join us for a wonderful evening!`);
}
