let startTime, updatedTime, difference, timerInterval;
let running = false;
let lapCounter = 1;

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 1000);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  difference = 0;
  document.getElementById("time").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  lapCounter = 1;
}

