// City Names Program
// Author: [Your Name]
// Date: [Current Date]

// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function for different city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Paris", "France");
let city3 = city_country("New York", "USA");

// Print the formatted city-country pairs
console.log(city1);
console.log(city2);
console.log(city3);
