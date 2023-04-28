/* This will be for the music*/
let prev_btn = document.querySelector(".prev-track");
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");

let current = 0;
let previous = -1;
let randomMusic;
let isPlaying = false;

// Create new audio element
let curr_track = document.createElement("audio");

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

  curr_track.addEventListener("ended", nextTrack);
  previous = current;
}

curr_track.addEventListener("play", function () {
  document.querySelector(".playpause-track").innerHTML =
    '<i class="fa-solid fa-pause" style="color: white;"></i>';
});

curr_track.addEventListener("pause", function () {
  document.querySelector(".playpause-track").innerHTML =
    '<i class="fa-solid fa-play" style="color: white;"></i>';
});

function playTrack() {
  curr_track.play();
  isPlaying = true;
  document.querySelector(".playpause-track").innerHTML =
    '<i class="fa-solid fa-pause" style="color: white;"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  document.querySelector(".playpause-track").innerHTML =
    '<i class="fa-solid fa-play" style="color: white;"></i>';
}

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

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

function prevTrack() {
  current = previous;
  curr_track.src = songList[current];
  loadTrack();
  playTrack();
}

function setVolume() {
  curr_track.volume = document.querySelector(".volume_slider").value / 100;
}

function toggleMute() {
  curr_track.muted = !curr_track.muted;
}

// Load the first track in the tracklist
loadTrack();