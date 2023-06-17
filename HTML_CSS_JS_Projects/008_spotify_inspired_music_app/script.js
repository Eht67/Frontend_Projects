// variables and constants.
const play_circle_svg_path_string = `<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>`

const pause_circle_svg_path_string = `<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>`

let songIndex = 0;
let songFile = new Audio('music/01 - As You Fade Away - NEFFEX.mp3');

// fetching elements from DOM
let masterPlay = document.getElementById('masterPlay');
let musicWave = document.getElementById('musicWave');
let currentTimeTextBox = document.getElementById('currentTimeText');
let songLengthTextBox = document.getElementById('songLengthText');
let containerMain = document.getElementsByClassName('container')[0];
let songNameContainer = document.getElementById('songName');
let bottom = document.getElementById('bottom');
let songProgressBar = document.getElementById('songProgressBar');

// Get all the play buttons
const playButtons = document.getElementsByClassName('playCircle');

// Define an array of song URLs
const songURLs = [
  'music/01 - As You Fade Away - NEFFEX.mp3',
  'music/02 - Broken Ladder - Jeremy Black.mp3',
  'music/03 - Coast - Anno Domini Beats.mp3',
  'music/04 - Contrast - Anno Domini Beats.mp3',
  'music/05 - Culture - Anno Domini Beats.mp3',
  'music/06 - Enough - NEFFEX.mp3',
  'music/07 - Fat Man - Yung Logos.mp3',
  'music/08 - Free Me (Instrumental) - NEFFEX.mp3',
  'music/09 - Glass - Anno Domini Beats.mp3',
  'music/10 - Good Days - Yung Logos.mp3',
  'music/11 - Illusions - Anno Domini Beats.mp3',
  'music/12 - In Five Straight Rows - Mini Vandals.mp3',
  'music/13 - Never Surrender - Anno Domini Beats.mp3',
  'music/14 - Pray - Anno Domini Beats.mp3',
  'music/15 - Sinister - Anno Domini Beats.mp3',
  'music/16 - Skylines - Anno Domini Beats.mp3',
  'music/17 - Statement - NEFFEX.mp3',
  'music/18 - Warzone - Anno Domini Beats.mp3',
  'music/19 - Winning - NEFFEX.mp3'
];

// Define an array to store the audio objects
const songs = [];

// Define an array to keep track of song playing status
const isSongPlaying = [];

// Preload the audio and create audio objects
for (let i = 0; i < songURLs.length; i++) {
  const song = new Audio();
  songs.push(song);
  isSongPlaying.push(false);
  songs[i].src = songURLs[i];
}

// Define an array to store the current playback position of each song
const songPlaybackPositions = [];

// Add event listeners to each button
for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('click', function () {
    // Check if the song is playing
    if (isSongPlaying[i]) {
      // Pause the song
      songs[i].pause();
      playButtons[i].innerHTML = play_circle_svg_path_string;
      isSongPlaying[i] = false;
      musicWave.style.opacity = 0;
    } else {
      // Stop any currently playing songs
      stopAllSongs();

      if (songPlaybackPositions[i] !== undefined) {
        songs[i].currentTime = songPlaybackPositions[i];
      } else {
        // Set the playback position to 0 if it's the first time playing
        songPlaybackPositions[i] = 0;
      }

      // set cirrent position for pause
      let current_song_pause_position =

        // Play the respective song
        songs[i].play().catch(error => {
          // Handle the error, e.g., show an error message
          console.error('Error playing the song:', error);
        });
      isSongPlaying[i] = true;
      playButtons[i].innerHTML = pause_circle_svg_path_string;
      musicWave.style.opacity = 1;
      songNameContainer.innerHTML = songURLs[i].substring(6);
      let song_minutes = Math.floor(songs[i].duration / 60);
      let song_seconds = Math.floor(songs[i].duration % 60);
      let song_minutes_formatted = song_minutes < 10 ? `0${song_minutes}` : song_minutes;
      let song_seconds_formated = song_seconds < 10 ? `0${song_seconds}` : song_seconds;
      songLengthTextBox.innerHTML = `${song_minutes_formatted}:${song_seconds_formated}`;

      // update the progress bar acoording to song position
      songs[i].addEventListener('timeupdate', function () {
        let song_parts_per_million = (songs[i].currentTime / songs[i].duration) * 1000000;
        console.log(song_parts_per_million);
        songProgressBar.value = song_parts_per_million;
        let current_song_minutes = Math.floor(songs[i].currentTime / 60);
        let current_song_seconds = Math.floor(songs[i].currentTime % 60);
        let current_song_minutes_formatted = current_song_minutes < 10 ? `0${current_song_minutes}` : current_song_minutes;
        let current_song_seconds_formated = current_song_seconds < 10 ? `0${current_song_seconds}` : current_song_seconds;
        currentTimeTextBox.innerHTML = `${current_song_minutes_formatted}:${current_song_seconds_formated}`;

      });
    }
  });
}

// Function to stop all songs
function stopAllSongs() {
  for (let i = 0; i < songs.length; i++) {
    songs[i].pause();
    songs[i].currentTime = 0;
    isSongPlaying[i] = false;
    playButtons[i].innerHTML = play_circle_svg_path_string;
  }
}