// Cities Program
// Author: [Your Name]
// Date: [Current Date]
// Function to describe a city and its country
function describe_city(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("New York"); // Uses the default country
