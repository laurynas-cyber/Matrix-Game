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

let functionsExecuted = false;
let getBalls = function () {
  // this.removeEventListener("click", getBalls);
  // if (!functionsExecuted) {
  let startX_Set = 1180;
  let startY_Set = 10;
  let count2 = 1;

  GameBalls.forEach((a, i) => {
    a.addEventListener("click", (e) => {
      if (a.innerText == count2 && Alert.innerText != "Your time ran out") {
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
  // reset.removeEventListener("click", getBalls);
  //   functionsExecuted = true;
  // }
};

getBalls();

start.addEventListener("click", (e) => {
  GameBalls.forEach((e) => (e.style.visibility = "visible"));
  countTime = 30;
  Alert.innerText = "";
  clearInterval(timerId);
  ClockGo();
});

// reset.addEventListener("click", getBalls, { once: true });

reset.addEventListener("click", (_) => {
  // this.removeEventListener("click", getBalls);
  placeRandNum();

  GameSet();

  getBalls(); //pasileidzia dvi funkcijos
  countTime = 30;
  Alert.innerText = "";
  clearInterval(timerId);
  ClockGo();
});

reset.removeEventListener("click", getBalls);

let timerId;
let countTime = 30;
Clock.innerText = countTime;
function ClockGo() {
  timerId = setInterval(() => {
    countTime--;
    Clock.innerText = countTime;
    if (countTime == 0) {
      Clock.innerText = "";
      clearInterval(timerId);
      return (Alert.innerText = "Your time ran out");
    }
    if (countTime < 10) {
      Clock.innerText = "0" + countTime;
    }
  }, 1000);
}
