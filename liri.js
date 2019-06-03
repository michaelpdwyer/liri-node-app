// Read and set environment variables with the dotenv package
require("dotenv").config();

// Import the keys.js file and store it in a variable
var keys = require("./keys");

// Import songs from Spotify
var Spotify = require("node-spotify-api");
var cTable = require("console.table");
var request = require("request");

// Variable for accessing Spotify keys info
var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});


// Take in command to search for a concert
if (process.argv[2] === "concert-this") {

    var artist = process.argv.slice(3).join(" ");
    console.log(artist);

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function (error, response, body) {
        if (error) console.log(error);
        var result = JSON.parse(body)[0];
        console.log("Venue: " + result.venue.name);
        console.log("Location: " + result.venue.city);
        console.log("Date: " + moment(result.datetime).format("MM/DD/YYYY"));

    });

}

// Take in a command to search a song on Spotify
else if (process.argv[2] === "spotify-this-song") {

    var songName = process.argv.slice(3).join(" ");

    // Return "The Sign" if no song entered
    if (songName === undefined) {
        songName = "The Sign by Ace of Base";
    }


    spotify.search({ type: "track", query: songName, limit: 10 }, function (err, data) {
        if (err) {
            return console.log("Error: " + err);
        }

        var tableArray = [];

        for (var i = 0; i < data.tracks.items.length; i++) {
            var result = {
                artist: data.tracks.items[i].album.artists[0].name,
                album_name: data.tracks.items[i].album.name,
                song_name: data.tracks.items[i].name,
                preview_url: data.tracks.items[i].preview_url
            };

            tableArray.push(result);

        }

        var table = cTable.getTable(tableArray);

        console.log(table);

    });

}

// Take in a command to search a movie from OMDB
else if (process.argv[2] === "movie-this") {
    var movieName = process.argv.slice(3).join(" ");

    // Return "Mr. Nobody" if no movie entered
    if (movieName == undefined) {
        movieName = "Mr. Nobody";
    }

    request('http://www.omdbapi.com/?i=tt3896198&apikey=trilogy&t=' + process.argv[3], function (error, response, body) {

        var result = JSON.parse(body);
        console.log("Title: " + result.Title);
        console.log("Year: " + result.Released);
        console.log("IMDB Rating: " + result.imdbRating);
        console.log("Rotten Tomatoes Score:" + result.Ratings[1].Value);
        console.log("Country: " + result.Country);
        console.log("Language: " + result.Language);
        console.log("Description: " + result.Plot);
        console.log("Cast: " + result.Actors);

    });

}

// Command for "do what it says"
else if (process.argv[2] === "do-what-it-says") {
    console.log("do what it says");
}