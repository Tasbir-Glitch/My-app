// Navigation
const liElements = document.querySelectorAll('.navigation-ul li');
liElements.forEach(li => {
    li.addEventListener('click', () => {
        liElements.forEach(li => {
            li.classList.remove('nav-active');
        });
        li.classList.add('nav-active');
    });
});



// Filter
document.addEventListener('click', function (event) {
    if (event.target.matches('.nav-item')) {
        var show = event.target.dataset.show;
        var showElement = document.querySelector(show);
        var siblings = showElement.parentNode.children;

        showElement.classList.remove('hide');
        for (var i = 0; i < siblings.length; i++) {
            if (siblings[i] !== showElement) {
                siblings[i].classList.add('hide');
            }
        }

        event.target.classList.add('active');
        var activeSiblings = event.target.parentNode.querySelectorAll('.nav-item.active');
        for (var j = 0; j < activeSiblings.length; j++) {
            if (activeSiblings[j] !== event.target) {
                activeSiblings[j].classList.remove('active');
            }
        }
    }
});


// Music player
const player = document.getElementById("player");
const playPauseButton = document.getElementById("music-play-pause");
const prevButton = document.getElementById("music-prev-btn");
const nextButton = document.getElementById("music-next-btn");
const trackTitle = document.getElementById("track-title");
const volumeSlider = document.getElementById("volume-slider");

let currentTrack = 0;
let tracks = [{
        src: "assets/audios/punch2.mp3",
        type: "audio/mp3",
        trackTitle: "Track 1",
    },
    {
        src: "assets/audios/punch-kicked.mp3",
        type: "audio/mp3",
        trackTitle: "Track 2",
    },
    {
        src: "assets/audios/punch-mastered.mp3",
        type: "audio/mp3",
        trackTitle: "Track 3",
    },
];

playPauseButton.addEventListener("click", function () {
    if (player.paused) {
        player.play();
        playPauseButton.innerHTML = '<img src="assets/images/icon/pause.svg" alt="micon">';
        trackTitle.innerHTML = "Now playing: " + tracks[currentTrack].trackTitle;
    } else {
        player.pause();
        playPauseButton.innerHTML = '<img src="assets/images/icon/play.svg" alt="micon">';
        trackTitle.innerHTML = "Play Music:";
    }
});

prevButton.addEventListener("click", function () {
    currentTrack = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    player.src = tracks[currentTrack].src;
    player.type = tracks[currentTrack].type;
    player.play();
    trackTitle.innerHTML = "Now playing: " + tracks[currentTrack].trackTitle;
});

nextButton.addEventListener("click", function () {
    currentTrack = currentTrack === tracks.length - 1 ? 0 : currentTrack + 1;
    player.src = tracks[currentTrack].src;
    player.type = tracks[currentTrack].type;
    player.play();
    trackTitle.innerHTML = "Now playing: " + tracks[currentTrack].trackTitle;
});

player.addEventListener("ended", function () {
    currentTrack = currentTrack === tracks.length - 1 ? 0 : currentTrack;
    player.src = tracks[currentTrack].src;
    player.type = tracks[currentTrack].type;
    player.play();
    trackTitle.innerHTML = "Now playing: " + tracks[currentTrack].trackTitle;
});
volumeSlider.addEventListener("input", function () {
    player.volume = volumeSlider.value;
});


// Music bar
const musicBtn = document.querySelector('.music-btn');
const musicBar = document.querySelector('.music-bar');
const musicBarClose = document.querySelector('.music-bar-close');
musicBtn.addEventListener('click', () => musicBar.classList.add('bar-pulled'));
musicBarClose.addEventListener('click', () => musicBar.classList.remove('bar-pulled'));


// Breathe
const breather = document.querySelector('.breather');
breather.addEventListener('click', () => breather.classList.toggle('equal-breathe'));

// Breathe countdown
const breatheCountdownEl = document.querySelector(".breathe-countdown-text");
let countdownInterval;

breather.addEventListener('click', function () {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    breatheCountdownEl.innerHTML = "3";
    let count = 3;
    countdownInterval = setInterval(function () {
        count--;
        breatheCountdownEl.innerHTML = count;
        if (count === 0) {
            clearInterval(countdownInterval);
            breatheCountdownEl.innerHTML = "Go!";
        }
    }, 1000);
});


// Swipe
const swipeElement = document.querySelector('.main-swipe');
const mainElement = document.querySelector('.main');

swipeElement.addEventListener('touchstart', handleTouchStart, false);
swipeElement.addEventListener('touchmove', handleTouchMove, false);

let startY;

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  const touchY = event.touches[0].clientY;
  const deltaY = startY - touchY;

  if (deltaY > 0) {
    mainElement.classList.add('swiped-up');
  } else {
    mainElement.classList.remove('swiped-up');
  }
}