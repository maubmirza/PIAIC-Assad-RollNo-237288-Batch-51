// Changing Guest List Program
// Author: [Your Name]
// Date: [Current Date]
// Original guest list
var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
// Print original invitation messages
console.log("Original Dinner Invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner. Please join us for a wonderful evening!"));
}
// Assume that one guest can't make it, and update the guest list
var guestCannotMakeIt = "Ada Lovelace";
var replacementGuest = "Marie Curie";
// Update the guest list
guestList = guestList.map(function (guest) { return (guest === guestCannotMakeIt ? replacementGuest : guest); });
// Print updated invitation messages
console.log("\nUpdated Dinner Invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner. Please join us for a wonderful evening!"));
}

