const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlayClick = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
const handlePause = (e) => (playBtn.innerText = "play");
const handlePlay = (e) => (playBtn.innerText = "pause");

const handleMuteClick = (e) => {};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
