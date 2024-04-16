function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GameSet = document.querySelector(".matrix-set");

let numArray = [];
let randNum;

do {
  randNum = rand(1, 25);
  if (!numArray.includes(randNum)) {
    numArray.push(randNum);
  }
} while (numArray.length < 25);

console.log(numArray);

for (let i = 0; i < 25; i++) {
  GameSet.innerHTML += "<span>" + numArray[i] + "</span>";
}

console.log(GameSet);

const spanTest = document.querySelector("span");
console.log(spanTest);
spanTest.addEventListener("click", (_) => {
  spanTest.style.position = "absolute";
  spanTest.style.right = 0;
  spanTest.style.top = 0;
});
