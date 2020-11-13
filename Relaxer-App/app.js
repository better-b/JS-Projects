// choose duration
const timeBtn = document.querySelectorAll('.time-picker button');
// play or pause
const song = document.querySelector('.song');
const play = document.querySelector('.play');
const outline = document.querySelector('.moving-outline circle');
const video = document.querySelector('.video-container video');

// choose song
const soundPicker = document.querySelectorAll('.sound-picker button');

// display time
const timeDisplay = document.querySelector('.time-display');

// length of the outline

const outlineLength = outline.getTotalLength();

// The start position of time play
outline.style.strokeDasharray = outlineLength;
// Hide the circle by offsetting dash 
outline.style.strokeDashoffset = outlineLength;

let timeDuration = 600;

// Time Display 
song.ontimeupdate = function() {
    let currentTime = song.currentTime;
    let elapsedTime = timeDuration - currentTime;
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = Math.floor(elapsedTime % 60);

    timeDisplay.textContent = `${minutes} : ${seconds}`;

// Circle animation

    let runningTime = outlineLength - (currentTime / timeDuration) * outlineLength;
    outline.style.strokeDashoffset = runningTime;

    if (currentTime >= timeDuration){
        song.pause();
        song.currentTime = 0;
        video.pause();
        play.src= "./Img/replay.png";
    }
    };

// Choose sound
soundPicker.forEach(sound => {
    sound.addEventListener('click', function(){
        song.src = this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video');
        checkPlaying(song);
    })

// play sound
play.addEventListener('click', () => {
    checkPlaying(song);
    });

// Time options
timeBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        timeDuration = this.getAttribute('data-time');
        timeDisplay.textContent = `${Math.floor(timeDuration / 60)}:${Math.floor(timeDuration % 60)}`;
        song.currentTime = 0;
    })
    });

// create a function to stop and play the sound
const checkPlaying = function(song) {
    if (song.paused){
        song.play();
        video.play();
        play.src = "./Img/pause.png";
    } else {
        song.pause();
        video.pause();
        play.src = "./Img/play.svg";
    }
    };
    });