// Album Program
// Author: [Your Name]
// Date: [Current Date]
// Function to create an album object
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // Check if tracks parameter is provided and add it to the album object if available
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2", 12);
var album3 = make_album("Artist 3", "Album 3", 8);
// Print each return value to show the album information stored in
