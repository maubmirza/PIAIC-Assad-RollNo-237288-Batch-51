// Intentional Error Program
// Author: [Your Name]
// Date: [Current Date]

// Define book objects
let book1: { title: string, author: string, publicationYear: number } = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951
};

let book2: { title: string, author: string, publicationYear: number } = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960
};

let book3: { title: string, author: string, publicationYear: number } = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949
};

// Attempt to print information about a non-existent book (index out of bounds)
console.log("Book Information:");
console.log("4. Title:", book4.title); // Intentional error here
console.log("   Author:", book4.author);
console.log("   Publication Year:", book4.publicationYear);
