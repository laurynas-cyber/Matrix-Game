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

    el.style.backgroundImage = `linear-gradient(90deg, ${
      ColorsArray[rand(0, ColorsArray.length)]
    }, ${ColorsArray[rand(0, ColorsArray.length)]})`;
    startX += 130;
  });
}
GameSet();

let count2 = 1;
let startX_Set = 1180;
let startY_Set = 10;
function getBalls() {
  GameBalls.forEach((a, i) => {
    a.classList.add("ballShake");

    a.addEventListener("click", (e) => {
      a.classList.remove("set");

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
      if (a.style.top == "450px" && a.style.left == "660px") {
        console.log(a.innerText);

        clearInterval(timerId);
        Clock.innerText = "YOU DID IT!!!";
        Clock.classList.add("green");
        setInterval((_) => {

          Clock.classList.toggle("green");
        }, 1000);
      }
    });
  });
}

let flag = true;

start.addEventListener("click", (e) => {
  if (flag == true) {
    getBalls();
    flag = false;
    GameBalls.forEach((e) => {
      e.style.visibility = "visible";
      e.classList.add("set");
    });
    clearInterval(timerId);
    if (countTime != 0) {
      ClockGo();
    }

    startX_Set = 1180;
    startY_Set = 10;
  }
});

reset.addEventListener("click", (_) => {
  placeRandNum();

  GameSet();
  count2 = 1;
  startX_Set = 1180;
  startY_Set = 10;
  getBalls();
  countTime = 30;
  Alert.innerText = "";
  clearInterval(timerId);
  ClockGo();
});

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
