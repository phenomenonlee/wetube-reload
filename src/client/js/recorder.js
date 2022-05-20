const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: { with: 400, height: 400 },
  });
  video.srcObject = stream;
  video.play();
};

startBtn.addEventListener("click", handleStart);
