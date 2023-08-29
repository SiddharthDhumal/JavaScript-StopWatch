let timer = document.querySelector(".timer");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");
let seconds = document.querySelector(".seconds");
let miliSeconds = document.querySelector(".miliseconds");
let miliTiming = parseInt("00", 8);
let secondTiming = parseInt("00", 8);
let myInterval;

function myTimer() {
  miliTiming = miliTiming + 1;
  miliSeconds.innerHTML = miliTiming;
  console.log(miliTiming);
  if (miliTiming === 9) {
    miliTiming = parseInt("00", 8);
    secondTiming += 1;
    if (secondTiming < 10) {
      seconds.innerHTML = "0" + secondTiming;
    } else {
      seconds.innerHTML = secondTiming;
    }
  }
}

function startTiming() {
  clearInterval(myInterval);
  myInterval = setInterval(myTimer, 1);
  return myInterval;
}

function stopTiming() {
  clearInterval(myInterval);
}

function resetTiming() {
  secondTiming = parseInt("00", 8);
  miliTiming = parseInt("00", 8);
  miliSeconds.innerHTML = "0" + miliTiming;
  seconds.innerHTML = "0" + secondTiming;
  clearInterval(myInterval);
}

startBtn.addEventListener("click", startTiming);

stopBtn.addEventListener("click", stopTiming);

resetBtn.addEventListener("click", resetTiming);
