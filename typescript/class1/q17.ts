// Shrinking Guest List Program
// Author: [Your Name]
// Date: [Current Date]

// Original guest list
let guestList: string[] = ["Marie Curie", "Albert Einstein", "Leonardo da Vinci", "Ada Lovelace", "Nelson Mandela", "Galileo Galilei"];

// Print original invitation messages
console.log("Original Dinner Invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner. Please join us for a wonderful evening!`);
}

// Announce that only two people can be invited
console.log("\nDue to unexpected circumstances, we can only invite two people for dinner.");

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages for the two remaining guests
console.log("\nFinal Dinner Invitations:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are still invited to dinner. Please join us for a wonderful evening!`);
}

// Remove the last two names to have an empty list
guestList.pop();
guestList.pop();

// Print the empty list
console.log("\nEmpty Guest List:");
console.log(guestList);
