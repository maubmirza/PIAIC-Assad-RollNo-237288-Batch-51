// Cities Program
// Author: [Your Name]
// Date: [Current Date]

// Function to describe a city and its country
function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("New York"); // Uses the default country
