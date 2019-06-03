# liri-node-app
Week 10 Homework: Node.js

The Liri Node app takes in commands from the command line and returns data. This app is designed to return information about bands on tour, songs, and movies. 

# APIs used:
 
* Bands in Town
* Spotify
* OMDb (Open Movie Database)

# NPMs used:

* Axios
* Moment (currently not working as expected)
* DotEnv
* console.table

The app is designed to return data when the following commands are entered into the command line:

* `concert-this` (followed by the name of a band or artist)

* `spotify-this-song` (followed by the name of a song)

* `movie-this` (followed by the name of a movie)

* `do-what-it-says` (currently not working as expected)

# Screenshots

Here's how the `concert-this` command works:

**Command**: `node liri.js concert-this the rolling stones`

Returns:

![image](https://user-images.githubusercontent.com/47165960/58774645-567ac680-8577-11e9-8384-f19f684863d7.png)

**Command**: `spotify-this-song`

Returns:

![image](https://user-images.githubusercontent.com/47165960/58774732-c5f0b600-8577-11e9-94bd-cd20e9dc3d97.png)

**Command**: `movie-this`

Returns:

![image](https://user-images.githubusercontent.com/47165960/58775122-e40ae600-8578-11e9-9303-85f802e5d916.png)

# Still needs work

The following things aren't working as expected:

* `do-what-it-says` 
* Returning "I Saw the Sign" when no song is entered
* Returning "Mr. Nobody" when no movie is entered
