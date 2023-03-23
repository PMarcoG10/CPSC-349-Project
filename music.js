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
    path: "/music/Soul.mp3",
  },
  {
    path: "/music/Whistle.mp3",
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
  document.querySelector(".playpause-track").innerHTML = '<i class="fa-solid fa-circle-pause fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  document.querySelector(".playpause-track").innerHTML = '<i class="fa-solid fa-circle-play fa-5x"></i>';
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
