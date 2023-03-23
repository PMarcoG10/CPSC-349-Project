/* This will be for the music*/
var prev = document.getElementById('P');
var playPause = document.getElementById('PP');
var next = document.getElementById('N');
var audio = document.getElementById('audio');

var current = 0;
var playing = false;

var songList = [
    "/music/Soul.mp3",
    "/music/Whistle.mp3"
];

function playPause() {
    if (playing = true) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    current++;
    if (current >= songList.length) {
        current = 0;
    }
    audio.src = songList[current];
    audio.play();
}

function prevSong() {
    current--;
    if (current < 0) {
        current = songList.length - 1;
    }

    audio.src = songList[current];
    audio.play();
}