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

/* This will be for the promodoro timer*/
var pomodoro = {
    started : false,
    minutes : 0,
    seconds : 0,
    fillerHeight : 0,
    fillerIncrement : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    fillerDom : null,
    init : function(){
      var self = this;
      this.minutesDom = document.querySelector('#Minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.fillerDom = document.querySelector('#filler');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.querySelector('#Start').onclick = function(){
        self.startWork.apply(self);
      };
      document.querySelector('#Short').onclick = function(){
        self.startShortBreak.apply(self);
      };
      document.querySelector('#Long').onclick = function(){
        self.startLongBreak.apply(self);
      };
      document.querySelector('#Stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.fillerIncrement = 200/(this.minutes*60);
      this.fillerHeight = 0;  
    },
    startWork: function() {
      this.resetVariables(25, 0, true);
    },
    startShortBreak : function(){
      this.resetVariables(5, 0, true);
    },
    startLongBreak : function(){
      this.resetVariables(15, 0, true);
    },
    stopTimer : function(){
      this.resetVariables(25, 0, false);
      this.updateDom();
    },
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.fillerHeight = this.fillerHeight + this.fillerIncrement;
      this.fillerDom.style.height = this.fillerHeight + 'px';
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
      this.fillerHeight = 0;
    }
};

window.onload = function(){
  pomodoro.init();
};