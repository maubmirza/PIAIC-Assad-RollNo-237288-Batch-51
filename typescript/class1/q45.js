// Function to store information about a car in an object
function carInformation(manufacturer, modelName) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var carInfo = {
        Manufacturer: manufacturer,
        Model: modelName
    };
    for (var i = 0; i < details.length; i += 2) {
        carInfo[details[i]] = details[i + 1];
    }
    return carInfo;
}
// Storing information about a car
var carDetails = carInformation("Toyota", "Camry", "Color", "Red", "Optional Feature", "Sunroof");
// Printing the object with car information
console.log(carDetails);
