/*This functions changes the background image when the button is pressed*/
var isBackground = true;

function changeBackground() {
    var images = document.querySelector('body');
    if (isBackground) {
        images.style.backgroundImage = "url(/images/nightsky_lofi.jpg)";
        isBackground = false;
    } else {
        images.style.backgroundImage = "url(/images/daytime_lofi.jpg)";
        isBackground = true;
    }
}

/* This will be for the music*/
const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const skipBtn = document.getElementById("skip-btn");
const repeatBtn = document.getElementById("repeat-btn");
const songTitle = document.getElementById("song-title");

let trackIndex = 0;
let songs = ["Soul", "DO-IT", "Lazy-AfterNoon", "silent-wood", "Whistle"];
songTitle.innerHTML = songs[trackIndex];

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = "Play";
    }
}

function skip() {
    trackIndex++;
    if (trackIndex >= songs.length) {
        trackIndex = 0;
    }
    audioPlayer.src = `song${trackIndex+1}.mp3`;
    songTitle.innerHTML = songs[trackIndex];
    audioPlayer.play();
    playPauseBtn.innerHTML = "Pause";
}

function repeat() {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    playPauseBtn.innerHTML = "Pause";
}

playPauseBtn.addEventListener("click", playPause);
skipBtn.addEventListener("click", skip);
repeatBtn.addEventListener("click", repeat);