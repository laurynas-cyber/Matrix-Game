function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GameBalls = document.querySelectorAll(".ball");
const oneBall = document.querySelector(".ball");
console.log(oneBall);
let numArray = [];
let randNum;

do {
  randNum = rand(1, 25);
  if (!numArray.includes(randNum)) {
    numArray.push(randNum);
  }
} while (numArray.length < 25);

let startX = 10;
let startY = 10;
GameBalls.forEach((el, i) => {
  el.innerHTML = numArray[i];
  if (startX > 530) {
    startX = 10;
    startY += 110;
    count = 0;
  }
  GameBalls[i].style.left = startX + "px";
  GameBalls[i].style.top = startY + "px";
  startX += 130;
});

// function getBalls() {
//   GameBalls.forEach((a, i) => {
//     GameBalls[0].style.right = "0px";
//     GameBalls[0].style.top = "0px";
//   });
// }

oneBall.addEventListener("click", (_) => {
  oneBall.style.left = "1180px";
});
