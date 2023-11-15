var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to add "the Great" to magician names without modifying the original array
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
// Function to show magicians' names
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Original array of magician's names
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Creating a new array with 'the Great' added to each magician's name without modifying the original array
var greatMagicianNames = make_great(__spreadArray([], magicianNames, true)); // Use spread operator to create a copy
// Showing the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians with 'the Great':");
show_magicians(greatMagicianNames);
