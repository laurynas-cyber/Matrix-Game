function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GameBalls = document.querySelectorAll(".ball");
const oneBall = document.querySelector(".ball");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");

const Clock = document.querySelector(".clock");
// Clock.classList.remove("clock");
console.log(Clock);
const Alert = document.querySelector(".alert-message");

let numArray = [];
let randNum;
let ColorsArray = [];
let randColors;

function placeRandNum() {
  do {
    randColors = `(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
    ColorsArray.push("rgb" + randColors);
    if (numArray.length == 25) {
      numArray = [];
    }
    randNum = rand(1, 25);

    if (!numArray.includes(randNum)) {
      numArray.push(randNum);
    }
  } while (numArray.length < 25);
}

placeRandNum();
console.log(randColors, ColorsArray);
function GameSet() {
  let startX = 10;
  let startY = 10;
  GameBalls.forEach((el, i) => {
    el.innerHTML = numArray[i];
    if (startX > 530) {
      startX = 10;
      startY += 110;
      count = 0;
    }
    el.style.left = startX + "px";
    el.style.top = startY + "px";
    // el.style.backgroundColor = ColorsArray[i];
    el.style.backgroundImage = `linear-gradient(90deg, ${
      ColorsArray[rand(0, ColorsArray.length)]
    }, ${ColorsArray[rand(0, ColorsArray.length)]})`;
    startX += 130;
  });
}
GameSet();

function getBalls() {
  let startX_Set = 1180;
  let startY_Set = 10;
  let count2 = 1;
  GameBalls.forEach((a, i) => {
    a.addEventListener("click", (e) => {
      if (a.innerText == count2) {
        a.style.left = startX_Set + "px";
        a.style.top = startY_Set + "px";
        count2++;
        startX_Set = startX_Set - 130;
        if (startX_Set < 660) {
          startX_Set = 1180;
          startY_Set += 110;
        }
      }
    });
  });
}

getBalls();

//AI kodas
// start.addEventListener("click", startCountdown);

// function startCountdown() {
//   // Set the countdown time in seconds
//   var countdownTime = 10; // 60 seconds

//   // Update the display immediately to show the starting time
//   updateDisplay(countdownTime);

//   // Start the countdown interval
//   var countdownInterval = setInterval(function () {
//     countdownTime--;
//     updateDisplay(countdownTime);

//     // If countdown reaches zero, clear the interval
//     if (countdownTime <= 0) {
//       clearInterval(countdownInterval);
//       alert("Countdown complete!");
//     }
//   }, 1000); // Update every 1 second (1000 milliseconds)
// }

// function updateDisplay(time) {
//   // Format seconds into minutes:seconds format
//   var minutes = Math.floor(time / 60);
//   var seconds = time % 60;

//   // Display the formatted time in the countdownDisplay element
//   document.getElementById("clock").innerText = minutes + "m " + seconds + "s";
// }

// mano kodas
start.addEventListener("click", (e) => {
  GameBalls.forEach((e) => (e.style.visibility = "visible"));
  Clock.innerText = 10;
  setInterval(ClockGo, 1000); //pasileidzia dvi funkcijos
  // clearInterval(seconds);
  // console.log(e.type, e);
});

reset.addEventListener("click", (_) => {
  placeRandNum();
  console.log(numArray);
  GameSet();
  getBalls(); //pasileidzia dvi funkcijos
  Clock.innerText = 10;
  // setInterval(ClockGo, 1000);
});

function ClockGo() {
  if (Clock.innerText != 0) {
    Clock.innerText = parseInt(Clock.innerText) - 1;
  } else if (Clock.innerText >= 0) {
    Clock.innerText = 0;
    return (Alert.innerText = "Your time ran out");
  }
}

// let seconds = setInterval(ClockGo, 1000);
