let box = document.querySelector(".box");

let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#nwbtn");
let msgContainer = document.querySelector(".msg-container");
let pgrh = document.querySelector("#pg");

let trunO = true;

let winpatterns = [
  //all directions
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (trunO) {
      box.innerText = "O";
      box.style.color = "orange";
      trunO = false;
    } else {
      box.innerText = "X";
      box.style.color = "green";
      trunO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        alert(`GameOver -> Team"${pos1val}" is Won!`);
        console.log("Winner! = ", pos1val);
        showWinner(pos1val);
      }
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

showWinner = (winner) => {
  pg.innerText = `Congratulations!,
     Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const resetGame = () => {
  trunO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);
