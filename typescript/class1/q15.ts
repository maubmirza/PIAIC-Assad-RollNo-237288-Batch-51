// Changing Guest List Program
// Author: [Your Name]
// Date: [Current Date]

// Original guest list
let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Print original invitation messages
console.log("Original Dinner Invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner. Please join us for a wonderful evening!`);
}

// Assume that one guest can't make it, and update the guest list
let guestCannotMakeIt: string = "Ada Lovelace";
let replacementGuest: string = "Marie Curie";

// Update the guest list
guestList = guestList.map((guest) => (guest === guestCannotMakeIt ? replacementGuest : guest));

// Print updated invitation messages
console.log("\nUpdated Dinner Invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner. Please join us for a wonderful evening!`);
}
