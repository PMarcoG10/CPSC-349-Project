/* This will be for the music*/
var prev = document.querySelector('.prev');
var playPause = document.querySelector('.playPause');
var next = document.querySelector('.next');
var audio = document.getElementById('myAudio');

var current = 0;

var songList = [
    "/music/Soul.mp3",
    "/music/Whistle.mp3"
];

function playPause() {
    if (audio.pause) {
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

audio.addEventListener('ended', function() {
    nextSong();
});