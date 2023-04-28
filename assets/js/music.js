/* This will be for the music*/
let prev_btn = document.querySelector(".prev-track");
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");

let current = 0;
let previous = -1;
let randomMusic;

// Create new audio element
let curr_track = document.createElement("audio");

// an array of music that is stored locally
let songList = [
  {
    path: "assets/music/City-Lights.mp3",
  },
  {
    path: "assets/music/Late-at-Night.mp3",
  },
  {
    path: "assets/music/Lost-and-Found.mp3",
  },
  {
    path: "assets/music/Lost-In-Thought.mp3",
  },
  {
    path: "assets/music/Morning-Routine.mp3",
  },
  {
    path: "assets/music/Purple-Dream.mp3",
  },
  {
    path: "assets/music/Way-Home.mp3",
  },
  {
    path: "assets/music/When-I-Was-A-Boy.mp3",
  },
];

// loads the music and plays in a random order
function loadTrack() {
  randomMusic = current;
  while (randomMusic === current) {
    randomMusic = Math.floor(Math.random() * songList.length);
  }
  current = randomMusic;

  curr_track.src = songList[current].path;
  curr_track.autoplay = true;
  curr_track.load();
  curr_track.play();

  previous = current;
  curr_track.addEventListener("ended", nextTrack);
}

// when a current track is playing change it to pause symbol
curr_track.addEventListener("play", function () {
  document.querySelector(".playpause-track").innerHTML =
    '<i class="fa-solid fa-pause" style="color: white;"></i>';
});

// when a current track is paused change it to a play symbol
curr_track.addEventListener("pause", function () {
  document.querySelector(".playpause-track").innerHTML =
    '<i class="fa-solid fa-play" style="color: white;"></i>';
});

// when the play or pause button is pressed
function playpauseTrack() {
  if (curr_track.paused) {
    curr_track.play();
    document.querySelector(".playpause-track").innerHTML =
      '<i class="fa-solid fa-pause" style="color: white;"></i>';
  } else {
    curr_track.pause();
    document.querySelector(".playpause-track").innerHTML =
      '<i class="fa-solid fa-play" style="color: white;"></i>';
  }
}

// goes to the next song
function nextTrack() {
  previous = current;
  randomMusic = current;
  while (randomMusic === current) {
    randomMusic = Math.floor(Math.random() * songList.length);
  }
  current = randomMusic;
  curr_track.src = songList[current];
  loadTrack();
  playTrack();
}

// goes back to the previous song
function prevTrack() {
  current = previous;
  curr_track.src = songList[current];
  loadTrack();
  playTrack();
}

// controls the volume
function setVolume() {
  curr_track.volume = document.querySelector(".volume_slider").value / 100;
}

// mutes the music when button is pressed
function toggleMute() {
  curr_track.muted = !curr_track.muted;
}

// Load the first track in the tracklist
loadTrack();
