/* This will be for the music*/
let prev_btn = document.querySelector(".prev-track");
let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");

let current = 0;
let isPlaying = false;

// Create new audio element
let curr_track = document.createElement("audio");

let songList = [
  {
    path: "assets/music/Soul.mp3",
  },
  {
    path: "assets/music/Late-at-Night.mp3",
  },
  {
    path: "assets/music/City-Lights.mp3",
  },
  {
    path: "assets/music/",
  },
  {
    path: "assets/music/",
  },
  {
    path: "assets/music/",
  },
  {
    path: "assets/music/",
  },
  {
    path: "assets/music/",
  },
  {
    path: "",
  },
  {
    path: "",
  },
  {
    path: "",
  },
  {
    path: "",
  },
  {
    path: "",
  },
];

function loadTrack(current) {
  curr_track.src = songList[current].path;
  curr_track.load();
  curr_track.addEventListener("ended", nextTrack);
}

// Load the first track in the tracklist
loadTrack(current);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

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

function nextTrack() {
  if (current < songList.length - 1) current += 1;
  else current = 0;
  loadTrack(current);
  playTrack();
}

function prevTrack() {
  if (current > 0) current -= 1;
  else current = songList.length;
  loadTrack(current);
  playTrack();
}

function setVolume() {
  curr_track.volume = document.querySelector(".volume_slider").value / 100;
}

function toggleMute() {
  curr_track.muted = !curr_track.muted;
}
