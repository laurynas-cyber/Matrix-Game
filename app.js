function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GameBalls = document.querySelectorAll(".ball");
const oneBall = document.querySelector(".ball");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");



let numArray = [];
let randNum;

function placeRandNum() {
  do {
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
console.log(numArray);
placeRandNum();
console.log(numArray);

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

reset.addEventListener("click", (_) => {
  placeRandNum();
  console.log(numArray);
  GameSet();
  getBalls();
});

start.addEventListener("click", (_) => {
  GameBalls.forEach((e) => (e.style.visibility = "visible"));
});
