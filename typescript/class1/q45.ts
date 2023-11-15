// Function to store information about a car in an object
function carInformation(manufacturer, modelName, ...details) {
    let carInfo = {
        Manufacturer: manufacturer,
        Model: modelName
    };

    for (let i = 0; i < details.length; i += 2) {
        carInfo[details[i]] = details[i + 1];
    }

    return carInfo;
}

// Storing information about a car
let carDetails = carInformation("Toyota", "Camry", "Color", "Red", "Optional Feature", "Sunroof");

// Printing the object with car information
console.log(carDetails);
