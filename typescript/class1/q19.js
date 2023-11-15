// Dinner Guests Program
// Author: [Your Name]
// Date: [Current Date]
// Original guest list
var guestList = ["Marie Curie", "Albert Einstein", "Leonardo da Vinci", "Ada Lovelace", "Nelson Mandela", "Galileo Galilei"];
// Print original invitation messages
console.log("Original Dinner Invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner. Please join us for a wonderful evening!"));
}
// Announce that only two people can be invited
console.log("\nDue to unexpected circumstances, we can only invite two people for dinner.");
// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print message indicating the number of people invited to dinner
console.log("\nNumber of people invited to dinner: ".concat(guestList.length));
// Print invitation messages for the two remaining guests
console.log("\nFinal Dinner Invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are still invited to dinner. Please join us for a wonderful evening!"));
}
