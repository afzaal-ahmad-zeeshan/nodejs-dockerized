// Just a stupid file.
let songs = [
    "Not Afraid", "Phenomenal", "Guts Over Fear", "Bad Husband", "River"
];

module.exports = { 
    getSongs: function() {
        return songs;
    }, 
    getSong: function(index) {
        try {
            return songs[index];
        } catch (error) {
            return "Songs are limited.";
        }
    }
};